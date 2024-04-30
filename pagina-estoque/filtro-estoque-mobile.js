const abrirFiltro = document.querySelector('.filtro-mobile')
const abaFiltro = document.querySelector('.aba-filtro')
const fecharFiltroX = document.querySelector('.fechar-filtro-mobile-x');
const fecharFiltroX2 = document.querySelector('.fechar-filtro-mobile-x-2');

abrirFiltro.addEventListener('click', abrirEFecharModal)
fecharFiltroX.addEventListener('click', abrirEFecharModal);
fecharFiltroX2.addEventListener('click', abrirEFecharModal);

function abrirEFecharModal() {
    console.log("teste")
    abaFiltro.classList.toggle('filtro_aberto__ativo');

    if (abaFiltro.classList.contains('filtro_aberto__ativo')) {
               document.body.classList.add('no-scroll');
    } else {
        document.body.classList.remove('no-scroll');
    }
}

abrirFiltro.addEventListener('click', abrirEFecharModal)
