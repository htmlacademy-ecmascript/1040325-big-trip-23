import PointModel from './model/point-model';
import TripPlanPresenter from './presenter/trip-plan-presenter';

const headerContainer = document.querySelector('.trip-controls__filters');
const mainContainer = document.querySelector('.trip-events');
const newPointButton = document.querySelector('.trip-main__event-add-btn');
const pointModel = new PointModel();
pointModel.init();

const tripPlanPresenter = new TripPlanPresenter(headerContainer, mainContainer, pointModel, newPointButton);
tripPlanPresenter.init();
