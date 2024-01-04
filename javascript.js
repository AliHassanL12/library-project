

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

    bookInfo(i) {
        return "Author: " + this.myLibrary[i].author + "\r\n" + "Title: " + this.myLibrary[i].title
        + "\r\n" + this.myLibrary[i].pages + " Pages";
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
            bookElement.textContent = `${bookLibrary.bookInfo(i)}`;
            container.appendChild(bookElement);
            console.log(bookLibrary.myLibrary[i].title);
        }
    }
}

let bookLibrary = new library();
let dom = new DOMClass();
let firstBook = new book('sa', 'Harry Potter', '32', 'yes');
let secondBook = new book('la', 'Wizard Of OZ', '32', 'no');
bookLibrary.myLibrary.push(firstBook);
bookLibrary.myLibrary.push(secondBook);
console.log(bookLibrary.myLibrary);
dom.displayBooks();
