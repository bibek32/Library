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

storeBook("Bibek", "Silwal", 28, true);
console.log(library);