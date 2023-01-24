/* eslint-disable */
import { addBookBtn, listBookBtn, contactBtn } from './modules/navBar.js';
import Books from './modules/bookClass.js';
import { bookData, addBook, removeBook } from './modules/storage.js';
import { render } from './modules/render.js';
import buttonAdd from './modules/addBook.js';
import TimeAndDate from './modules/TimeAndDate.js';

const currentDate = document.querySelector('.date');


currentDate.innerHTML = `
  ${TimeAndDate()}
`;