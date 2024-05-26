import PointModel from './model/point-model';
import TripPlanPresenter from './presenter/trip-plan-presenter';

const headerContainer = document.querySelector('.trip-controls__filters');
const mainContainer = document.querySelector('.trip-events');
const pointModel = new PointModel();
pointModel.init();

const tripPlanPresenter = new TripPlanPresenter(headerContainer, mainContainer, pointModel);
tripPlanPresenter.init();
