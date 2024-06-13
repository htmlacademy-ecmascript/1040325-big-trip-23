import AbstractView from '../framework/view/abstract-view';
import { FilterEmptyMessages } from '../const';

const createEpmtyListTemplate = (filter) => `<p class="trip-events__msg">${FilterEmptyMessages[filter]}</p>`;

export default class EmptyPointsListView extends AbstractView {
  #filter = null;

  constructor ({ filter }) {
    super();
    this.#filter = filter;
  }

  get template() {
    return createEpmtyListTemplate(this.#filter);
  }

}
