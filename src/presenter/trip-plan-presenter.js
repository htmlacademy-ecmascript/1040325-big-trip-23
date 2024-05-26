import FilterForm from '../view/filter';
import SortForm from '../view/sort';
import PointForm from '../view/point-form';
import PointsList from '../view/points-list';
import Point from '../view/point';
import { render } from '../render';
import { getDefaultPoint } from '../const';

export default class TripPlanPresenter {
  pointsListComponent = new PointsList();

  constructor(headerContainer, mainContainer, pointModel) {
    this.filterContainer = headerContainer;
    this.eventsContainer = mainContainer;
    this.pointModel = pointModel;
  }

  init() {
    const points = this.pointModel.getPoints();
    const destinations = this.pointModel.getDestinations();
    const offers = this.pointModel.getOffers();

    render(new FilterForm(), this.filterContainer);
    render(new SortForm(), this.eventsContainer);
    render(this.pointsListComponent, this.eventsContainer);
    render(new PointForm(getDefaultPoint(), destinations, offers), this.pointsListComponent.element);
    render(new PointForm(points[1], destinations, offers), this.pointsListComponent.element);

    for (const point of points) {
      render(new Point({ point, destinations, offers}), this.pointsListComponent.element);
    }
  }
}
