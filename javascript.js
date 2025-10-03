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

addBookToLibrary('The grammar school', 'Random', '500', 'Yes')
addBookToLibrary('Lord Of The Rings', 'God Knows', '500', 'No')
addBookToLibrary('LOTM', 'Someone', '600', 'No')


function displayBooks() {
    for (const book of myLibrary) {
        const cardContainer = document.querySelector('.cardContainer');
        console.log(cardContainer)
        const card = document.createElement('div');
        card.classList.add('card');
        cardContainer.appendChild(card);
        const ul = document.createElement('ul');
        card.appendChild(ul);
        for (const property in book) {
            let isOwn = book.hasOwnProperty(property);
            if (isOwn && property !== 'id') {
                const li = document.createElement('li');
                li.textContent = `${property}: ${book[property]}`;
                ul.appendChild(li);
            }
        }
    }
}

const openButton = document.querySelector('.showModal');
const dialog = document.querySelector('.dialog');
openButton.addEventListener('click', () => {
    dialog.showModal();
})

displayBooks()
