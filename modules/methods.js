export class Methods {
    constructor() {
      this.books = [];
    }
  
    init = () => {
      if (JSON.parse(localStorage.getItem('books')) !== null) {
        this.books = JSON.parse(localStorage.getItem('books'));
        this.books.forEach((element) => {
          this.addBookToDocument(element);
        });
      }
    };
  
    removeBook = (time) => {
      this.books = this.books.filter((book) => book.time !== time);
      localStorage.setItem('books', JSON.stringify(this.books));
    };
  
    removeBtnEventListener = (element, time) => {
      this.removeBook(time);
      element.parentElement.remove();
    };
  
    addBookToDocument = (book) => {
      const booksDiv = document.getElementById('books');
  
      const bookDiv = document.createElement('div');
      bookDiv.setAttribute('data-time', book.time);
  
      const bookDesc = document.createElement('p');
      bookDesc.classList.add('book-description');
      const remove = document.createElement('button');
      remove.classList.add('remove-btn');
      bookDesc.innerText = `"${book.title}" by ${book.author}`;
      remove.innerText = 'Remove';
  
      bookDiv.append(bookDesc, remove);
      booksDiv.append(bookDiv);
      remove.addEventListener('click', () => {
        this.removeBtnEventListener(remove, book.time);
      });
    };
  
    addBookToLocalStorage = (title, author) => {
      const d = new Date();
      const time = d.getTime();
      this.books.push({
        title,
        author,
        time,
      });
      localStorage.setItem('books', JSON.stringify(this.books));
      this.addBookToDocument({
        title,
        author,
        time,
      });
    };
}