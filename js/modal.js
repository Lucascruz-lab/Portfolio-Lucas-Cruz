
const botoesAbrir = document.querySelectorAll('.botao_projeto');

botoesAbrir.forEach(botao => {
    botao.addEventListener('click', () => {
        const id = botao.getAttribute('data-modal');
        console.log(id);
        const modal = document.getElementById(id);
        modal.showModal();
    });
});

const botoesFechar = document.querySelectorAll('.fechar_modal');

botoesFechar.forEach(botao => {
    botao.addEventListener('click', () => {
        const modal = botao.closest('dialog');

        modal.close();
    });
});