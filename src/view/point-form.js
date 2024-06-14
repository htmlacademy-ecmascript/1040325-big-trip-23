import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';
import { capitalize } from '../helpers';
import { EVENT_TYPES } from '../const';
import { getDate } from '../helpers';
import { DateFormats } from '../const.js';
import { remove } from '../framework/render.js';

const createTypesList = (pointId, type) => `<div class="event__type-wrapper">
  <label class="event__type  event__type-btn" for="event-type-toggle-${pointId}">
    <span class="visually-hidden">Choose event type</span>
    <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
  </label>
  <input class="event__type-toggle  visually-hidden" id="event-type-toggle-${pointId}" type="checkbox">

  <div class="event__type-list">
    <fieldset class="event__type-group">
      <legend class="visually-hidden">Event type</legend>
      ${EVENT_TYPES.map((eventType) => `
        <div class="event__type-item">
          <input id="event-type-${eventType}-${pointId}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${eventType}">
          <label class="event__type-label  event__type-label--${eventType}" for="event-type-${eventType}-${pointId}">${capitalize(eventType)}</label>
        </div>`).join('\n')}
    </fieldset>
  </div>
</div>`;

const createPointDestinationTemplate = (pointDestination) => {
  const {description, pictures} = pointDestination || {};
  return (
    `<section class="event__section  event__section--destination">
      <h3 class="event__section-title  event__section-title--destination">Destination</h3>
      <p class="event__destination-description">${description}</p>
      ${pictures.length
      ? `<div class="event__photos-container">
            <div class="event__photos-tape">
              ${pictures.map((picture) => `<img class="event__photo" src="${picture.src}" alt="${picture.description}">`)}
            </div>
          </div>`
      : ''}
    </section>`
  );
};
const createPointOffersTemplate = (typeOffers, point) => {
  const pointOffers = typeOffers.filter((item) => point.offers.includes(item.id));
  const activeOffers = pointOffers.map((offer) => offer.id);
  const offers = typeOffers.map((typeOffer) => (
    `<div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id="event-offer-${typeOffer.id}" type="checkbox" name="event-offer-luggage" ${activeOffers.includes(typeOffer.id) ? 'checked' : ''}>
      <label class="event__offer-label" for="event-offer-${typeOffer.id}">
      <span class="event__offer-title">${typeOffer.title}</span>
        &plus;&euro;&nbsp;
      <span class="event__offer-price">${typeOffer.price}</span>
      </label>
    </div>`)).join('\n');


  return (
    `<section class="event__section  event__section--offers">
      <h3 class="event__section-title  event__section-title--offers">Offers</h3>
      <div class="event__available-offers">
      ${offers}
    </div>`
  );
};

const createPointFormTemplate = (point, destinations, offers) => {
  const {basePrice, dateFrom, dateTo, type} = point;
  const pointDestination = destinations.find((item) => item.id === point.destination);
  const {name} = pointDestination || {};
  const typeOffers = offers.find((item) => item.type === point.type)?.offers;
  const pointId = point.id ?? 0;

  return `<li class="trip-events__item">
  <form class="event event--edit" action="#" method="post">
  <header class="event__header">
    ${createTypesList(pointId, type)}

    <div class="event__field-group  event__field-group--destination">
      <label class="event__label  event__type-output" for="event-destination-${pointId}">
      ${type}
      </label>
      <input class="event__input  event__input--destination" id="event-destination-${pointId}" type="text" name="event-destination" value="${name || ''}" list="destination-list-${pointId}">
      <datalist id="destination-list-${pointId}">
      ${destinations.map((dest) => `<option value="${dest.name}"></option>`).join('\n')}
      </datalist>
    </div>

    <div class="event__field-group  event__field-group--time">
      <label class="visually-hidden" for="event-start-time-${pointId}">From</label>
      <input class="event__input  event__input--time" id="event-start-time-${pointId}" type="text" name="event-start-time" value="${getDate(dateFrom, DateFormats.DATE_WITH_SLASH)} ${getDate(dateFrom, DateFormats.TIME)}">
      &mdash;
      <label class="visually-hidden" for="event-end-time-${pointId}">To</label>
      <input class="event__input  event__input--time" id="event-end-time-${pointId}" type="text" name="event-end-time" value="${getDate(dateTo, DateFormats.DATE_WITH_SLASH)} ${getDate(dateTo, DateFormats.TIME)}">
    </div>

    <div class="event__field-group  event__field-group--price">
      <label class="event__label" for="event-price-${pointId}">
        <span class="visually-hidden">Price</span>
        &euro;
      </label>
      <input class="event__input  event__input--price" id="event-price-${pointId}" type="text" name="event-price" value="${basePrice}">
    </div>

    <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
    <button class="event__reset-btn" type="reset">${point.id ? 'Delete' : 'Cancel'}</button>
    ${point.id
    ? `<button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>`
    : ''}
  </header>

  <section class="event__details">
    ${typeOffers?.length ? createPointOffersTemplate(typeOffers, point) : ''}

    ${pointDestination ? createPointDestinationTemplate(pointDestination) : ''}
  </section>
</form>
</li>`;
};

export default class PointForm extends AbstractStatefulView {
  #point = null;
  #destinations = null;
  #offers = null;
  #handleFormClose = null;
  #handleFormSubmit = null;

  constructor({point, destinations, offers, onFormClose, onFormSubmit}) {
    super();
    this.#point = point;
    this.#destinations = destinations;
    this.#offers = offers;
    this.#handleFormClose = onFormClose;
    this.#handleFormSubmit = onFormSubmit;

    this._setState(PointForm.parsePointToState(point));
    this._restoreHandlers();
  }

  get template() {
    return createPointFormTemplate(this._state, this.#destinations, this.#offers);
  }

  static parsePointToState(point) {
    return { ...point };
  }

  static parseStateToPoint(state) {
    const task = {...state};
    return task;
  }

  _restoreHandlers() {
    document.addEventListener('keydown', this.#escapeHandler);
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#formCloseHandler);
    this.element.querySelector('.event__save-btn').addEventListener('click', this.#formSubmitHandler);
    this.element.querySelector('.event__type-list').addEventListener('change', this.#onEventTypeChange);
    this.element.querySelector('.event__input--destination').addEventListener('change', this.#onDestinationChange);
  }

  #formCloseHandler = (evt) => {
    evt.preventDefault();
    this.#handleFormClose();
  };

  #formSubmitHandler = (evt) => {
    evt.preventDefault();
    this.#handleFormSubmit(PointForm.parseStateToPoint(this._state));
  };

  #escapeHandler = (event) => {
    if (event.key === 'Escape') {
      this.#formCloseHandler(event);
    }
  };

  remove = () => {
    remove(this);
    document.removeEventListener('keydown', this.#escapeHandler);
  };

  #onEventTypeChange = (evt) => {
    this.updateElement({type: evt.target.value});
  };

  #onDestinationChange = (evt) => {
    const newDestination = this.#destinations.find((destination) => destination.name === evt.target.value);
    this.updateElement({destination: newDestination.id});
  };
}
