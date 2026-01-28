'use client';

import { useEffect } from 'react';
import { AdminWrapper } from '@/components/admin/layout/AdminWrapper';
import { useAppointmentStore } from '@/stores/appointmentStore';
import { LoadingSkeleton, PaginationControls, StatusBadge, EmptyState } from '@/components/admin/common/CommonComponents';
import { Calendar } from 'lucide-react';
import Link from 'next/link';
import { formatDistanceToNow, format } from 'date-fns';

export default function AppointmentsPage() {
  const { appointments, loading, pagination, filters, fetchAppointments, setFilters } = useAppointmentStore();

  useEffect(() => {
    fetchAppointments();
  }, []);

  const handleStatusFilter = (status: string | null) => {
    setFilters(status ? { status } : {});
    fetchAppointments(1, status ? { status } : {});
  };

  if (loading) return <AdminWrapper title="Appointments"><LoadingSkeleton /></AdminWrapper>;

  return (
    <AdminWrapper title="Appointments">
      {/* Filters */}
      <div className="mb-6 flex flex-wrap gap-2">
        <button
          onClick={() => handleStatusFilter(null)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            !filters.status
              ? 'bg-emerald-600 text-white'
              : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
          }`}
        >
          All
        </button>
        <button
          onClick={() => handleStatusFilter('pending')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            filters.status === 'pending'
              ? 'bg-yellow-600 text-white'
              : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
          }`}
        >
          Pending
        </button>
        <button
          onClick={() => handleStatusFilter('confirmed')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            filters.status === 'confirmed'
              ? 'bg-green-600 text-white'
              : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
          }`}
        >
          Confirmed
        </button>
        <button
          onClick={() => handleStatusFilter('cancelled')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            filters.status === 'cancelled'
              ? 'bg-red-600 text-white'
              : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
          }`}
        >
          Cancelled
        </button>
      </div>

      {/* Appointments Table */}
      {appointments.length === 0 ? (
        <EmptyState
          icon={Calendar}
          title="No appointments found"
          description="You don't have any appointments yet."
        />
      ) : (
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Client Name</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Service</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Date & Time</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Status</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Booked</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Action</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment) => (
                  <tr key={appointment._id} className="border-b border-slate-200 hover:bg-slate-50">
                    <td className="px-6 py-4 text-sm text-slate-900">{appointment.name}</td>
                    <td className="px-6 py-4 text-sm text-slate-600">{appointment.serviceTitle}</td>
                    <td className="px-6 py-4 text-sm text-slate-900">
                      {format(new Date(appointment.scheduledDate), 'MMM d, yyyy')} at {appointment.scheduledTime}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <StatusBadge status={appointment.status} />
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      {formatDistanceToNow(new Date(appointment.createdAt), { addSuffix: true })}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <Link
                        href={`/admin/appointments/${appointment._id}`}
                        className="text-emerald-600 hover:text-emerald-700 font-medium"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <PaginationControls
            page={pagination.page}
            pages={pagination.pages}
            onPageChange={(page) => fetchAppointments(page, filters)}
            loading={loading}
          />
        </div>
      )}
    </AdminWrapper>
  );
}
