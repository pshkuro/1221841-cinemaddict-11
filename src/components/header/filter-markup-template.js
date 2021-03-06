import AbstractComponent from "../abstract-component";
import {FilterType} from "../../const";

// Генерация 1 фильтра
export default class FiltersMarkupComponent extends AbstractComponent {
  constructor(filters, isActive) {
    super();
    this._isActive = isActive;

    const {name, count} = filters;
    this._name = name;
    this._count = count;
  }


  getTemplate() {
    const navigationActiveClass = this._isActive ? ` main-navigation__item--active` : ``;

    return (`
    <a href="#${this._name.toLowerCase()}"
    id="filter__${this._name}"
    class="main-navigation__item${navigationActiveClass}">
    ${this._name } ${(this._name === FilterType.ALL) ? `` :
        `<span class="main-navigation__item-count">${this._count}</span>`}</a>`
    );
  }
}

