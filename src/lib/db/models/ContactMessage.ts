import mongoose, { Schema, Document } from 'mongoose';

export interface IContactMessage extends Document {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  status: 'new' | 'read' | 'replied';
  adminNotes?: string;
  reply?: {
    message: string;
    sentAt: Date;
    sentBy: string;
  };
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

const contactMessageSchema = new Schema<IContactMessage>(
  {
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
    subject: {
      type: String,
      required: true,
      trim: true,
    },
    message: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['new', 'read', 'replied'],
      default: 'new',
    },
    adminNotes: String,
    reply: {
      message: String,
      sentAt: Date,
      sentBy: String,
    },
    deletedAt: Date,
  },
  {
    timestamps: true,
  }
);

// Index for faster queries
contactMessageSchema.index({ email: 1 });
contactMessageSchema.index({ status: 1 });
contactMessageSchema.index({ createdAt: -1 });
contactMessageSchema.index({ deletedAt: 1 });

export default mongoose.models.ContactMessage || 
  mongoose.model<IContactMessage>('ContactMessage', contactMessageSchema);
