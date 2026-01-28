import { z } from 'zod';

export const appointmentSchema = z.object({
  service: z.enum(['reiki-healing', 'distance-reiki', 'chakra-balancing', 'aura-cleansing', 'meditative-sessions']),
  date: z.string().refine((date) => {
    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return selectedDate >= today;
  }, 'Date must be today or later'),
  time: z.string().min(1, 'Time is required'),
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits').max(20),
  message: z.string().max(2000).optional(),
  firstSession: z.boolean().default(true),
});

export const appointmentUpdateSchema = z.object({
  status: z.enum(['pending', 'confirmed', 'cancelled', 'completed']).optional(),
  cancellationReason: z.string().max(500).optional(),
  notes: z.string().max(2000).optional(),
});

export const appointmentRescheduleSchema = z.object({
  date: z.string(),
  time: z.string().min(1, 'Time is required'),
});

export type AppointmentInput = z.infer<typeof appointmentSchema>;
export type AppointmentUpdateInput = z.infer<typeof appointmentUpdateSchema>;
export type AppointmentRescheduleInput = z.infer<typeof appointmentRescheduleSchema>;
