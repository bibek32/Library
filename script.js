let library = [];


function Book(id,title, author, pages, read){
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function storeBook(title,author,pages,read){
    const book1 = new Book(crypto.randomUUID(),title,author,pages,read);
    library.push(book1);
}

function createBookDiv(title, author, pages, read){

    let parentDiv = document.createElement("div");
    parentDiv.className = "book";

    let titleSection = document.createElement("div");
    titleSection.className = "title-section";

    let bookTitle = document.createElement("h3");
    bookTitle.textContent = title;

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = read

    titleSection.appendChild(bookTitle);
    titleSection.appendChild(checkbox);


    let bookInfo = document.createElement("div");
    bookInfo.className = "book-info";

    let authorElem = document.createElement("p");
    authorElem.textContent = author;

    let pagesElem = document.createElement("p");
    pagesElem.textContent = pages;

    bookInfo.appendChild(authorElem);
    bookInfo.appendChild(pagesElem);

    parentDiv.appendChild(titleSection);
    parentDiv.appendChild(bookInfo);

    return parentDiv;

}

let container = document.querySelector(".books");

let book1 = createBookDiv("Bibek", "Silwal", 20, true);
container.appendChild(book1);