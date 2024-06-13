import AbstractView from '../framework/view/abstract-view.js';

const SORT_ITEMS = [
  {
    label: 'Day',
    id: 'sort-day',
    initialValue: 'sort-day',
    className: 'trip-sort__item--day'
  },
  {
    label: 'Event',
    id: 'sort-event',
    initialValue: 'sort-event',
    className: 'trip-sort__item--event',
    disabled: true,
  },
  {
    label: 'Time',
    id: 'sort-time',
    initialValue: 'sort-time',
    className: 'trip-sort__item--time'
  },
  {
    label: 'Price',
    id: 'sort-price',
    initialValue: 'sort-price',
    className: 'trip-sort__item--price'
  },
  {
    label: 'Offers',
    id: 'sort-offer',
    initialValue: 'sort-offer',
    className: 'trip-sort__item--offer',
    disabled: true,
  },
];

const createSortItemTemplate = ({label, id, initialValue, disabled = false, className}) => `
  <div class="trip-sort__item  ${className}">
    <input id="${id}" class="trip-sort__input visually-hidden" type="radio" name="trip-sort" value="${initialValue}" ${disabled ? 'disabled' : ''}>

    <label class="trip-sort__btn" for="${id}">${label}</label>
  </div>`;

const createSortTemplate = () => `
<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
  ${SORT_ITEMS.map((item) => createSortItemTemplate(item)).join('\n')}
</form>`;

export default class SortForm extends AbstractView {
  #handleSortTypeChange = null;

  constructor({onSortTypeChange}) {
    super();
    this.#handleSortTypeChange = onSortTypeChange;
    this.element.addEventListener('change', this.#sortTypeChangeHandler);
  }

  get template() {
    return createSortTemplate();
  }

  #sortTypeChangeHandler = (evt) => {
    this.#handleSortTypeChange(evt.target.value);
  };
}


