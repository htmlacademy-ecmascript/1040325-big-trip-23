import FilterForm from '../view/filter-form';
import SortForm from '../view/sort-form';
import WaypointForm from '../view/waypoint-form';
import Waypoint from '../view/waypoint';
import { render } from '../render';

export default class TripPlanPresenter {
  filterFormComponent = new FilterForm();
  sortFormComponent = new SortForm();
  waypointFormComponent = new WaypointForm();

  constructor() {
    this.filterContainer = document.querySelector('.trip-controls__filters');
    this.eventsContainer = document.querySelector('.trip-events');
  }

  init() {
    render(this.filterFormComponent, this.filterContainer);
    render(this.sortFormComponent, this.eventsContainer);
    render(this.waypointFormComponent, this.eventsContainer);

    for (let i = 0; i < 3; i++) {
      render(new Waypoint(), this.eventsContainer);
    }
  }
}
