const abrirFiltro = document.querySelector('.filtro-mobile')
const abaFiltro = document.querySelector('.aba-filtro')

abrirFiltro.addEventListener('click', abrirEFecharModal)

function abrirEFecharModal() {
    console.log("teste")
    abaFiltro.classList.toggle('filtro_aberto__ativo');
}
