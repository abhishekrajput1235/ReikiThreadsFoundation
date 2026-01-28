import mongoose, { Schema, Document } from 'mongoose';

export interface IAppointment extends Document {
  userId?: string;
  name: string;
  email: string;
  phone: string;
  service: 'reiki-healing' | 'distance-reiki' | 'chakra-balancing' | 'aura-cleansing' | 'meditative-sessions';
  serviceTitle: string;
  scheduledDate: Date;
  scheduledTime: string;
  message?: string;
  firstSession: boolean;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  cancellationReason?: string;
  confirmationEmailSent: boolean;
  reminderEmailSent: boolean;
  completedAt?: Date;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

const appointmentSchema = new Schema<IAppointment>(
  {
    userId: String,
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    service: {
      type: String,
      enum: ['reiki-healing', 'distance-reiki', 'chakra-balancing', 'aura-cleansing', 'meditative-sessions'],
      required: true,
    },
    serviceTitle: {
      type: String,
      required: true,
    },
    scheduledDate: {
      type: Date,
      required: true,
    },
    scheduledTime: {
      type: String,
      required: true,
    },
    message: String,
    firstSession: {
      type: Boolean,
      default: true,
    },
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'cancelled', 'completed'],
      default: 'pending',
    },
    cancellationReason: String,
    confirmationEmailSent: {
      type: Boolean,
      default: false,
    },
    reminderEmailSent: {
      type: Boolean,
      default: false,
    },
    completedAt: Date,
    notes: String,
    deletedAt: Date,
  },
  {
    timestamps: true,
  }
);

// Indexes for faster queries
appointmentSchema.index({ email: 1 });
appointmentSchema.index({ status: 1 });
appointmentSchema.index({ scheduledDate: 1 });
appointmentSchema.index({ createdAt: -1 });
appointmentSchema.index({ deletedAt: 1 });

export default mongoose.models.Appointment || 
  mongoose.model<IAppointment>('Appointment', appointmentSchema);
