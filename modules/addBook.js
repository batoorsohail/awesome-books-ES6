import { addBook } from './storage.js';

const buttonAdd = document.querySelector('#add-btn');
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
export default buttonAdd.addEventListener('click', () => {
  const title = bookTitle.value;
  const author = bookAuthor.value;
  if (title !== '' && author !== '') {
    addBook(title, author);
  }
  bookTitle.value = '';
  bookAuthor.value = '';
});