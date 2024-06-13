import Point from '../view/point';
import PointForm from '../view/point-form.js';
import { render, replace } from '../framework/render.js';

export default class PointPresenter {
  #pointsListComponent = null;
  #destinations = null;
  #offers = null;
  #view = null;
  #changeEditingPoint = null;

  constructor({ destinations, offers, container, updatePoint, changeEditingPoint }) {
    this.#pointsListComponent = container;
    this.updatePoint = updatePoint;
    this.#destinations = destinations;
    this.#offers = offers;
    this.#changeEditingPoint = changeEditingPoint;
  }

  init(point) {
    this.point = point;
    this.#view = this.createPointView();
    render(this.#view, this.#pointsListComponent);
  }

  createPointView() {
    return new Point({
      point: this.point,
      destinations: this.#destinations,
      offers: this.#offers,
      onEditClick: this.#onEditClick,
      onFavoriteButtonClick: this.#onFavoriteButtonClick,
    });
  }

  removeComponent = () => {
    this.#view.remove();
  };

  createPointFormView() {
    return new PointForm ({
      point: this.point,
      destinations: this.#destinations,
      offers: this.#offers,
      onFormClose: this.#onFormClose,
      onFormSubmit: this.#onFormSubmit
    });
  }

  update(point) {
    this.point = point;
    const updatedPointComponent = this.createPointView();
    replace(updatedPointComponent, this.#view);
    this.#view.remove();
    this.#view = updatedPointComponent;
  }

  enableEditMode = () => {
    const form = this.createPointFormView();

    replace(form, this.#view);
    this.#view.remove();
    this.#view = form;
  };

  disableEditMode = () => {
    const point = this.createPointView();

    replace(point, this.#view);
    this.#view.remove();
    this.#view = point;
  };


  #onEditClick = () => {
    this.#changeEditingPoint(this.point.id);
  };

  #onFavoriteButtonClick = () => {
    this.updatePoint({...this.point, isFavorite: !this.point.isFavorite});
  };

  #onFormClose = () => {
    this.#changeEditingPoint(null);
  };

  #onFormSubmit() {

  }
}
