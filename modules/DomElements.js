let titleInput;
let authorInput;
let submitButton;
let navBtns;
let booksSection;
let formSection;
let contactSection;
let timeElement;

export default function init() {
  submitButton = document.getElementById('submit-button');
  titleInput = document.getElementById('title-input');
  authorInput = document.getElementById('author-input');
  navBtns = document.querySelectorAll('nav > a');
  booksSection = document.querySelector('.all-books');
  formSection = document.querySelector('#form');
  contactSection = document.querySelector('#contact');
  timeElement = document.querySelector('time');
}

export function getTitleInput() {
  return titleInput;
}

export function getAuthorInput() {
  return authorInput;
}

export function getSubmitButton() {
  return submitButton;
}

export function getNavBtns() {
  return navBtns;
}

export function getBooksSection() {
  return booksSection;
}

export function getFormSection() {
  return formSection;
}

export function getContactSection() {
  return contactSection;
}

export function getTimeElement() {
  return timeElement;
}