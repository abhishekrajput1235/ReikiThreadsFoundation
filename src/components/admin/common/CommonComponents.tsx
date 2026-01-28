'use client';

interface StatusBadgeProps {
  status: string;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
}

export function StatusBadge({ status, variant = 'default' }: StatusBadgeProps) {
  const variants = {
    default: 'bg-slate-100 text-slate-700',
    success: 'bg-green-100 text-green-700',
    warning: 'bg-yellow-100 text-yellow-700',
    error: 'bg-red-100 text-red-700',
    info: 'bg-blue-100 text-blue-700',
  };

  // Determine variant based on status
  let variantClass = variants[variant];
  if (!variant || variant === 'default') {
    if (status === 'pending') variantClass = variants.warning;
    else if (status === 'confirmed' || status === 'completed' || status === 'replied') variantClass = variants.success;
    else if (status === 'cancelled') variantClass = variants.error;
    else if (status === 'new' || status === 'read') variantClass = variants.info;
  }

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${variantClass}`}>
      {status.charAt(0).toUpperCase() + status.slice(1).replace('_', ' ')}
    </span>
  );
}

export function LoadingSkeleton() {
  return (
    <div className="space-y-4">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="h-12 bg-slate-200 rounded-lg animate-pulse" />
      ))}
    </div>
  );
}

export function EmptyState({ title, description, icon: Icon }: {
  title: string;
  description: string;
  icon?: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="text-center py-12">
      {Icon && <Icon className="w-12 h-12 text-slate-400 mx-auto mb-4" />}
      <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600 max-w-sm mx-auto">{description}</p>
    </div>
  );
}

interface ConfirmDialogProps {
  open: boolean;
  title: string;
  description: string;
  onConfirm: () => void;
  onCancel: () => void;
  loading?: boolean;
}

export function ConfirmDialog({
  open,
  title,
  description,
  onConfirm,
  onCancel,
  loading = false,
}: ConfirmDialogProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full mx-4">
        <h2 className="text-lg font-bold text-slate-900 mb-2">{title}</h2>
        <p className="text-slate-600 mb-6">{description}</p>
        <div className="flex gap-3 justify-end">
          <button
            onClick={onCancel}
            disabled={loading}
            className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 transition-colors disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={loading}
            className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors disabled:opacity-50"
          >
            {loading ? 'Confirming...' : 'Confirm'}
          </button>
        </div>
      </div>
    </div>
  );
}

interface PaginationProps {
  page: number;
  pages: number;
  onPageChange: (page: number) => void;
  loading?: boolean;
}

export function PaginationControls({
  page,
  pages,
  onPageChange,
  loading = false,
}: PaginationProps) {
  if (pages <= 1) return null;

  return (
    <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-200">
      <p className="text-sm text-slate-600">
        Page {page} of {pages}
      </p>
      <div className="flex gap-2">
        <button
          onClick={() => onPageChange(page - 1)}
          disabled={page === 1 || loading}
          className="px-3 py-1 border border-slate-300 rounded-lg hover:bg-slate-50 disabled:opacity-50 transition-colors"
        >
          Previous
        </button>
        {[...Array(Math.min(5, pages))].map((_, i) => {
          const pageNum = Math.max(1, page - 2) + i;
          if (pageNum > pages) return null;

          return (
            <button
              key={pageNum}
              onClick={() => onPageChange(pageNum)}
              disabled={loading}
              className={`px-3 py-1 rounded-lg transition-colors ${
                pageNum === page
                  ? 'bg-emerald-600 text-white'
                  : 'border border-slate-300 hover:bg-slate-50'
              }`}
            >
              {pageNum}
            </button>
          );
        })}
        <button
          onClick={() => onPageChange(page + 1)}
          disabled={page === pages || loading}
          className="px-3 py-1 border border-slate-300 rounded-lg hover:bg-slate-50 disabled:opacity-50 transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
}
