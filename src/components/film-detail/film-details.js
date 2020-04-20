import {formatDate, createElement} from "../../util";
import FilmsCommentsComponent from "./film-detail-comments";
import FilmsGenresComponent from "./film-detail-ganre";
import AbstractComponent from "../abstract-component";

// Генерация блока FilmsDetails
export default class FilmDetailsComponent extends AbstractComponent {
  constructor(film) {
    super();
    const {poster, wrap, rating, info, description, comments} = film;
    const {title, original} = wrap;
    const {director, writers, actors, date, duration, country, genre} = info;

    this._poster = poster;
    this._original = original;
    this._title = title;
    this._rating = rating;

    this._director = director;
    this._writers = writers;
    this._actors = actors;
    this._date = date;
    this._duration = duration;
    this._country = country;
    this._genre = genre;
    this._description = description;
    this._comments = comments;

    this.onFilmEscClose = this.onFilmEscClose.bind(this);
  }

  onFilmDetailCloseClick() {
    this.getElement().remove();
    document.removeEventListener(`keydown`, this.onFilmEscClose);
  }

  onFilmEscClose(evt) {
    const isEscKey = evt.key === `Escape` || evt.key === `Esc`;
    if (isEscKey) {
      this.onFilmDetailCloseClick();
    }
  }

  onFilmDetailClose() {
    // При нажатии на кнопку, удаляется.
    this.getElement().querySelector(`.film-details__close-btn`).addEventListener(`click`, () => {
      this.onFilmDetailCloseClick();
    });


    // И на Esc
    document.addEventListener(`keydown`, this.onFilmEscClose);
  }

  getTemplate() {
    const formatedDate = formatDate(this._date);
    const filmGenreMarkup = this._genre.map((genreItem) => new FilmsGenresComponent(genreItem).getTemplate()).join(`\n`);
    const filmCommentsMarkup = this._comments.map((comment) =>
      new FilmsCommentsComponent(comment.emoji, comment.text, comment.author, comment.date).getTemplate()).join(`\n`);

    return (
      `<section class="film-details">
      <form class="film-details__inner" action="" method="get">
        <div class="form-details__top-container">
          <div class="film-details__close">
            <button class="film-details__close-btn" type="button">close</button>
          </div>
          <div class="film-details__info-wrap">
            <div class="film-details__poster">
              <img class="film-details__poster-img" src="./images/posters/${this._poster}" alt="">
    
              <p class="film-details__age">18+</p>
            </div>
    
            <div class="film-details__info">
              <div class="film-details__info-head">
                <div class="film-details__title-wrap">
                  <h3 class="film-details__title">${this._title}</h3>
                  <p class="film-details__title-original">Original: ${this._original}</p>
                </div>
    
                <div class="film-details__rating">
                  <p class="film-details__total-rating">${this._rating}</p>
                </div>
              </div>
    
              <table class="film-details__table">
                <tr class="film-details__row">
                  <td class="film-details__term">Director</td>
                  <td class="film-details__cell">${this._director}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Writers</td>
                  <td class="film-details__cell">${this._writers}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Actors</td>
                  <td class="film-details__cell">${this._actors}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Release Date</td>
                  <td class="film-details__cell">${formatedDate}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Runtime</td>
                  <td class="film-details__cell">${this._duration}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Country</td>
                  <td class="film-details__cell">${this._country}</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">Genres</td>
                  <td class="film-details__cell">
                    ${filmGenreMarkup}
                </tr>
              </table>
    
              <p class="film-details__film-description">
                ${this._description}
              </p>
            </div>
          </div>
    
          <section class="film-details__controls">
            <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist">
            <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>
    
            <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched">
            <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>
    
            <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite">
            <label for="favorite" class="film-details__control-label film-details__control-label--favorite">Add to favorites</label>
          </section>
        </div>
    
        <div class="form-details__bottom-container">
  
        <section class="film-details__comments-wrap">
        <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${this._comments.length}</span></h3>
  
        <ul class="film-details__comments-list">
          ${filmCommentsMarkup}
        </ul>
  
        <div class="film-details__new-comment">
          <div for="add-emoji" class="film-details__add-emoji-label"></div>
  
          <label class="film-details__comment-label">
            <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
          </label>
  
          <div class="film-details__emoji-list">
            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="smile">
            <label class="film-details__emoji-label" for="emoji-smile">
              <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji">
            </label>
  
            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping">
            <label class="film-details__emoji-label" for="emoji-sleeping">
              <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji">
            </label>
  
            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-puke" value="puke">
            <label class="film-details__emoji-label" for="emoji-puke">
              <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji">
            </label>
  
            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="angry">
            <label class="film-details__emoji-label" for="emoji-angry">
              <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji">
            </label>
          </div>
        </div>
      </section>
        </div>
      </form>
    </section>`
    );
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
      this.onFilmDetailClose();
    }
    return this._element;
  }
}
