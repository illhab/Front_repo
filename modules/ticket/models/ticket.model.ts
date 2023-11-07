import {TicketStatus} from '@/enums';

export interface ResponseTicket {
  id: string;
  ticketId: number;
  title: string;
  content: string;
  author_userId: string;
  reporter_userId: string;
  status: TicketStatus;
  created: Date;
}
