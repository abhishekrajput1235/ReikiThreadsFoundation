import mongoose from 'mongoose';
import connectDB from './src/lib/db/mongodb';
import Admin from './src/lib/db/models/Admin';

async function seedDatabase() {
  try {
    await connectDB();
    
    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email: 'admin@reikithreads.com' });
    
    if (!existingAdmin) {
      // Create demo admin user
      const admin = new Admin({
        email: 'admin@reikithreads.com',
        password: 'password123', // In production, this would be hashed with bcrypt
        name: 'Admin User',
        role: 'admin',
        isActive: true
      });
      
      await admin.save();
      console.log('✅ Demo admin user created successfully!');
      console.log('📧 Email: admin@reikithreads.com');
      console.log('🔑 Password: password123');
    } else {
      console.log('ℹ️  Demo admin user already exists');
    }
    
    await mongoose.connection.close();
    console.log('✅ Database connection closed');
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();