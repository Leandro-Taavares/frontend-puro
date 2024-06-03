var ajax = new XMLHttpRequest();

ajax.open("GET", "http://localhost/frontend-puro/pagina-estoque-detalhe/Data/data.json");

ajax.responseType = "json";

ajax.send();

ajax.onreadystatechange = () => {
    if (ajax.readyState === 4 && ajax.status === 200) {
        console.log('sucesso');

        var car = ajax.response;

        var cambioP = document.querySelector(".cambio p:nth-child(2)");
        cambioP.innerHTML = car.transmissao;
        
        var anoP = document.querySelector(".Ano p:nth-child(2)");
        anoP.innerHTML = car.ano;

        var kmP = document.querySelector(".Km p:nth-child(2)");
        kmP.innerHTML = car.km;
        
        var corP = document.querySelector(".Cor p:nth-child(2)");
        corP.innerHTML = car.cor;

        var trocaP = document.querySelector(".Troca p:nth-child(2)");
        trocaP.innerHTML = car.troca ? "Sim" : "Não";;

        var donoP = document.querySelector(".Dono p:nth-child(2)");
        donoP.innerHTML = car.unico_dono ? "Sim" : "Não";

        var garantiaP = document.querySelector(".garantia-fabrica");
        garantiaP.innerHTML = car.garantia;

        var infotextoP = document.querySelector(".informações-texto"); 
        infotextoP.innerHTML = car.informacoes;
    }
}