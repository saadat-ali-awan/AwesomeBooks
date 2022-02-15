import { DateTime } from '../node_modules/luxon/src/luxon.js';
import * as domElements from './DomElements.js';

function changeTime() {
  const now = DateTime.now();
  domElements.getTimeElement().innerHTML = `${now.toLocaleString(DateTime.DATETIME_MED_WITH_WEEKDAY)}`;
  domElements.getTimeElement().setAttribute('datetime', now.toLocaleString(DateTime.DATETIME_FULL));
}

export default function init() {
  changeTime();
  setInterval(() => {
    changeTime();
  }, 500);
}