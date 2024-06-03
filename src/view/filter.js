import { createElement } from '../render';

const FILTER_ITEMS = [
  {
    label: 'Everything',
    id: 'filter-everything',
    initialValue: 'everything'
  },
  {
    label: 'Future',
    id: 'filter-future',
    initialValue: 'future'
  },
  {
    label: 'Present',
    id: 'filter-present',
    initialValue: 'present'
  },
  {
    label: 'Past',
    id: 'filter-past',
    initialValue: 'past'
  },
];

const createFilterItemTemplate = ({label, id, initialValue}) => `
  <div class="trip-filters__filter">
    <input id="${id}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${initialValue}">
    <label class="trip-filters__filter-label" for="${id}">${label}</label>
  </div>`;


const createFilterTemplate = () => `
<form class="trip-filters" action="#" method="get">
  ${FILTER_ITEMS.map((item) => createFilterItemTemplate(item)).join('\n')}

  <button class="visually-hidden" type="submit">Accept filter</button>
</form>`;

export default class FilterForm {
  getTemplate() {
    return createFilterTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}

