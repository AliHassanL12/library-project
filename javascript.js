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
    constructor() {
        this.submitBtn = document.querySelector('.submit');
        this.submitBtn.addEventListener("click", this.submitCard.bind(this));
        this.addBookBtn = document.querySelector('.btn');
        this.addBookBtn.addEventListener("click", this.toggleForm.bind(this));
    }
    
    toggleForm() {
        const form = document.querySelector('.form');
        if (document.getElementById("form").style.display === 'none' || document.getElementById("form").style.display === '') {
            document.getElementById("form").style.display = 'block';
        }
        else {
            document.getElementById("form").style.display = 'none';
        }
    }
    
    submitCard(event) {
        event.preventDefault();
        const form = document.querySelector('.form');
        const data = new FormData(form);
        const author = data.get("author");
        const title = data.get('title');
        const pages = data.get('pages');
        let aBook = new book(author, title, pages, 'no');
        bookLibrary.myLibrary.push(aBook);
        console.log(bookLibrary.myLibrary);
        dom.removeBooks();
        dom.displayBooks();
    }

    displayBooks() {
        for (let i=0; i < bookLibrary.myLibrary.length; i++) {
            const cards = document.querySelector('.cards');
            const bookElement = document.createElement('div');
            bookElement.classList.add('book');
            bookElement.textContent = `${bookLibrary.bookInfo(i)}`;
            cards.appendChild(bookElement);
            console.log(bookLibrary.myLibrary[i].title);
        }
    }

    removeBooks() {
        const cards = document.querySelectorAll('.book');
        cards.forEach((card) => {
            console.log(card)
            card.remove();
        })
    }
}

let bookLibrary = new library();
let dom = new DOMClass();
let firstBook = new book('sa', 'Harry Potter', '32', 'yes');
let secondBook = new book('la', 'Wizard Of OZ', '32', 'no');
bookLibrary.myLibrary.push(firstBook);
bookLibrary.myLibrary.push(secondBook)
dom.displayBooks();
console.log(bookLibrary.myLibrary);