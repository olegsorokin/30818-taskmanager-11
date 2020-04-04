import {createBoardTemplate} from "../src/components/board";
import {createFilterTemplate} from "../src/components/filter";
import {createLoadMoreButtonTemplate} from "../src/components/load-more-button";
import {createSiteMenuTemplate} from "../src/components/site-menu";
import {createSortingTemplate} from "../src/components/sorting";
import {createTaskEditTemplate} from "../src/components/task-edit";
import {createTaskTemplate} from "../src/components/task";

const TASK_COUNT = 3;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

render(siteHeaderElement, createSiteMenuTemplate(), `beforeend`);
render(siteMainElement, createFilterTemplate(), `beforeend`);
render(siteMainElement, createBoardTemplate(), `beforeend`);

const boardElement = siteMainElement.querySelector(`.board`);
const taskListElement = siteMainElement.querySelector(`.board__tasks`);

render(boardElement, createSortingTemplate(), `afterbegin`);
render(taskListElement, createTaskEditTemplate(), `beforeend`);

for (let i = 0; i < TASK_COUNT; i++) {
  render(taskListElement, createTaskTemplate(), `beforeend`);
}

render(boardElement, createLoadMoreButtonTemplate(), `beforeend`);
