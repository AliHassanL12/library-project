

class library {
    constructor() {
        this.myLibrary = [];
    }

    addBookToLibrary() {
        const author = prompt("Who's the author?");
        const title = prompt("Book Title?");
        const pages = prompt("How many pages?");
        const hasRead = prompt("Have you read it already?");

        let aBook = new book(author, title, pages, hasRead);
        this.myLibrary.push(aBook);
    }
}

class book {
    constructor(author, title, pages, reading){
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.reading = reading; 
    }
}

class DOMClass {
    displayBooks() {
        for (let i=0; i < bookLibrary.myLibrary.length; i++) {
            const container = document.querySelector('.container');
            const bookElement = document.createElement('div');
            bookElement.classList.add('book');
            bookElement.textContent = `${bookLibrary.myLibrary[i].title}\nhello this is`;
            container.appendChild(bookElement);
            console.log(bookLibrary.myLibrary[i].title);
        }
    }
}
let bookLibrary = new library();
let dom = new DOMClass();
let firstBook = new book('sa', 'sda', '32', 'yes');
let secondBook = new book('la', '[ra', '32', 'no');
bookLibrary.myLibrary.push(firstBook);
bookLibrary.myLibrary.push(secondBook);
console.log(bookLibrary.myLibrary);
dom.displayBooks();
