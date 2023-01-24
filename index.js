import { books, bookData } from './modules/bookClass.js';
import AddBook from './modules/addBook.js';
import render from './modules/render.js';
import TimeAndDate from './modules/TimeAndDate.js';

const buttonAdd = document.querySelector('#add-btn');
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookDisplay = document.querySelector('#book-section');
const currentDate = document.querySelector('.date');
const addBookBtn = document.getElementById('link-add-Book');
const listBookBtn = document.getElementById('link-list');
const contactBtn = document.getElementById('link-contact');
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

currentDate.innerHTML = `
  ${TimeAndDate()}
`;

const removeBook = (index) => {
  bookData.removeBook(index, 1);
  localStorage.setItem('books', JSON.stringify(books));
  render(bookDisplay, books, removeBook);
};

render(bookDisplay, books, removeBook);

buttonAdd.addEventListener('click', () => {
  const title = bookTitle.value;
  const author = bookAuthor.value;
  if (title !== '' && author !== '') {
    AddBook(title, author, render, bookDisplay, books, removeBook, bookData);
  }
  bookTitle.value = '';
  bookAuthor.value = '';
});