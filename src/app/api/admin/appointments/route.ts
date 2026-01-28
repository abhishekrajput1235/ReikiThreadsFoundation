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
    const service = searchParams.get('service');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const search = searchParams.get('search');

    // Get appointments from mock database
    const result = mockDB.getAppointments({
      status: status || undefined,
      page,
      limit,
    });

    // Apply additional filters manually (for demo purposes)
    let filteredData = result.data;
    
    if (service) {
      filteredData = filteredData.filter(apt => apt.service === service);
    }
    
    if (search) {
      const searchLower = search.toLowerCase();
      filteredData = filteredData.filter(apt => 
        apt.name.toLowerCase().includes(searchLower) ||
        apt.email.toLowerCase().includes(searchLower)
      );
    }

    return apiResponse({
      appointments: filteredData,
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
      return apiError('Appointment ID is required', 400);
    }

    const appointment = mockDB.updateAppointment(id, {
      status: status || undefined,
      notes: notes || undefined,
      updatedAt: new Date().toISOString(),
    });

    if (!appointment) {
      return apiError('Appointment not found', 404);
    }

    return apiResponse(appointment);
  } catch (error) {
    return handleError(error);
  }
}
