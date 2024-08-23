var ajax = new XMLHttpRequest();

ajax.open("GET", "https://leandro-taavares.github.io/frontend-puro/pagina-estoque-detalhe/data/data.json");

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
        trocaP.innerHTML = car.troca ? "Sim" : "Não";

        var donoP = document.querySelector(".Dono p:nth-child(2)");
        donoP.innerHTML = car.unico_dono ? "Sim" : "Não";

        var garantiaP = document.querySelector(".garantia-fabrica");
        garantiaP.innerHTML = car.garantia;

        var infotextoP = document.querySelector(".informações-texto"); 
        infotextoP.innerHTML = car.informacoes;

        var opcionais = car.opcionais;
        var colunas = document.querySelectorAll(".itens-opcionais > div");
        var colIndex = 0;

        opcionais.forEach(opcional => {
            var opcionalDiv = document.createElement("div");
            opcionalDiv.classList.add("alinha-lista");
            var img = document.createElement("img");
            img.src = "imagens/Check-opcionais.png";
            img.alt = "check";
            var p = document.createElement("p");
            p.classList.add("texto-opcionais");
            p.innerHTML = opcional;

            opcionalDiv.appendChild(img);
            opcionalDiv.appendChild(p);

            colunas[colIndex].appendChild(opcionalDiv);
            colIndex = (colIndex + 1) % colunas.length; // Mudar para a próxima coluna
        });
    }

    var swiperWrapper = document.querySelector('.swiper-wrapper');

        // Limpa qualquer conteúdo existente dentro do swiperWrapper
        swiperWrapper.innerHTML = '';

        // Adiciona cada imagem do JSON como um slide ao swiperWrapper
        car.imagem.forEach(imageUrl => {
            var swiperSlide = document.createElement('div');
            swiperSlide.classList.add('swiper-slide');
            
            var img = document.createElement('img');
            img.src = imageUrl;
            img.alt = car.nome; // Pode ser alterado para o que desejar

            swiperSlide.appendChild(img);
            swiperWrapper.appendChild(swiperSlide);
        });
};