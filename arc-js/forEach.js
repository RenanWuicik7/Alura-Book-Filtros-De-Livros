const elementsForBooksInsert = document.getElementById("livros");
const totalValueBooks = document.getElementById('valor_total_livros_disponiveis');


function showBooksOnScreen(booksList) {
    totalValueBooks.innerHTML = "";
    elementsForBooksInsert.innerHTML = "";
    booksList.forEach(book => {
        let disponibility = book.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel';        

        elementsForBooksInsert.innerHTML += `
            <div class="livro">
                <img class="${disponibility}" src="${book.imagem}" alt="${book.alt}" />
                <h2 class="livro__titulo">
                    ${book.titulo}
                </h2>
                <p class="livro__descricao">${book.autor}</p>
                <p class="livro__preco" id="preco">R$${book.preco.toFixed(2)}</p>
                <div class="tags">
                    <span class="tag">${book.categoria}</span>
                </div>
            </div>
        `
    });
}