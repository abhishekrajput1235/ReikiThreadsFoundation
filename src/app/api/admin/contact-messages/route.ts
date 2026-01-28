import { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { mockDB } from '@/lib/db/mockDB';
import { apiResponse, apiError, handleError } from '@/lib/api/errorHandler';

export async function GET(request: NextRequest) {
  try {
    const token = await getToken({ req: request });
    if (!token || (token.role !== 'admin' && token.role !== 'super_admin')) {
      return apiError('Unauthorized', 401);
    }

    const searchParams = request.nextUrl.searchParams;
    const status = searchParams.get('status');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const search = searchParams.get('search');

    // Get messages from mock database
    const result = mockDB.getContactMessages({
      status: status || undefined,
      page,
      limit,
    });

    // If there's a search filter, apply it manually (for demo purposes)
    let filteredData = result.data;
    if (search) {
      const searchLower = search.toLowerCase();
      filteredData = result.data.filter(msg => 
        msg.name.toLowerCase().includes(searchLower) ||
        msg.email.toLowerCase().includes(searchLower) ||
        msg.subject.toLowerCase().includes(searchLower)
      );
    }

    return apiResponse({
      messages: filteredData,
      pagination: {
        total: filteredData.length,
        page,
        limit,
        pages: Math.ceil(filteredData.length / limit),
      },
    });
  } catch (error) {
    return handleError(error);
  }
}

export async function PUT(request: NextRequest) {
  try {
    const token = await getToken({ req: request });
    if (!token || (token.role !== 'admin' && token.role !== 'super_admin')) {
      return apiError('Unauthorized', 401);
    }

    const body = await request.json();
    const { id, status, notes } = body;

    if (!id) {
      return apiError('Message ID is required', 400);
    }

    const message = mockDB.updateContactMessage(id, {
      status: status || undefined,
      notes: notes || undefined,
      updatedAt: new Date().toISOString(),
    });

    if (!message) {
      return apiError('Message not found', 404);
    }

    return apiResponse(message);
  } catch (error) {
    return handleError(error);
  }
}
