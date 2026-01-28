export interface Appointment {
  _id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  serviceTitle: string;
  scheduledDate: string;
  scheduledTime: string;
  message?: string;
  firstSession: boolean;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  cancellationReason?: string;
  confirmationEmailSent: boolean;
  reminderEmailSent: boolean;
  completedAt?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface AppointmentDetailProps {
  appointment: Appointment;
  onStatusChange: (status: Appointment['status']) => void;
  onConfirm: () => Promise<void>;
  onCancel: (reason: string) => Promise<void>;
  onReschedule: (date: string, time: string) => Promise<void>;
}
