import {TicketStatus} from '@/enums';
import {ResponseTicket} from '@/modules';

export const dummyUsers = [
  {
    id: 1,
    name: '형진',
  },
  {
    id: 2,
    name: '태호',
  },
  {
    id: 3,
    name: '은정',
  },
  {
    id: 4,
    name: '재진',
  },
];

export const dummyTicketData: {
  [key: string]: {
    title: string;
    items: ResponseTicket[];
  };
} = {
  ['1']: {
    title: '할 일',
    items: [
      {
        id: '1123',
        ticketId: 1,
        author_userId: '13',
        reporter_userId: '13',
        title: '티켓 1',
        content: '안녕하세요 일하세요.',
        status: TicketStatus.TODO,
        created: new Date(),
      },
      {
        id: '25245',
        ticketId: 1,
        author_userId: '13',
        reporter_userId: '13',
        title: '티켓 2',
        content: '안녕하세요 일하세요.',
        status: TicketStatus.TODO,
        created: new Date(),
      },
      {
        id: '36423',
        ticketId: 1,
        author_userId: '13',
        reporter_userId: '13',
        title: '티켓 3',
        content: '안녕하세요 일하세요.',
        status: TicketStatus.TODO,
        created: new Date(),
      },
    ],
  },
  ['2']: {
    title: '진행 중',
    items: [
      {
        id: '41235',
        ticketId: 1,
        author_userId: '13',
        reporter_userId: '13',
        title: '티켓 4',
        content: '안녕하세요 일하세요.',
        status: TicketStatus.IN_PROGRESS,
        created: new Date(),
      },
      {
        id: '52345',
        ticketId: 1,
        author_userId: '13',
        reporter_userId: '13',
        title: '티켓 5',
        content: '안녕하세요 일하세요.',
        status: TicketStatus.IN_PROGRESS,
        created: new Date(),
      },
      {
        id: '631267',
        ticketId: 1,
        author_userId: '13',
        reporter_userId: '13',
        title: '티켓 6',
        content: '안녕하세요 일하세요.',
        status: TicketStatus.IN_PROGRESS,
        created: new Date(),
      },
    ],
  },
  ['3']: {
    title: '완료',
    items: [
      {
        id: '112350',
        ticketId: 1,
        author_userId: '13',
        reporter_userId: '13',
        title: '티켓 7',
        content: '안녕하세요 일하세요.',
        status: TicketStatus.COMPLETE,
        created: new Date(),
      },
      {
        id: '1177223',
        ticketId: 1,
        author_userId: '13',
        reporter_userId: '13',
        title: '티켓 8',
        content: '안녕하세요 일하세요.',
        status: TicketStatus.COMPLETE,
        created: new Date(),
      },
      {
        id: '12356712',
        ticketId: 1,
        author_userId: '13',
        reporter_userId: '13',
        title: '티켓 9',
        content: '안녕하세요 일하세요.',
        status: TicketStatus.COMPLETE,
        created: new Date(),
      },
    ],
  },
};
