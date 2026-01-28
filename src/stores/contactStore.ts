import { create } from 'zustand';
import { ContactMessage } from '@/types/contact';

interface ContactStore {
  messages: ContactMessage[];
  loading: boolean;
  error: string | null;
  pagination: { page: number; limit: number; total: number };
  filters: { status?: string; search?: string };

  fetchMessages: (page?: number, filters?: any) => Promise<void>;
  updateMessage: (id: string, data: any) => Promise<void>;
  deleteMessage: (id: string) => Promise<void>;
  setFilters: (filters: any) => void;
  setError: (error: string | null) => void;
}

export const useContactStore = create<ContactStore>((set, get) => ({
  messages: [],
  loading: false,
  error: null,
  pagination: { page: 1, limit: 10, total: 0 },
  filters: {},

  fetchMessages: async (page = 1, filters = {}) => {
    set({ loading: true, error: null });
    try {
      const params = new URLSearchParams();
      params.append('page', page.toString());
      params.append('limit', '10');

      if (filters.status) params.append('status', filters.status);
      if (filters.search) params.append('search', filters.search);

      const response = await fetch(`/api/admin/contact-messages?${params}`);
      if (!response.ok) throw new Error('Failed to fetch messages');

      const data = await response.json();
      set({
        messages: data.data.messages,
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

  updateMessage: async (id, data) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(`/api/admin/contact-messages/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to update message');

      // Refresh messages
      const state = get();
      await state.fetchMessages(state.pagination.page, state.filters);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      set({ error: message });
      throw error;
    } finally {
      set({ loading: false });
    }
  },

  deleteMessage: async (id) => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(`/api/admin/contact-messages/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to delete message');

      // Refresh messages
      const state = get();
      await state.fetchMessages(state.pagination.page, state.filters);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      set({ error: message });
      throw error;
    } finally {
      set({ loading: false });
    }
  },

  setFilters: (filters) => {
    set({ filters });
  },

  setError: (error) => {
    set({ error });
  },
}));
