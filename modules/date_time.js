import { DateTime } from '../node_modules/luxon/src/luxon.js';
import * as domElements from './DomElements.js';

function changeTime() {
  const now = DateTime.now();
  domElements.getTimeElement().innerHTML = `${now.toLocaleString(DateTime.DATETIME_MED_WITH_WEEKDAY)}`;
  domElements.getTimeElement().setAttribute('datetime', now.toLocal().toFormat('yyyy-MM-DD HH:mm'));
}

export default function init() {
  changeTime();
  setInterval(() => {
    changeTime();
  }, 500);
}