addEventListener("scroll", (event) => {
    var top = window.scrollY / document.documentElement.scrollTop;

    console.log(top);

    if(window.scrollY > 532) {
        document.querySelector('.informações-carro-2').classList.add('fixed');
    } else {
        document.querySelector('.informações-carro-2').classList.remove('fixed');
    }
});




