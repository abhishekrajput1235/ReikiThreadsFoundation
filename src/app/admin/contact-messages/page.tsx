'use client';

import { useEffect } from 'react';
import { AdminWrapper } from '@/components/admin/layout/AdminWrapper';
import { useContactStore } from '@/stores/contactStore';
import { LoadingSkeleton, PaginationControls, StatusBadge, EmptyState } from '@/components/admin/common/CommonComponents';
import { Mail } from 'lucide-react';
import Link from 'next/link';
import { formatDistanceToNow } from 'date-fns';

export default function ContactMessagesPage() {
  const { messages, loading, pagination, filters, fetchMessages, setFilters } = useContactStore();

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleStatusFilter = (status: string | null) => {
    setFilters(status ? { status } : {});
    fetchMessages(1, status ? { status } : {});
  };

  if (loading) return <AdminWrapper title="Contact Messages"><LoadingSkeleton /></AdminWrapper>;

  return (
    <AdminWrapper title="Contact Messages">
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
          onClick={() => handleStatusFilter('new')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            filters.status === 'new'
              ? 'bg-blue-600 text-white'
              : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
          }`}
        >
          New
        </button>
        <button
          onClick={() => handleStatusFilter('read')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            filters.status === 'read'
              ? 'bg-yellow-600 text-white'
              : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
          }`}
        >
          Read
        </button>
        <button
          onClick={() => handleStatusFilter('replied')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            filters.status === 'replied'
              ? 'bg-green-600 text-white'
              : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
          }`}
        >
          Replied
        </button>
      </div>

      {/* Messages Table */}
      {messages.length === 0 ? (
        <EmptyState
          icon={Mail}
          title="No messages found"
          description="You don't have any contact messages yet."
        />
      ) : (
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Name</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Email</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Subject</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Status</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Date</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Action</th>
                </tr>
              </thead>
              <tbody>
                {messages.map((message) => (
                  <tr key={message._id} className="border-b border-slate-200 hover:bg-slate-50">
                    <td className="px-6 py-4 text-sm text-slate-900">{message.name}</td>
                    <td className="px-6 py-4 text-sm text-slate-600">{message.email}</td>
                    <td className="px-6 py-4 text-sm text-slate-900">{message.subject}</td>
                    <td className="px-6 py-4 text-sm">
                      <StatusBadge status={message.status} />
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      {formatDistanceToNow(new Date(message.createdAt), { addSuffix: true })}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <Link
                        href={`/admin/contact-messages/${message._id}`}
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
            onPageChange={(page) => fetchMessages(page, filters)}
            loading={loading}
          />
        </div>
      )}
    </AdminWrapper>
  );
}
