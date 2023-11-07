export enum TicketStatus {
  TODO = 'TODO',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETE = 'COMPLETE',
}

export const getTicketStatusKey = () => Object.keys(TicketStatus);

export const getTicketStatusLabel = (key: string) => {
  switch (key) {
    case TicketStatus.TODO:
      return '할 일';
    case TicketStatus.IN_PROGRESS:
      return '진행 중';
    case TicketStatus.COMPLETE:
      return '완료';
    default:
      return '';
  }
};
