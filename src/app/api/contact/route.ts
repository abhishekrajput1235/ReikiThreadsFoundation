import { NextRequest, NextResponse } from 'next/server';
import { mockDB } from '@/lib/db/mockDB';
import { apiResponse, apiError, handleError } from '@/lib/api/errorHandler';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Basic validation
    const requiredFields = ['name', 'email', 'phone', 'subject', 'message'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return apiError(`${field} is required`, 400);
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return apiError('Please provide a valid email address', 400);
    }

    // Create contact message using mock database
    const contactMessage = mockDB.createContactMessage({
      name: body.name.trim(),
      email: body.email.toLowerCase().trim(),
      phone: body.phone.trim(),
      subject: body.subject.trim(),
      message: body.message,
    });

    return apiResponse({
      message: 'Contact message sent successfully',
      data: {
        id: contactMessage.id,
        name: contactMessage.name,
        subject: contactMessage.subject,
        createdAt: contactMessage.createdAt,
      }
    }, 201);

  } catch (error) {
    console.error('Contact form error:', error);
    return handleError(error);
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const status = searchParams.get('status');

    // Get messages from mock database
    const result = mockDB.getContactMessages({
      status: status || undefined,
      page,
      limit,
    });

    return apiResponse({
      data: result.data,
      pagination: {
        page: result.page,
        limit: result.limit,
        total: result.total,
        pages: result.pages,
      },
    });

  } catch (error) {
    console.error('Get contact messages error:', error);
    return handleError(error);
  }
}