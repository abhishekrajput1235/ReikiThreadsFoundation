export interface AdminStats {
  contacts: {
    total: number;
    today: number;
    week: number;
    month: number;
    new: number;
    replied: number;
  };
  appointments: {
    total: number;
    pending: number;
    confirmed: number;
    cancelled: number;
    completed: number;
  };
}

export interface DashboardProps {
  stats: AdminStats;
}
