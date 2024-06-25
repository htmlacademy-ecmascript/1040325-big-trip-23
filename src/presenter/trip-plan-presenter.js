import FilterForm from '../view/filter';
import SortForm from '../view/sort';
import PointsList from '../view/points-list';
import EmptyPointsListView from '../view/empty-points-list.js';
import { render, RenderPosition } from '../framework/render.js';
import PointPresenter from './point-presenter.js';
import { sortByDay, sortByTime, sortByPrice } from '../helpers.js';
import { getDefaultPoint } from '../mock/points.js';

export default class TripPlanPresenter {
  #pointsListComponent = new PointsList();
  #filterContainer = null;
  #eventsContainer = null;
  #pointModel = null;
  #pointPresenters = new Map();
  editingPointId = null;
  #currentSortType = 'sort-day';
  #newPointButton = null;
  #newPointPresenter = null;

  constructor(headerContainer, mainContainer, pointModel, newPointButton) {
    this.#filterContainer = headerContainer;
    this.#eventsContainer = mainContainer;
    this.#pointModel = pointModel;
    this.#newPointButton = newPointButton;
  }

  init() {
    render(new FilterForm(), this.#filterContainer);
    this.#renderPointsList();
    this.#newPointButton.addEventListener('click', this.#onNewEventClick);
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
      deletePoint: this.#deletePoint,
    });
    pointPresenter.init(point);
    this.#pointPresenters.set(point.id, pointPresenter);
  };

  #onNewEventClick = () => {
    this.#newPointPresenter = new PointPresenter({
      destinations: this.#pointModel.destinations,
      offers: this.#pointModel.offers,
      container: this.#pointsListComponent.element,
      updatePoint: this.updatePoint,
      changeEditingPoint: this.#onCancelButton,

    });
    this.#newPointPresenter.init(getDefaultPoint(), RenderPosition.AFTERBEGIN);
    this.#newPointPresenter.enableEditMode();
  };

  #onCancelButton = () => {
    this.#newPointPresenter.removeComponent();
    this.#newPointPresenter = null;
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

  #deletePoint = (deletedPoint) => {
    this.#pointPresenters.get(deletedPoint.id).removeComponent();
    this.#pointModel.deletePoint(deletedPoint);
  };
}
