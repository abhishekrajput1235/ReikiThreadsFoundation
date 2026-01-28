'use client';

import { SessionProvider } from 'next-auth/react';
import { AdminLayout } from './AdminLayout';

interface AdminWrapperProps {
  children: React.ReactNode;
  title: string;
}

export function AdminWrapper({ children, title }: AdminWrapperProps) {
  return (
    <SessionProvider>
      <AdminLayout title={title}>
        {children}
      </AdminLayout>
    </SessionProvider>
  );
}