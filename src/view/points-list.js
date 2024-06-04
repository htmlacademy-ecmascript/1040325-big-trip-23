import AbstractView from '../framework/view/abstract-view.js';

const createPointFormTemplate = () => '<ul class="trip-events__list"></ul>';

export default class PointsList extends AbstractView{
  get template() {
    return createPointFormTemplate();
  }
}
