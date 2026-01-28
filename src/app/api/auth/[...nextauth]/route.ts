import NextAuth, { type NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import connectDB from '@/lib/db/mongodb';
import Admin from '@/lib/db/models/Admin';

// For demo purposes - in production, use bcrypt
const comparePasswords = (plainPassword: string, hashedPassword: string) => {
  return plainPassword === hashedPassword;
};

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Invalid credentials');
        }

        // Demo credentials for testing (remove this in production)
        if (credentials.email === 'admin@reikithreads.com' && credentials.password === 'password123') {
          return {
            id: 'demo-admin-id',
            email: 'admin@reikithreads.com',
            name: 'Demo Admin',
            role: 'admin',
          };
        }

        try {
          await connectDB();

          const admin = await Admin.findOne({
            email: credentials.email,
            isActive: true,
          });

          if (!admin) {
            throw new Error('Invalid email or password');
          }

          // In production, use bcrypt.compare()
          const passwordMatch = comparePasswords(credentials.password, admin.password);

          if (!passwordMatch) {
            throw new Error('Invalid email or password');
          }

          // Update last login
          admin.lastLogin = new Date();
          await admin.save();

          return {
            id: admin._id.toString(),
            email: admin.email,
            name: admin.name,
            role: admin.role,
          };
        } catch (error) {
          console.error('Auth error:', error);
          // Fallback to demo credentials if database is not available
          throw new Error('Authentication failed');
        }
      },
    }),
  ],
  pages: {
    signIn: '/admin/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = (user as any).role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = token.id;
        (session.user as any).role = token.role;
      }
      return session;
    },
  },
  session: {
    strategy: 'jwt',
    maxAge: 24 * 60 * 60, // 24 hours
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };