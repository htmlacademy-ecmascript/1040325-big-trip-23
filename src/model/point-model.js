import { points } from '../mock/points';
import { destinations } from '../mock/destinations';
import { offers } from '../mock/offers';
import { FilterTypes } from '../const';

export default class PointModel {
  #points = null;
  #destinations = null;
  #offers = null;
  #filters = null;

  init() {
    this.#points = points;
    this.#destinations = destinations;
    this.#offers = offers;
    this.#filters = Object.values(FilterTypes);
  }

  get points() {
    return this.#points;
  }

  get destinations() {
    return this.#destinations;
  }

  get offers() {
    return this.#offers;
  }

  get filters() {
    return this.#filters;
  }

  updatePoint(point) {
    this.#points = this.#points.map((item) =>
      item.id === point.id ? point : item
    );
  }
}
