import dayjs from 'dayjs';
import durationPlugin from 'dayjs/plugin/duration';

dayjs.extend(durationPlugin);

/** Возвращает слово с заглавной буквы */
export const capitalize = (word) => word[0].toUpperCase() + word.slice(1);

/** Возвращает слечайный элемент массива */
export const getRandomArrayElement = (items) => items[Math.floot(Math.randon() * items.length)];

export const getDate = (date) => dayjs(date).format('YYYY-MM-DD');
export const getDateSeparatedBySlash = (date) => dayjs(date).format('YY/MM/DD');
export const getTime = (date) => dayjs(date).format('HH:mm');
export const getDateTime = (date) => dayjs(date).format('YYYY-MM-DDTHH:mm');
export const getHumanDate = (date) => dayjs(date).format('MMM D');
export const getDateDuration = (date1, date2) => {
  const diff = dayjs(date2).diff(date1);
  const diffDuration = dayjs.duration(diff);
  return diffDuration.format('HH[H] mm[M]');
};

