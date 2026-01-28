'use client';

import { useEffect, useState } from 'react';
import { AdminWrapper } from '@/components/admin/layout/AdminWrapper';
import { StatusBadge, LoadingSkeleton, EmptyState } from '@/components/admin/common/CommonComponents';
import { Mail, Calendar, TrendingUp, AlertCircle } from 'lucide-react';
import { AdminStats } from '@/types/admin';

export default function AdminDashboard() {
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/admin/stats');
        if (!response.ok) throw new Error('Failed to fetch stats');
        const data = await response.json();
        setStats(data.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) return <AdminWrapper title="Dashboard"><LoadingSkeleton /></AdminWrapper>;

  if (error) {
    return (
      <AdminWrapper title="Dashboard">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-red-900">Error loading dashboard</p>
            <p className="text-red-700 text-sm">{error}</p>
          </div>
        </div>
      </AdminWrapper>
    );
  }

  if (!stats) return <AdminWrapper title="Dashboard"><EmptyState title="No data" description="Unable to load statistics" /></AdminWrapper>;

  return (
    <AdminWrapper title="Dashboard">
      {/* Welcome Section */}
      <div className="mb-8 p-6 bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-2xl text-white">
        <h2 className="text-2xl font-bold mb-2">Welcome back, Admin!</h2>
        <p className="text-emerald-50">Here's what's happening with your ReikiThreads platform today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Total Contacts */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-slate-600">Contact Requests</h3>
            <Mail className="w-5 h-5 text-emerald-600" />
          </div>
          <div className="space-y-2">
            <p className="text-3xl font-bold text-slate-900">{stats.contacts.total}</p>
            <div className="flex gap-3 text-xs">
              <span className="text-slate-600"><strong>{stats.contacts.new}</strong> new</span>
              <span className="text-slate-600"><strong>{stats.contacts.replied}</strong> replied</span>
            </div>
          </div>
        </div>

        {/* Total Appointments */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-slate-600">Appointments</h3>
            <Calendar className="w-5 h-5 text-blue-600" />
          </div>
          <div className="space-y-2">
            <p className="text-3xl font-bold text-slate-900">{stats.appointments.total}</p>
            <div className="flex gap-3 text-xs">
              <span className="text-slate-600"><strong>{stats.appointments.pending}</strong> pending</span>
              <span className="text-slate-600"><strong>{stats.appointments.confirmed}</strong> confirmed</span>
            </div>
          </div>
        </div>

        {/* This Week Contacts */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-slate-600">This Week</h3>
            <TrendingUp className="w-5 h-5 text-orange-600" />
          </div>
          <div className="space-y-2">
            <p className="text-3xl font-bold text-slate-900">{stats.contacts.week}</p>
            <p className="text-xs text-slate-600">new contact requests</p>
          </div>
        </div>

        {/* Pending Action */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-slate-600">Action Required</h3>
            <AlertCircle className="w-5 h-5 text-red-600" />
          </div>
          <div className="space-y-2">
            <p className="text-3xl font-bold text-slate-900">
              {stats.contacts.new + stats.appointments.pending}
            </p>
            <p className="text-xs text-slate-600">items need attention</p>
          </div>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Contact Messages Overview */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Contact Messages</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-slate-900">New Messages</p>
                <p className="text-xs text-slate-600">Awaiting review</p>
              </div>
              <span className="text-2xl font-bold text-blue-600">{stats.contacts.new}</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-slate-900">Replied</p>
                <p className="text-xs text-slate-600">Awaiting follow-up</p>
              </div>
              <span className="text-2xl font-bold text-green-600">{stats.contacts.replied}</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-slate-900">Total</p>
                <p className="text-xs text-slate-600">All time</p>
              </div>
              <span className="text-2xl font-bold text-slate-600">{stats.contacts.total}</span>
            </div>
          </div>
          <a href="/admin/contact-messages" className="mt-4 w-full inline-block px-4 py-2 bg-emerald-50 text-emerald-700 rounded-lg text-center text-sm font-medium hover:bg-emerald-100 transition-colors">
            View All Messages
          </a>
        </div>

        {/* Appointments Overview */}
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-bold text-slate-900 mb-4">Appointments</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-slate-900">Pending</p>
                <p className="text-xs text-slate-600">Awaiting confirmation</p>
              </div>
              <span className="text-2xl font-bold text-yellow-600">{stats.appointments.pending}</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-slate-900">Confirmed</p>
                <p className="text-xs text-slate-600">Scheduled</p>
              </div>
              <span className="text-2xl font-bold text-green-600">{stats.appointments.confirmed}</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <div>
                <p className="text-sm font-medium text-slate-900">Total</p>
                <p className="text-xs text-slate-600">All time</p>
              </div>
              <span className="text-2xl font-bold text-slate-600">{stats.appointments.total}</span>
            </div>
          </div>
          <a href="/admin/appointments" className="mt-4 w-full inline-block px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-center text-sm font-medium hover:bg-blue-100 transition-colors">
            View All Appointments
          </a>
        </div>
      </div>
    </AdminWrapper>
  );
}
