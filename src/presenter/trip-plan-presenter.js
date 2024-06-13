import FilterForm from '../view/filter';
import SortForm from '../view/sort';
import PointsList from '../view/points-list';
import EmptyPointsListView from '../view/empty-points-list.js';
import { render } from '../framework/render.js';
import PointPresenter from './point-presenter.js';
import { sortByDay, sortByTime, sortByPrice } from '../helpers.js';

export default class TripPlanPresenter {
  #pointsListComponent = new PointsList();
  #filterContainer = null;
  #eventsContainer = null;
  #pointModel = null;
  #pointPresenters = new Map();
  editingPointId = null;
  #currentSortType = 'sort-day';

  constructor(headerContainer, mainContainer, pointModel) {
    this.#filterContainer = headerContainer;
    this.#eventsContainer = mainContainer;
    this.#pointModel = pointModel;
  }

  init() {
    render(new FilterForm(), this.#filterContainer);
    this.#renderPointsList();
  }

  #renderPointsList() {
    if (this.#pointModel.points.length === 0) {
      this.#renderEmptyPointsList();
      return;
    }

    this.#renderSortForm();
    render(this.#pointsListComponent, this.#eventsContainer);
    this.#sortPoints(this.#currentSortType);
    this.#renderPoints();
  }

  #renderPoints() {
    for (const point of this.#pointModel.points) {
      this.#renderPoint(point);
    }
  }

  #renderSortForm() {
    render(new SortForm({onSortTypeChange: this.#onSortTypeChange}), this.#eventsContainer);
  }

  #renderEmptyPointsList() {
    render(
      new EmptyPointsListView({ filter: this.#pointModel.filters[0] }),
      this.#eventsContainer
    );
  }

  updatePoint = (point) => {
    this.#pointModel.updatePoint(point);

    this.#pointPresenters
      .get(point.id)
      .update(point);
  };

  #renderPoint = (point) => {
    const pointPresenter = new PointPresenter({
      destinations: this.#pointModel.destinations,
      offers: this.#pointModel.offers,
      container: this.#pointsListComponent.element,
      updatePoint: this.updatePoint,
      changeEditingPoint: this.changeEditingPoint,
    });
    pointPresenter.init(point);
    this.#pointPresenters.set(point.id, pointPresenter);
  };

  changeEditingPoint = (pointId) => {
    if (pointId === null) {
      this.#pointPresenters.get(this.editingPointId).disableEditMode();
    } else {
      this.#pointPresenters.get(this.editingPointId)?.disableEditMode();
      this.#pointPresenters.get(pointId).enableEditMode();
    }

    this.editingPointId = pointId;
  };

  #clearPointsList() {
    this.#pointPresenters.forEach((presenter) => presenter.removeComponent());
    this.#pointPresenters.clear();
  }

  #sortPoints(sortType) {
    switch (sortType) {
      case 'sort-day':
        this.#pointModel.points.sort(sortByDay);
        break;
      case 'sort-time':
        this.#pointModel.points.sort(sortByTime);
        break;
      case 'sort-price':
        this.#pointModel.points.sort(sortByPrice);
        break;
    }
    this.#currentSortType = sortType;
  }

  #onSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }
    this.#sortPoints(sortType);
    this.#clearPointsList();
    this.#renderPoints();
  };
}
