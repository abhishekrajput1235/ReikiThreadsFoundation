// Simple in-memory storage for demo purposes
// In production, this would be replaced with MongoDB

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  status: 'new' | 'read' | 'replied';
  createdAt: string;
  updatedAt: string;
}

interface Appointment {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  serviceTitle: string;
  date: string;
  time: string;
  message?: string;
  firstSession: boolean;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  createdAt: string;
  updatedAt: string;
}

// Initialize with some demo data
let contactMessages: ContactMessage[] = [
  {
    id: 'msg_001',
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    phone: '+1234567890',
    subject: 'Reiki Healing Inquiry',
    message: 'Hi, I\'m interested in scheduling a Reiki healing session. I\'ve never tried it before and would love to know more about what to expect.',
    status: 'new',
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
    updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'msg_002',
    name: 'Michael Chen',
    email: 'michael@example.com',
    phone: '+1987654321',
    subject: 'Distance Reiki Question',
    message: 'I live in another city but am very interested in distance Reiki healing. How does this work exactly? Can it be as effective as in-person sessions?',
    status: 'read',
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
    updatedAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'msg_003',
    name: 'Emma Williams',
    email: 'emma@example.com',
    phone: '+1555123456',
    subject: 'Thank You!',
    message: 'I just wanted to thank you for the amazing chakra balancing session yesterday. I feel so much more centered and peaceful. When can I book my next appointment?',
    status: 'replied',
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days ago
    updatedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
  }
];

let appointments: Appointment[] = [
  {
    id: 'apt_001',
    name: 'David Anderson',
    email: 'david@example.com',
    phone: '+1444555666',
    service: 'reiki-healing',
    serviceTitle: 'Reiki Energy Healing (Certified Reiki Master)',
    date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 3 days from now
    time: '2:00 PM',
    message: 'First time trying Reiki. Looking forward to the experience!',
    firstSession: true,
    status: 'pending',
    createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(), // 4 hours ago
    updatedAt: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: 'apt_002',
    name: 'Lisa Thompson',
    email: 'lisa@example.com',
    phone: '+1777888999',
    service: 'chakra-balancing',
    serviceTitle: 'Chakra Balancing',
    date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 1 week from now
    time: '10:00 AM',
    message: 'I\'ve been feeling unbalanced lately and would love a chakra balancing session.',
    firstSession: false,
    status: 'confirmed',
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
    updatedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
  }
];

export const mockDB = {
  // Contact Messages
  createContactMessage: (data: Omit<ContactMessage, 'id' | 'createdAt' | 'updatedAt' | 'status'>) => {
    const now = new Date().toISOString();
    const message: ContactMessage = {
      id: Math.random().toString(36).substr(2, 9),
      ...data,
      status: 'new',
      createdAt: now,
      updatedAt: now,
    };
    contactMessages.push(message);
    return message;
  },

  getContactMessages: (filters?: { status?: string; page?: number; limit?: number }) => {
    let filtered = [...contactMessages];
    
    if (filters?.status) {
      filtered = filtered.filter(msg => msg.status === filters.status);
    }
    
    // Sort by newest first
    filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    
    const page = filters?.page || 1;
    const limit = filters?.limit || 10;
    const start = (page - 1) * limit;
    const end = start + limit;
    
    return {
      data: filtered.slice(start, end),
      total: filtered.length,
      page,
      limit,
      pages: Math.ceil(filtered.length / limit),
    };
  },

  updateContactMessage: (id: string, updates: Partial<Omit<ContactMessage, 'id' | 'createdAt'>>) => {
    const index = contactMessages.findIndex(msg => msg.id === id);
    if (index === -1) return null;
    
    contactMessages[index] = {
      ...contactMessages[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    };
    
    return contactMessages[index];
  },

  // Appointments
  createAppointment: (data: Omit<Appointment, 'id' | 'createdAt' | 'updatedAt' | 'status'>) => {
    const now = new Date().toISOString();
    const appointment: Appointment = {
      id: Math.random().toString(36).substr(2, 9),
      ...data,
      status: 'pending',
      createdAt: now,
      updatedAt: now,
    };
    appointments.push(appointment);
    return appointment;
  },

  getAppointments: (filters?: { status?: string; page?: number; limit?: number }) => {
    let filtered = [...appointments];
    
    if (filters?.status) {
      filtered = filtered.filter(apt => apt.status === filters.status);
    }
    
    // Sort by newest first
    filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    
    const page = filters?.page || 1;
    const limit = filters?.limit || 10;
    const start = (page - 1) * limit;
    const end = start + limit;
    
    return {
      data: filtered.slice(start, end),
      total: filtered.length,
      page,
      limit,
      pages: Math.ceil(filtered.length / limit),
    };
  },

  updateAppointment: (id: string, updates: Partial<Omit<Appointment, 'id' | 'createdAt'>>) => {
    const index = appointments.findIndex(apt => apt.id === id);
    if (index === -1) return null;
    
    appointments[index] = {
      ...appointments[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    };
    
    return appointments[index];
  },

  // Stats
  getStats: () => {
    const now = new Date();
    const thisMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    
    return {
      totalContacts: contactMessages.length,
      newContacts: contactMessages.filter(msg => msg.status === 'new').length,
      totalAppointments: appointments.length,
      pendingAppointments: appointments.filter(apt => apt.status === 'pending').length,
      confirmedAppointments: appointments.filter(apt => apt.status === 'confirmed').length,
      thisMonthContacts: contactMessages.filter(msg => 
        new Date(msg.createdAt) >= thisMonth
      ).length,
      thisMonthAppointments: appointments.filter(apt => 
        new Date(apt.createdAt) >= thisMonth
      ).length,
    };
  }
};