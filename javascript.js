class library {
    constructor() {
        this.myLibrary = [];
    }
}

class book {
    constructor(author, title, pages, reading){
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.reading = reading; 
    }

    addBookToLibrary() {
        const author = prompt("Who's the author?");
        const title = prompt("Book Title?");
        const pages = prompt("How many pages?");
        const hasRead = prompt("Have you read it already?");

        let aBook = new book(author, title, pages, hasRead);
        bookLibrary.myLibrary.push(aBook);
    }

}
let bookLibrary = new library();
let firstBook = new book('sa', 'sda', '32', 'yes');
let secondBook = new book('la', '[ra', '32', 'no');
bookLibrary.myLibrary.push(firstBook);
bookLibrary.myLibrary.push(secondBook);
console.log(bookLibrary.myLibrary)
