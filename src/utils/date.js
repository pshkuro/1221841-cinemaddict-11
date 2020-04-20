// Приведение времени к нужному формату - сроке
const castTimeFormat = (value) => {
  return value < 10 ? `${value}` : String(value);
};

export const formatTime = (date) => {
  const hours = castTimeFormat(date.getHours() % 12);
  const minutes = castTimeFormat(date.getMinutes());

  return `${hours}h ${minutes}m`;
};

// Генерация случайной даты от до
export function getRandomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

// Форматирование даты к date-month name-year
export function formatDate(date) {
  const monthNames = [`January`, `February`, `March`,
    `April`, `May`, `June`, `July`, `August`, `September`,
    `October`, `November`, `December`];

  const d = date;
  const day = d.getDate();
  const month = d.getMonth();
  const year = d.getFullYear();

  return `${day} ${monthNames[month]} ${year}`;

}

// Форматирование даты в формат гггг/мм/дд чч:мм
export function formatNumberDate(date) {
  let d = date;
  const dateYear = d.getFullYear();
  d = [
    `0` + (d.getMonth() + 1),
    `0` + d.getDate(),
    `0` + d.getHours(),
    `0` + d.getMinutes()
  ].map((component) => component.slice(-2));
  return `${dateYear}/${d.slice(0, 2).join(`/`)}  ${d.slice(2).join(`:`)}`;
}