class library {
    constructor() {
        this.myLibrary = [];
    }

    addBookToLibrary(author,title, pages, hasRead) {
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
    dataAttribute = 0;

    constructor() {
        this.submitBtn = document.querySelector('.submit');
        this.submitBtn.addEventListener("click", this.submitCard.bind(this));
        this.addBookBtn = document.querySelector('.btn');
        this.addBookBtn.addEventListener("click", this.toggleForm.bind(this));

        this.cardContainer = document.getElementById('cards');
        this.cardContainer.addEventListener("click", function(event){
            const btnClicked = event.target;
            if (btnClicked.classList.contains('position')) {
                const btnID = btnClicked.dataset.index;
                for (let i=0; i<bookLibrary.myLibrary.length; i++){
                    if(i == btnID) {
                        bookLibrary.myLibrary.splice(i, 1);
                        dom.removeBooks();
                        dom.displayBooks();
                    }
                }
            }
            else if (btnClicked.classList.contains('statusBtn')) {
                const statusBtn = document.querySelectorAll('.statusBtn');
                const btnID = btnClicked.dataset.index;
                statusBtn.forEach((statusButton) => {
                    for (let i=0; i<bookLibrary.myLibrary.length; i++){
                        if(i == btnID) {
                            if (statusButton.textContent.includes('Not Read') && statusButton.getAttribute('data-index') == i) {
    
                                statusButton.innerHTML = 'Read';
                            }
                            else if (statusButton.textContent.includes('Read') && statusButton.getAttribute('data-index') == i){
                                statusButton.innerHTML = 'Not Read';
                            }
                        }
                    }
                })
            }
        })
    }

    displayBooks() {
        this.dataAttribute = 0;
        for (let i=0; i < bookLibrary.myLibrary.length; i++) {
            const cards = document.querySelector('.cards');
            const bookElement = document.createElement('div');
            const deleteBtn = document.createElement('button');
            const statusBtn = document.createElement('button');
            statusBtn.classList.add('statusBtn');
            deleteBtn.classList.add('btn');
            deleteBtn.classList.add('position');
            bookElement.classList.add('book');
            bookElement.textContent = `${bookLibrary.bookInfo(i)}`;
            statusBtn.dataset.index = this.dataAttribute;
            deleteBtn.dataset.index = this.dataAttribute++;
            deleteBtn.textContent = `Delete book`;
            statusBtn.textContent = `Not Read`;
            cards.appendChild(bookElement);
            bookElement.appendChild(deleteBtn);
            bookElement.appendChild(statusBtn);
        }
    }

    removeBooks() {
        const cards = document.querySelectorAll('.book');
        cards.forEach((card) => {
            card.remove();
        })
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
        bookLibrary.addBookToLibrary(author, title, pages, 'no');
        dom.removeBooks();
        dom.displayBooks();
    }
}

let bookLibrary = new library();
let dom = new DOMClass();
let firstBook = new book('sa', 'Harry Potter', '32', 'yes');
let secondBook = new book('la', 'Wizard Of OZ', '32', 'no');
bookLibrary.myLibrary.push(firstBook);
bookLibrary.myLibrary.push(secondBook)
dom.displayBooks();