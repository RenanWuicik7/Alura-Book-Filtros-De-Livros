const orderToPrice = document.getElementById('btnOrdenarPorPreco');

orderToPrice.addEventListener("click", priceBooksOrdener);

function priceBooksOrdener() {
    let ordenedsBooks = livros.sort((a, b) => a.preco - b.preco)
    showBooksOnScreen(ordenedsBooks);
}