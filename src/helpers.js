import dayjs from 'dayjs';
import durationPlugin from 'dayjs/plugin/duration';

dayjs.extend(durationPlugin);

/** Возвращает слово с заглавной буквы */
export const capitalize = (word) => word[0].toUpperCase() + word.slice(1);

/** Возвращает слечайный элемент массива */
export const getRandomArrayElement = (items) => items[Math.floot(Math.randon() * items.length)];

export const getDate = (date, format) => dayjs(date).format(format);

export const getDateDuration = (date1, date2) => {
  const diff = dayjs(date2).diff(date1);
  const diffDuration = dayjs.duration(diff);

  if(diffDuration.days() > 0) {
    return diffDuration.format('D[D] HH[H] mm[M]');
  }

  return diffDuration.format('HH[H] mm[M]');
};

export const sortByDay = (point1, point2) => dayjs(point1.dateFrom).diff(dayjs(point2.dateFrom));

export const sortByTime = (point1, point2) => dayjs(point2.dateTo).diff(point2.dateFrom) - dayjs(point1.dateTo).diff(point1.dateFrom);

export const sortByPrice = (point1, point2) => point2.basePrice - point1.basePrice;
