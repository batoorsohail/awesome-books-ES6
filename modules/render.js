/* eslint-disable */
import {
  books, bookData, addBook, removeBook,
} from './storage.js';
import Books from './bookClass.js';

const bookDisplay = document.querySelector('#book-section');
export const render = () => {
  const books = JSON.parse(localStorage.getItem('books')) || [];
  bookDisplay.innerHTML = '';
  books.forEach((book, index) => {
    const div = document.createElement('div');
    div.classList.add('book');
    div.innerHTML = `
            <p>"${book.title}" by ${book.author}</p>
            <button class="remove-button" data-index="${index}">Remove</button>
        `;
    bookDisplay.appendChild(div);
  });

  document.querySelectorAll('.remove-button').forEach((button) => {
    button.addEventListener('click', () => {
      removeBook(button.getAttribute('data-index'));
    });
  });
};

render();