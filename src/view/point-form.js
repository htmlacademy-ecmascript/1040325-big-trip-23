import { capitalize } from '../helpers';
import { createElement} from '../render';
import { EVENT_TYPES } from '../const';
import { getTime, getDateSeparatedBySlash } from '../helpers';

const createTypesList = (pointId) => `<div class="event__type-wrapper">
  <label class="event__type  event__type-btn" for="event-type-toggle-${pointId}">
    <span class="visually-hidden">Choose event type</span>
    <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">
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
  const typeOffers = offers.find((item) => item.type === point.type).offers;
  const pointId = point.id ?? 0;

  return `<li class="trip-events__item">
  <form class="event event--edit" action="#" method="post">
  <header class="event__header">
    ${createTypesList(pointId)}

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
      <input class="event__input  event__input--time" id="event-start-time-${pointId}" type="text" name="event-start-time" value="${getDateSeparatedBySlash(dateFrom)} ${getTime(dateFrom)}">
      &mdash;
      <label class="visually-hidden" for="event-end-time-${pointId}">To</label>
      <input class="event__input  event__input--time" id="event-end-time-${pointId}" type="text" name="event-end-time" value="${getDateSeparatedBySlash(dateTo)} ${getTime(dateTo)}">
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
    ${typeOffers.length ? createPointOffersTemplate(typeOffers, point) : ''}
  </section>
    ${pointDestination ? createPointDestinationTemplate(pointDestination) : ''}
  </section>
</form>
</li>`;
};

export default class PointForm {
  constructor(point, destinations, offers) {
    this.point = point;
    this.destinations = destinations;
    this.offers = offers;
  }

  getTemplate() {
    return createPointFormTemplate(this.point, this.destinations, this.offers);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }

}
