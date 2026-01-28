export interface ContactMessage {
  _id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  status: 'new' | 'read' | 'replied';
  adminNotes?: string;
  reply?: {
    message: string;
    sentAt: string;
    sentBy: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface ContactMessageDetailProps {
  message: ContactMessage;
  onStatusChange: (status: 'new' | 'read' | 'replied') => void;
  onReply: (message: string) => Promise<void>;
}
