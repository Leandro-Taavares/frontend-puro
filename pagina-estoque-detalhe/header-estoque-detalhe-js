const abrirHeader = document.querySelector('.header_menu')
const headerMenu = document.querySelector('.header_menu_aberto')
const menuFechar = document.querySelector('.menu_texto')
const virarX = document.querySelector('.barra_cabecalho_1')
const virarXs = document.querySelector('.barra_cabecalho_3')
const apagarBarra = document.querySelector('.barra_cabecalho_2')


function abrirEFecharModal(){
    console.log("teste");
    headerMenu.classList.toggle('menu_aberto__ativo');
    virarX.classList.toggle('ativo');
    virarXs.classList.toggle('ativo');
}

abrirHeader.addEventListener('click', abrirEFecharModal)


abrirHeader.addEventListener('click', (event) => {
    if(menuFechar.textContent == "MENU"){
        menuFechar.textContent = "FECHAR";
    } else {
        menuFechar.textContent = "MENU";
    };
})

abrirHeader.addEventListener('click', (event) => {
    if(apagarBarra.style.display === "none"){
        apagarBarra.style.display = "block";

    } else {
        apagarBarra.style.display = "none";
    };
})