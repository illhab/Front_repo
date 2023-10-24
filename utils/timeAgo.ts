import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ko';

dayjs.extend(relativeTime);
dayjs.locale('ko');

export const timeAgo = (date: Date): string => {
  return dayjs().from(dayjs(date), true) + ' 전';
};
