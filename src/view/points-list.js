import { createElement } from '../render';

const createPointFormTemplate = () => '<ul class="trip-events__list"></ul>';

export default class PointsList {

  getTemplate() {
    return createPointFormTemplate();
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
