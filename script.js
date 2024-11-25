function toggleMenu() {
    const menu = document.getElementById('menu-navegacao');
    const icon = document.getElementById('menu-hamburguer');

    // Alterna a visibilidade do menu e do ícone
    menu.classList.toggle('show');
    icon.classList.toggle('hide');
}
