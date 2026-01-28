import { create } from 'zustand';
import { Appointment } from '@/types/appointment';

interface AppointmentStore {
  appointments: Appointment[];
  loading: boolean;
  error: string | null;
  pagination: { page: number; limit: number; total: number };
  filters: { status?: string; service?: string; search?: string };

  fetchAppointments: (page?: number, filters?: any) => Promise<void>;
  updateAppointment: (id: string, data: any) => Promise<void>;
  confirmAppointment: (id: string) => Promise<void>;
  cancelAppointment: (id: string, reason: string) => Promise<void>;
  setFilters: (filters: any) => void;
  setError: (error: string | null) => void;
}

export const useAppointmentStore = create<AppointmentStore>((set, get) => ({
  appointments: [],
  loading: false,
  error: null,
  pagination: { page: 1, limit: 10, total: 0 },
  filters: {},

  fetchAppointments: async (page = 1, filters = {}) => {
    set({ loading: true, error: null });
    try {
      const params = new URLSearchParams();
      params.append('page', page.toString());
      params.append('limit', '10');

      if (filters.status) params.append('status', filters.status);
      if (filters.service) params.append('service', filters.service);
      if (filters.search) params.append('search', filters.search);

      const response = await fetch(`/api/admin/appointments?${params}`);
      if (!response.ok) throw new Error('Failed to fetch appointments');

      const data = await response.json();
      set({
        appointments: data.data.appointments,
        pagination: data.data.pagination,
        filters,
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      set({ error: message });
    } finally {
      set({ loading: false });
    }
  },

  updateAppointment: async (id, data) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(`/api/admin/appointments/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to update appointment');

      // Refresh appointments
      const state = get();
      await state.fetchAppointments(state.pagination.page, state.filters);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      set({ error: message });
      throw error;
    } finally {
      set({ loading: false });
    }
  },

  confirmAppointment: async (id) => {
    return get().updateAppointment(id, {
      status: 'confirmed',
      confirmationEmailSent: true,
    });
  },

  cancelAppointment: async (id, reason) => {
    return get().updateAppointment(id, {
      status: 'cancelled',
      cancellationReason: reason,
    });
  },

  setFilters: (filters) => {
    set({ filters });
  },

  setError: (error) => {
    set({ error });
  },
}));
