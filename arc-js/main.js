let livros = [];
const endPointDaAPI = "https://guilhermeonrails.github.io/casadocodigo/livros.json";

getBooksOfAPI();


async function getBooksOfAPI() {
    const res = await fetch(endPointDaAPI);
    livros = await res.json();
    let descountBooks = aplicateDescout(livros);
    showBooksOnScreen(descountBooks);
}