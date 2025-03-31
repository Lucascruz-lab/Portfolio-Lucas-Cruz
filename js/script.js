function toggleMenu() {
    const menu = document.getElementById('menu-navegacao');
    const icon = document.getElementById('menu-hamburguer');
    
    // Alterna a visibilidade do menu
    menu.classList.toggle('show');
    
    // Alterna o valor de aria-expanded entre true e false
    const isExpanded = icon.getAttribute('aria-expanded') === 'true';
    icon.setAttribute('aria-expanded', !isExpanded);
}
