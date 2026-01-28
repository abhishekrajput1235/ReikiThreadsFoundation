import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db/mongodb';
import ContactMessage from '@/lib/db/models/ContactMessage';
import { contactMessageSchema } from '@/lib/validation/contact';
import { apiResponse, apiError, handleError } from '@/lib/api/errorHandler';

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();

    // Validate input
    const validationResult = contactMessageSchema.safeParse(body);
    if (!validationResult.success) {
      return apiError(validationResult.error.issues[0].message, 400);
    }

    // Create and save contact message
    const contactMessage = await ContactMessage.create({
      name: validationResult.data.name,
      email: validationResult.data.email,
      phone: validationResult.data.phone,
      subject: validationResult.data.subject,
      message: validationResult.data.message,
      status: 'new',
    });

    // TODO: Send confirmation email to user

    return apiResponse(
      {
        id: contactMessage._id,
        message: 'Thank you for your message. We will respond within 24 hours.',
      },
      201
    );
  } catch (error) {
    return handleError(error);
  }
}
