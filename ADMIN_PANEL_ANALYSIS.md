# ReikiThreads Admin Dashboard - Analysis & Design Document

## 1. EXISTING FORM ANALYSIS

### 1.1 CONTACT US FORM
**Location:** `/app/contact/page.tsx`

#### Fields Collected:
```
- name (string, required)
- email (string, required)
- phone (string, required)
- subject (string, required)
- message (string, required)
```

#### Current Flow:
1. User fills out form on client-side
2. Form data is logged to console (development only)
3. `submitted` state is set to true
4. Success message displayed
5. **No actual backend submission** - forms are currently client-side only

#### Validation:
- HTML5 form validation (required attributes, email type)
- No complex validation logic currently

#### Issues to Address:
- No actual API endpoint to persist data
- No backend storage
- No email integration for responses

---

### 1.2 BOOK APPOINTMENT FORM
**Location:** `/app/book/page.tsx`

#### Fields Collected:
```
- service (string, required) - selected from predefined services
- date (string, required) - date picker
- time (string, required) - selected from predefined time slots
- name (string, required)
- email (string, required)
- phone (string, required)
- message (string, optional)
- firstSession (boolean, default: true)
```

#### Services Available:
```
1. reiki-healing - Reiki Energy Healing (Certified Reiki Master) - 60 min
2. distance-reiki - Distance Reiki Healing - 45-60 min
3. chakra-balancing - Chakra Balancing - 75 min
4. aura-cleansing - Aura Cleansing - 60 min
5. meditative-sessions - Meditative Healing Sessions - 60-90 min
```

#### Time Slots Available:
```
9:00 AM, 10:00 AM, 11:00 AM, 12:00 PM, 2:00 PM, 3:00 PM, 4:00 PM, 5:00 PM, 6:00 PM
```

#### Current Flow:
1. User selects service (step 1)
2. User selects date and time (step 2)
3. User enters personal info (step 3)
4. Form data is logged to console
5. Success message displayed
6. **No actual backend submission**

#### Validation:
- HTML5 validation (required fields)
- Date picker with min date (today or later)
- Basic email/phone validation via input type

---

## 2. PROPOSED DATA MODELS

### 2.1 CONTACT MESSAGE MODEL
```typescript
interface ContactMessage {
  _id: ObjectId;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  status: 'new' | 'read' | 'replied'; // New -> Read -> Replied
  adminNotes?: string;
  reply?: {
    message: string;
    sentAt: Date;
    sentBy: string; // Admin username/email
  };
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date; // Soft delete
}
```

**Status Lifecycle:**
- `new`: Just received, admin hasn't viewed it
- `read`: Admin has viewed the message
- `replied`: Admin has sent a reply via email

---

### 2.2 APPOINTMENT MODEL
```typescript
interface Appointment {
  _id: ObjectId;
  userId?: string; // Optional if not a registered user
  name: string;
  email: string;
  phone: string;
  service: 'reiki-healing' | 'distance-reiki' | 'chakra-balancing' | 'aura-cleansing' | 'meditative-sessions';
  serviceTitle: string;
  scheduledDate: Date;
  scheduledTime: string; // "9:00 AM" format
  message?: string;
  firstSession: boolean;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  cancellationReason?: string;
  confirmationEmailSent: boolean;
  reminderEmailSent: boolean;
  completedAt?: Date;
  notes?: string; // Admin notes
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date; // Soft delete
}
```

**Status Lifecycle:**
- `pending`: Awaiting admin confirmation (initial state)
- `confirmed`: Admin approved, confirmation email sent
- `cancelled`: Admin or user cancelled with reason
- `completed`: Session completed

---

## 3. API ENDPOINTS REQUIRED

### 3.1 CONTACT MESSAGE ENDPOINTS
```
POST   /api/contact-messages           - Create new message (public)
GET    /api/admin/contact-messages     - List all messages (admin only)
GET    /api/admin/contact-messages/:id - Get single message (admin only)
PUT    /api/admin/contact-messages/:id - Update status/notes (admin only)
POST   /api/admin/contact-messages/:id/reply - Send reply email (admin only)
DELETE /api/admin/contact-messages/:id - Soft delete (admin only)

FILTERS/QUERIES:
- status: 'new' | 'read' | 'replied'
- dateRange: startDate, endDate
- search: search in name/email/message
- pagination: page, limit
- sort: createdAt (asc/desc)
```

### 3.2 APPOINTMENT ENDPOINTS
```
POST   /api/appointments               - Create new booking (public)
GET    /api/admin/appointments         - List all appointments (admin only)
GET    /api/admin/appointments/:id     - Get single appointment (admin only)
PUT    /api/admin/appointments/:id     - Update status/notes (admin only)
POST   /api/admin/appointments/:id/confirm - Confirm & send email (admin only)
POST   /api/admin/appointments/:id/cancel - Cancel with reason (admin only)
POST   /api/admin/appointments/:id/reschedule - Reschedule (admin only)

FILTERS/QUERIES:
- status: 'pending' | 'confirmed' | 'cancelled' | 'completed'
- service: service type
- dateRange: startDate, endDate
- search: search in name/email
- pagination: page, limit
- sort: scheduledDate (asc/desc)
```

### 3.3 ADMIN AUTHENTICATION ENDPOINTS
```
POST   /api/admin/login                - Login (returns JWT or session)
POST   /api/admin/logout               - Logout
GET    /api/admin/me                   - Get current admin user
POST   /api/admin/refresh              - Refresh token (if JWT)
```

### 3.4 ADMIN DASHBOARD STATS ENDPOINTS
```
GET    /api/admin/stats                - Overall stats
  Returns:
  {
    contacts: {
      total: number,
      today: number,
      week: number,
      month: number,
      new: number,
      replied: number
    },
    appointments: {
      total: number,
      pending: number,
      confirmed: number,
      cancelled: number,
      completed: number
    }
  }
```

---

## 4. ADMIN AUTHENTICATION STRATEGY

### Option 1: JWT Token-Based (Recommended for API-first apps)
- Store in localStorage or httpOnly cookie
- Token expires after 24 hours
- Refresh token for extended sessions
- Includes admin role/permissions in token

### Option 2: Session-Based (NextAuth.js)
- Server-side sessions
- Secure, httpOnly cookies
- Simpler to implement with Next.js
- Better for SSR apps

**Recommendation for this project:** NextAuth.js with credentials provider + MongoDB
- Simple to set up
- Built for Next.js
- Better security for SSR
- Can add OAuth later (Google, GitHub, etc.)

---

## 5. FOLDER STRUCTURE

```
src/
├── app/
│   ├── admin/
│   │   ├── layout.tsx                    # Admin layout (no website header/footer)
│   │   ├── login/
│   │   │   └── page.tsx                  # Admin login page
│   │   ├── dashboard/
│   │   │   └── page.tsx                  # Dashboard overview
│   │   ├── contact-messages/
│   │   │   ├── page.tsx                  # List all messages
│   │   │   └── [id]/
│   │   │       └── page.tsx              # View single message + reply
│   │   ├── appointments/
│   │   │   ├── page.tsx                  # List all appointments
│   │   │   └── [id]/
│   │   │       └── page.tsx              # View single appointment
│   │   └── settings/
│   │       └── page.tsx                  # Admin settings (optional)
│   ├── api/
│   │   ├── contact-messages/
│   │   │   ├── route.ts                  # POST to create message
│   │   │   └── [id]/
│   │   │       └── route.ts              # GET single message
│   │   ├── admin/
│   │   │   ├── auth/
│   │   │   │   ├── [nextauth]/
│   │   │   │   │   └── route.ts          # NextAuth handler
│   │   │   │   └── login/
│   │   │   │       └── route.ts          # Alternative login endpoint
│   │   │   ├── contact-messages/
│   │   │   │   ├── route.ts              # GET list, PUT update
│   │   │   │   └── [id]/
│   │   │   │       ├── route.ts          # GET, PUT, DELETE
│   │   │   │       ├── reply/
│   │   │   │       │   └── route.ts      # POST reply
│   │   │   │       └── emails/
│   │   │   │           └── route.ts      # Send emails
│   │   │   ├── appointments/
│   │   │   │   ├── route.ts              # GET list, PUT update
│   │   │   │   └── [id]/
│   │   │   │       ├── route.ts          # GET, PUT, DELETE
│   │   │   │       ├── confirm/
│   │   │   │       │   └── route.ts      # POST confirm
│   │   │   │       ├── cancel/
│   │   │   │       │   └── route.ts      # POST cancel
│   │   │   │       └── reschedule/
│   │   │   │           └── route.ts      # POST reschedule
│   │   │   └── stats/
│   │   │       └── route.ts              # GET dashboard stats
│   │   └── appointments/
│   │       ├── route.ts                  # POST to create appointment
│   │       └── [id]/
│   │           └── route.ts              # GET single appointment
│   └── ... (existing public pages)
│
├── components/
│   ├── admin/
│   │   ├── layout/
│   │   │   ├── AdminSidebar.tsx
│   │   │   ├── AdminHeader.tsx
│   │   │   └── AdminLayout.tsx
│   │   ├── dashboard/
│   │   │   ├── StatsCard.tsx
│   │   │   ├── RecentSubmissionsTable.tsx
│   │   │   └── DashboardOverview.tsx
│   │   ├── contact/
│   │   │   ├── ContactTable.tsx
│   │   │   ├── ContactModal.tsx
│   │   │   ├── ContactFilters.tsx
│   │   │   └── ReplyForm.tsx
│   │   ├── appointments/
│   │   │   ├── AppointmentTable.tsx
│   │   │   ├── AppointmentModal.tsx
│   │   │   ├── AppointmentFilters.tsx
│   │   │   └── ApprovalDialog.tsx
│   │   └── common/
│   │       ├── LoadingSkeletons.tsx
│   │       ├── EmptyState.tsx
│   │       ├── PaginationControls.tsx
│   │       ├── StatusBadge.tsx
│   │       └── ConfirmDialog.tsx
│   └── ... (existing public components)
│
├── lib/
│   ├── db/
│   │   ├── models/
│   │   │   ├── ContactMessage.ts         # Mongoose schema/model
│   │   │   ├── Appointment.ts            # Mongoose schema/model
│   │   │   └── Admin.ts                  # Mongoose schema/model
│   │   ├── mongodb.ts                    # MongoDB connection
│   │   └── seed.ts                       # Seed demo data
│   ├── auth/
│   │   ├── authOptions.ts                # NextAuth configuration
│   │   ├── middleware.ts                 # Auth middleware
│   │   └── jwt.ts                        # JWT utilities (if not using NextAuth)
│   ├── email/
│   │   ├── templates/
│   │   │   ├── confirmationEmail.ts
│   │   │   ├── reminderEmail.ts
│   │   │   ├── replyEmail.ts
│   │   │   └── cancelledEmail.ts
│   │   └── sendEmail.ts                  # Email service (Nodemailer, SendGrid, etc.)
│   ├── validation/
│   │   ├── contact.ts                    # Zod schemas for contact
│   │   ├── appointment.ts                # Zod schemas for appointment
│   │   └── admin.ts                      # Zod schemas for admin
│   ├── hooks/
│   │   ├── useAdmin.ts                   # Admin auth hook
│   │   ├── useContactMessages.ts         # Contact messages hook
│   │   └── useAppointments.ts            # Appointments hook
│   └── api/
│       ├── errorHandler.ts               # API error handling
│       └── responseFormatter.ts          # API response formatting
│
├── stores/
│   ├── adminStore.ts                     # Zustand store for admin
│   ├── contactStore.ts                   # Zustand store for contacts
│   └── appointmentStore.ts               # Zustand store for appointments
│
├── middleware.ts                         # Next.js middleware for auth
└── types/
    ├── index.ts                          # Global types
    ├── contact.ts                        # Contact types
    ├── appointment.ts                    # Appointment types
    └── admin.ts                          # Admin types
```

---

## 6. REQUIRED DEPENDENCIES

```json
{
  "dependencies": {
    // Existing
    "next": "^14.0.4",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^10.17.0",
    "lucide-react": "^0.303.0",
    "tailwindcss": "^3.4.0",
    
    // New: Database
    "mongodb": "^6.3.0",
    "mongoose": "^8.0.0",
    
    // New: Authentication
    "next-auth": "^4.24.0",
    
    // New: Forms & Validation
    "react-hook-form": "^7.48.0",
    "zod": "^3.22.4",
    "@hookform/resolvers": "^3.3.4",
    
    // New: State Management
    "zustand": "^4.4.1",
    
    // New: Email
    "nodemailer": "^6.9.7",
    
    // New: Utilities
    "clsx": "^2.0.0",
    "date-fns": "^2.30.0",
    "axios": "^1.6.2",
    
    // New: HTTP client for admin requests
    "swr": "^2.2.4"
  },
  "devDependencies": {
    // Existing
    "typescript": "^5.3.3",
    "@types/react": "^18.2.46",
    "@types/node": "^20.10.6",
    
    // New: Type definitions
    "@types/nodemailer": "^6.4.14",
    "@types/node": "^20.10.6"
  }
}
```

---

## 7. SECURITY CONSIDERATIONS

1. **Authentication:**
   - Require admin login before accessing /admin routes
   - Use secure session/JWT tokens
   - Implement logout functionality
   - Rate limiting on login endpoint

2. **Authorization:**
   - Admin middleware to check user role
   - Verify admin ownership of data before allowing updates
   - API endpoints must validate admin status

3. **Data Protection:**
   - Soft deletes (don't permanently remove user data)
   - Audit logs for admin actions (optional)
   - Encrypt sensitive fields if needed
   - CORS configuration for API endpoints

4. **Email Security:**
   - Use environment variables for email credentials
   - Validate email addresses before sending
   - Rate limit email sending per user/IP

5. **Input Validation:**
   - Validate all inputs on both client and server
   - Use Zod for schema validation
   - Sanitize HTML in user messages

6. **API Security:**
   - Use middleware to require authentication
   - Return appropriate error messages (don't leak sensitive info)
   - Set proper CORS headers
   - Implement CSRF protection

---

## 8. IMPLEMENTATION CHECKLIST

- [ ] Set up MongoDB connection
- [ ] Create Mongoose schemas for models
- [ ] Implement NextAuth.js authentication
- [ ] Create admin login page
- [ ] Set up middleware for route protection
- [ ] Create API endpoints for contact messages
- [ ] Create API endpoints for appointments
- [ ] Create API endpoint for dashboard stats
- [ ] Build admin layout component
- [ ] Build admin sidebar navigation
- [ ] Build dashboard overview page
- [ ] Build contact messages list & detail pages
- [ ] Build appointment management pages
- [ ] Integrate email service for replies/confirmations
- [ ] Add form validation with Zod
- [ ] Create Zustand stores for state management
- [ ] Add loading states and error handling
- [ ] Add search, filter, and pagination
- [ ] Write tests for API endpoints
- [ ] Deploy and test in production

---

## 9. TECH STACK SUMMARY

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 14 + React 18 + TypeScript |
| Styling | Tailwind CSS |
| Forms | React Hook Form + Zod |
| State Management | Zustand |
| Database | MongoDB + Mongoose |
| Authentication | NextAuth.js |
| Email | Nodemailer / SendGrid |
| Animation | Framer Motion |
| HTTP Client | Axios / SWR |

---

## 10. ENVIRONMENT VARIABLES NEEDED

```env
# Database
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/reikithreads

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here

# Email Service
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Admin Credentials (for seeding)
ADMIN_EMAIL=admin@reikithreads.com
ADMIN_PASSWORD=secure-password-here
```

---

## NEXT STEPS

1. ✅ Analysis complete
2. Install required dependencies
3. Set up MongoDB and create models
4. Implement NextAuth.js authentication
5. Create API endpoints
6. Build admin components
7. Implement email service
8. Test all features
