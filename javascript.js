const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author, 
    this.pages = pages,
    this.read = read
}

Book.prototype.generateID = function() {
    this.id = crypto.randomUUID()
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read)
    myLibrary.push(book);
    book.generateID();
}

addBookToLibrary('Harry Potter', 'JK', '4500', 'Yes')
addBookToLibrary('Harry Potter', 'JK', '4500', 'Yes')
addBookToLibrary('Harry Potter', 'JK', '4500', 'Yes')

function displayBooks() {
    for (const book of myLibrary) {
        
    }
}

displayBooks()