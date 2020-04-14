import {createElement} from "../util";

// Генерация статистики фильмов
const createFilmCountTemplate = (cards) => {
  return (
    `<p>${cards.length} movies inside</p>`
  );
};

export default class FilmCountComponent {
  constructor(films) {
    this._films = films;
    this._element = null;
  }

  getTemplate() {
    return createFilmCountTemplate(this._films);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
