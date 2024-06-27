export const EVENT_TYPES = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];

export const FilterTypes = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past',
};

export const FilterEmptyMessages = {
  [FilterTypes.EVERYTHING]: 'Click New Event to create your first point',
  [FilterTypes.FUTURE]: 'There are no future events now',
  [FilterTypes.PRESENT]: 'There are no present events now',
  [FilterTypes.PAST]: 'There are no past events now',
};

export const DateFormats = {
  DATE: 'YYYY-MM-DD',
  DATE_WITH_SLASH: 'YY/MM/DD',
  TIME: 'HH:mm',
  DATE_TIME: 'YYYY-MM-DDTHH:mm',
  MONTH_DAY: 'MMM D',
};

export function idCounter() {
  let id = 1;

  return {
    getId: function() {
      return id++;
    }
  };
}
