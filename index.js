import Library from './modules/methods.js';
import * as domElements from './modules/DomElements.js';
import * as navigationFunctions from './modules/navigation.js';
import * as datetime from './modules/date_time.js';

window.addEventListener('load', () => {
  const library = new Library();

  domElements.default();
  library.init();
  datetime.default();

  domElements.getSubmitButton().addEventListener('click', (e) => {
    e.preventDefault();
    const author = domElements.getAuthorInput().value;
    const title = domElements.getTitleInput().value;
    library.addBookToLocalStorage(title, author);
    domElements.getAuthorInput().value = null;
    domElements.getTitleInput().value = null;
  });

  domElements.getNavBtns().forEach((btn) => {
    btn.addEventListener('click', () => {
      const i = document.querySelector('.active');
      if (i != null) {
        i.classList.remove('active');
      }
      btn.className += 'active';
      if (btn.getAttribute('href') === '#books') {
        navigationFunctions.showBooksSection();
      } else if (btn.getAttribute('href') === '#form') {
        navigationFunctions.showFormSection();
      } else if (btn.getAttribute('href') === '#contact') {
        navigationFunctions.showContactSection();
      }
    });
  });
});