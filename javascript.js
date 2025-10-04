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

Book.prototype.getID = function() {
    return this.id;
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
        const card = document.createElement('div');
        card.classList.add('card');
        cardContainer.appendChild(card);
        const ul = document.createElement('ul');
        card.appendChild(ul);
        for (const property in book) {
            let isOwn = book.hasOwnProperty(property);
            card.dataset.id = `${book['id']}`
            if (isOwn && property !== 'id') {
                const li = document.createElement('li');
                li.textContent = `${property}: ${book[property]}`;
                ul.appendChild(li);
            }
        }
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delBtn');
        deleteButton.textContent = 'Delete'
        card.appendChild(deleteButton);
    }
    deleteBook();
}

function removeBooks() {
    const cards = document.querySelectorAll('.card');
    cards.forEach( (card) => {
        card.remove();
    })
}


const openButton = document.querySelector('.showModal');
const dialog = document.querySelector('.dialog');
const submitButton = document.querySelector('.submit');

openButton.addEventListener('click', () => {
    dialog.showModal();
});

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    const title = document.querySelector("input[id='title']");
    const author = document.querySelector("input[id='author']");
    const pages = document.querySelector("input[id='pages']");
    const read = document.querySelector("input[id='read']");
    if (read.checked) {
        read.value = 'Yes';
    } else {
        read.value = 'No';
    }
    addBookToLibrary(title.value, author.value, pages.value, read.value);
    removeBooks();
    displayBooks();
    dialog.close()
})

function deleteBook() {
    const delBtns = document.querySelectorAll('.delBtn');
    delBtns.forEach((delBtn) => {
        delBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const ID = delBtn.parentElement.dataset.id;
            for (const book of myLibrary) {
                const objID = book.getID();
                if (objID === ID) {
                    const index = myLibrary.indexOf(book);
                    myLibrary.splice(index, 1);
                } 
                removeBooks();
                displayBooks();
            }
        })
    })
}
displayBooks()

