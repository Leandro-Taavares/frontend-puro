const informaçõesCarros = document.querySelectorAll ('.informações-carro-2')

addEventListener("scroll", (event) => {
var top = window.scrollY / document.documentElement.scrollTop;

if(top > 500) {
    document.querySelectorAll('.informações-carro-2').addClass('.fixed');
} else {
    document.querySelectorAll ('.informações-carro-2').removeClass('.fixed');
}
});




