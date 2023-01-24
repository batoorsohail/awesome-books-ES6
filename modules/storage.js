/* eslint-disable */
import Books from './bookClass.js';
import { render } from './render.js';

export const books = JSON.parse(localStorage.getItem('books')) || [];
export const bookData = new Books(books);

export const addBook = (title, author) => {
  const book = { title, author };
  bookData.addBook(book);
  localStorage.setItem('books', JSON.stringify(books));
  // eslint-disable-next-line no-use-before-define
  render();
};

export const removeBook = (index) => {
  bookData.removeBook(index, 1);
  localStorage.setItem('books', JSON.stringify(books));
  // eslint-disable-next-line no-use-before-define
  render();
};