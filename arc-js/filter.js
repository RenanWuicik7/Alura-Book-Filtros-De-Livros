const botoes = document.querySelectorAll(".btn");

botoes.forEach(btn => btn.addEventListener("click", booksFilter))

function booksFilter() {
    const btnElement = document.getElementById(this.id);
    const category = btnElement.value;
    let filtredBook = category == 'disponivel' ? disponibleBooks() : category == 'indisponivel' ? undisponibleBooks() : anotherTipesOfCategory(category);
    showBooksOnScreen(filtredBook);
    if(category == 'disponivel') {
        const allValue = calcAllTheDisValue(filtredBook);
        showValuesOfBooks(allValue);
    }
}

function anotherTipesOfCategory(category) {
    return livros.filter(book => book.categoria == category);
}

function undisponibleBooks() {
    return livros.filter(book => book.quantidade <= 0);
}

function disponibleBooks() {
    return livros.filter(book => book.quantidade > 0);
}

function showValuesOfBooks(allValue) {
    totalValueBooks.innerHTML = `
    <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${allValue}</span></p>
    </div>
    `
}