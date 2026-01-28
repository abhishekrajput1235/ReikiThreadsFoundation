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

    // Get stats from mock database
    const stats = mockDB.getStats();

    return apiResponse({
      data: {
        contacts: {
          total: stats.totalContacts,
          new: stats.newContacts,
          replied: stats.totalContacts - stats.newContacts, // Demo calculation
          week: stats.thisMonthContacts, // Simplified for demo
        },
        appointments: {
          total: stats.totalAppointments,
          pending: stats.pendingAppointments,
          confirmed: stats.confirmedAppointments,
        }
      }
    });

  } catch (error) {
    console.error('Admin stats error:', error);
    return handleError(error);
  }
}
