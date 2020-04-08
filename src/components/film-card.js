// Генерация карточки фильма
export const createFilmCardTemplate = (data) => {
  const {poster, wrap, rating, info, description, comments, controls} = data;

  const {title} = wrap;
  const {year, duration, genre} = info;
  const {isWatchlist, isWatched, isFavorite} = controls;

  const activeClass = `film-card__controls-item--active`;


  // Добавляем dataset атрибут карточке по названию фильма, чтобы идентифиц ее и связать с попапом карточки
  return (
    `<article class="film-card" data-id="${title}"> 
    <h3 class="film-card__title">${title}</h3>
    <p class="film-card__rating">${rating}</p>
    <p class="film-card__info">
      <span class="film-card__year">1929</span>
      <span class="film-card__duration">1h 55m</span>
      <span class="film-card__genre">Musical</span>
    </p>
    <img src="./images/posters/${poster}" alt="" class="film-card__poster">
    <p class="film-card__description">${description}</p>
    <a class="film-card__comments">5 comments</a>
    <form class="film-card__controls">
      <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
      <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
      <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
    </form>
  </article>`
  );
};
