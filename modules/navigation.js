import * as domElements from './DomElements.js';

export function showBooksSection() {
  domElements.getBooksSection().classList.remove('hidden');
  domElements.getFormSection().classList.add('hidden');
  domElements.getContactSection().classList.add('hidden');
}

export function showFormSection() {
  domElements.getFormSection().classList.remove('hidden');
  domElements.getBooksSection().classList.add('hidden');
  domElements.getContactSection().classList.add('hidden');
}

export function showContactSection() {
  domElements.getContactSection().classList.remove('hidden');
  domElements.getFormSection().classList.add('hidden');
  domElements.getBooksSection().classList.add('hidden');
}