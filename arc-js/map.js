function aplicateDescout(livros) {
    const descount = 0.3;
    descountBooks = livros.map(book => {
        return {...book, preco: book.preco - (book.preco * descount)};
    })

    return descountBooks;
}