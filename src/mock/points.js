import { idCounter } from '../const.js';
export const id = idCounter();

export const getDefaultPoint = () => ({
  basePrice: 0,
  dateFrom: new Date().toISOString(),
  dateTo: new Date().toISOString(),
  destination: '2',
  isFavorite: false,
  offers: [],
  type: 'flight',
});

export const points = [
  {
    id: id.getId(),
    basePrice: 1200,
    dateFrom: '2019-07-09T18:15:56.845Z',
    dateTo: '2019-07-10T19:55:56.845Z',
    destination: '1',
    isFavorite: true,
    offers: ['2'],
    type: 'taxi',
  },
  {
    id: id.getId(),
    basePrice: 1100,
    dateFrom: '2019-06-10T21:55:56.845Z',
    dateTo: '2019-06-11T12:22:13.375Z',
    destination: '2',
    isFavorite: false,
    offers: ['5', '6'],
    type: 'bus',
  },
  {
    id: id.getId(),
    basePrice: 1500,
    dateFrom: '2019-07-10T07:55:56.845Z',
    dateTo: '2019-07-10T17:19:13.375Z',
    destination: '3',
    isFavorite: true,
    offers: ['7'],
    type: 'flight',
  },
  {
    id: id.getId(),
    basePrice: 1900,
    dateFrom: '2019-08-12T07:55:56.845Z',
    dateTo: '2019-08-12T11:19:13.375Z',
    destination: '2',
    isFavorite: false,
    offers: [],
    type: 'train',
  },
];
