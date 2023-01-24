export default class Books {
  constructor(books) {
    this.books = books;
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(index) {
    this.books.splice(index, 1);
  }
}