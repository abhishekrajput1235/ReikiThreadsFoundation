import { z } from 'zod';

export const contactMessageSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits').max(20),
  subject: z.string().min(5, 'Subject must be at least 5 characters').max(200),
  message: z.string().min(10, 'Message must be at least 10 characters').max(5000),
});

export const contactMessageUpdateSchema = z.object({
  status: z.enum(['new', 'read', 'replied']).optional(),
  adminNotes: z.string().max(2000).optional(),
});

export const contactReplySchema = z.object({
  message: z.string().min(10, 'Reply must be at least 10 characters').max(5000),
});

export type ContactMessageInput = z.infer<typeof contactMessageSchema>;
export type ContactMessageUpdateInput = z.infer<typeof contactMessageUpdateSchema>;
export type ContactReplyInput = z.infer<typeof contactReplySchema>;
