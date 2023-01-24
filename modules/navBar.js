export const addBookBtn = document.getElementById('link-add-Book');
export const listBookBtn = document.getElementById('link-list');
export const contactBtn = document.getElementById('link-contact');
const booksList = document.getElementById('books-list');
const addBookSec = document.getElementById('add-book');
const contactSec = document.getElementById('contact');

addBookBtn.addEventListener('click', () => {
  addBookSec.classList.remove('hidden');
  booksList.classList.add('hidden');
  contactSec.classList.add('hidden');
});

listBookBtn.addEventListener('click', () => {
  addBookSec.classList.add('hidden');
  booksList.classList.remove('hidden');
  contactSec.classList.add('hidden');
});

contactBtn.addEventListener('click', () => {
  contactSec.classList.remove('hidden');
  addBookSec.classList.add('hidden');
  booksList.classList.add('hidden');
});