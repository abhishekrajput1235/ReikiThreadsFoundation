# ReikiThreads Foundation 🌿

*Weaving Light into Your Life*

A beautiful, professional multi-page website for ReikiThreads Foundation - a Certified Reiki Master offering complementary energy healing and wellness services.

## ✨ Features

- **Modern Design**: Dark emerald green theme with gold accents
- **Responsive**: Fully responsive design for all devices
- **Animations**: Smooth animations powered by Framer Motion
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Ethical Content**: Professional wellness content without medical claims

## 📄 Pages

1. **Home** - Hero section, features, testimonials, blog preview
2. **About** - Foundation story, practitioner profile, values, timeline
3. **Services** - All healing services with details and booking CTAs
4. **Certifications** - Credentials and training philosophy
5. **Book** - Session booking form with service selection
6. **Blog** - Wellness articles and insights
7. **Testimonials** - Client feedback and reviews
8. **Contact** - Contact form, info, and FAQ
9. **Legal** - Disclaimer, Privacy Policy, Terms of Service

## 🛠 Tech Stack

- **Framework**: Next.js 14 (React)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
   ```bash
   cd "/Users/dev/Downloads/Dev Folder/BIDUA Industries/Reikithreads"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Design System

### Colors

- **Primary**: Emerald (Dark: #022c22, Light: #10b981)
- **Accent**: Gold (#facc15, #eab308)
- **Background**: Cream (#faf9f7)
- **Text**: Emerald 950 (#022c22)

### Typography

- **Headings**: Cormorant Garamond (Serif)
- **Body**: Inter (Sans-serif)

### Components

- Custom button styles (primary, secondary, white)
- Card components with hover effects
- Input fields with focus states
- Animated orbs for backgrounds

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## ⚠️ Important Disclaimers

This website practices Reiki as a **complementary energy wellness method** and does not replace medical treatment. All content is designed to be:

- Ethical and professional
- Free from medical claims
- Clear about practitioner qualifications
- Transparent about services offered

## 🔧 Customization

### Update Contact Information

Edit the contact details in:
- `src/components/layout/Footer.tsx`
- `src/app/contact/page.tsx`
- Legal pages

### Modify Services

Update service offerings in:
- `src/app/services/page.tsx`
- `src/app/book/page.tsx`

### Add Blog Posts

Blog posts can be managed in:
- `src/app/blog/page.tsx`
- Consider integrating a CMS (Sanity, Contentful) for dynamic content

## 🎯 Admin Dashboard

A complete admin panel is now available for managing contacts, appointments, and client interactions!

**Quick Access:**
- **Start**: Read [`DOCS_INDEX.md`](./DOCS_INDEX.md) for all documentation
- **Setup**: Follow [`QUICK_START_GUIDE.md`](./QUICK_START_GUIDE.md) (5 minutes)
- **Understand**: Review [`ADMIN_PANEL_ANALYSIS.md`](./ADMIN_PANEL_ANALYSIS.md) for architecture
- **Build**: Use [`ADMIN_IMPLEMENTATION_GUIDE.md`](./ADMIN_IMPLEMENTATION_GUIDE.md) for features
- **Reference**: Check [`FILE_MANIFEST.md`](./FILE_MANIFEST.md) for all files

### Admin Features
✅ Secure authentication with NextAuth.js  
✅ Dashboard with real-time statistics  
✅ Contact message management  
✅ Appointment booking management  
✅ Email templates (confirmation, reminder, cancellation)  
✅ MongoDB database integration  
✅ Zustand state management  
✅ Full TypeScript type safety  
✅ Responsive admin UI  
✅ Production-ready code  

### Quick Start (5 minutes)
```bash
# 1. Create .env.local with your MongoDB URI
# 2. Run npm run dev
# 3. Visit http://localhost:3000/admin/login
# 4. Login with: admin@reikithreads.com / password123
```

**See [`QUICK_START_GUIDE.md`](./QUICK_START_GUIDE.md) for complete setup instructions.**

## 📝 Future Enhancements

- [ ] Payment gateway integration (Stripe/Razorpay)
- [ ] Calendar API integration (Calendly)
- [ ] Client portal
- [ ] Advanced reporting & analytics
- [ ] SMS notifications

## 📄 License

© 2026 ReikiThreads Foundation. All rights reserved.

---

*Built with 💚 for healing*
