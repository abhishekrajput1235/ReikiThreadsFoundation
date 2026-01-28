import { NextRequest, NextResponse } from 'next/server';
import { mockDB } from '@/lib/db/mockDB';
import { appointmentSchema } from '@/lib/validation/appointment';
import { apiResponse, apiError, handleError } from '@/lib/api/errorHandler';

const services: Record<string, string> = {
  'reiki-healing': 'Reiki Energy Healing (Certified Reiki Master)',
  'distance-reiki': 'Distance Reiki Healing',
  'chakra-balancing': 'Chakra Balancing',
  'aura-cleansing': 'Aura Cleansing',
  'meditative-sessions': 'Meditative Healing Sessions',
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const validationResult = appointmentSchema.safeParse(body);
    if (!validationResult.success) {
      return apiError(validationResult.error.errors[0].message, 400);
    }

    const data = validationResult.data;

    // Create appointment using mock database
    const appointment = mockDB.createAppointment({
      name: data.name,
      email: data.email,
      phone: data.phone,
      service: data.service,
      serviceTitle: services[data.service] || data.service,
      date: data.date,
      time: data.time,
      message: data.message,
      firstSession: data.firstSession,
    });

    return apiResponse({
      message: 'Appointment booked successfully',
      data: {
        id: appointment.id,
        name: appointment.name,
        service: appointment.serviceTitle,
        date: appointment.date,
        time: appointment.time,
        createdAt: appointment.createdAt,
      }
    }, 201);

  } catch (error) {
    console.error('Appointment booking error:', error);
    return handleError(error);
  }
}
      reminderEmailSent: false,
    });

    // TODO: Send confirmation email to user and admin

    return apiResponse(
      {
        id: appointment._id,
        message: 'Your booking request has been received. We will contact you within 24 hours to confirm.',
      },
      201
    );
  } catch (error) {
    return handleError(error);
  }
}
