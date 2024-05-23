var ajax = new XMLHttpRequest();

ajax.open ("GET", "https://doinmotors.free.beeceptor.com/carros");

ajax.send();

ajax.onreadystatechange = () => {
    if(ajax.readyState === 4 && ajax.status === 200) {
        console.log('sucesso');


        var resposta = ajax.response;
        var lista = document.querySelectorAll(".estoque-carros");
        

    }
}
