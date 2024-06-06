import FilterForm from '../view/filter';
import SortForm from '../view/sort';
import PointsList from '../view/points-list';
import Point from '../view/point';
import PointForm from '../view/point-form.js';
import PointsListEmptyView from '../view/points-list-empty.js';
import { render, replace } from '../framework/render.js';

export default class TripPlanPresenter {
  #pointsListComponent = new PointsList();
  #filterContainer = null;
  #eventsContainer = null;
  #pointModel = null;
  #points = null;

  constructor(headerContainer, mainContainer, pointModel) {
    this.#filterContainer = headerContainer;
    this.#eventsContainer = mainContainer;
    this.#pointModel = pointModel;
    this.#points = this.#pointModel.points;
  }

  init() {
    render(new FilterForm(), this.#filterContainer);
    this.#renderPointsList();
  }

  #renderPointsList() {
    if(this.#points.length === 0) {
      this.#renderPointsListEmpty();
      return;
    }

    this.#renderSortForm();
    render(this.#pointsListComponent, this.#eventsContainer);

    for (const point of this.#points) {
      this.#renderPoint(point, this.#pointModel.destinations, this.#pointModel.offers);
    }
  }

  #renderSortForm() {
    render(new SortForm(), this.#eventsContainer);
  }

  #renderPointsListEmpty() {
    render(new PointsListEmptyView({filter: this.#pointModel.filters[0]}), this.#eventsContainer);
  }

  #renderPoint(point, destinations, offers) {
    const escKeyDownHandler = (evt) => {
      if(evt.key === 'Escape') {
        evt.preventDefault();
        replaceEditFormToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };
    const pointComponent = new Point({
      point,
      destinations,
      offers,
      onEditClick: () => {
        replacePointToEditForm();
        document.addEventListener('keydown', escKeyDownHandler);
      }});

    const pointEditComponent = new PointForm ({
      point,
      destinations,
      offers,
      onFormCancel: () => {
        replaceEditFormToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      },
      onFormSubmit: () => {
        replaceEditFormToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }});

    function replacePointToEditForm() {
      replace(pointEditComponent, pointComponent);
    }

    function replaceEditFormToPoint() {
      replace(pointComponent, pointEditComponent);
    }

    render(pointComponent, this.#pointsListComponent.element);
  }
}
