var ajax = new XMLHttpRequest();

ajax.open ("GET", "https://leandro-taavares.github.io/frontend-puro/pagina-estoque/Data/data.json");

ajax.responseType = "json";

ajax.send();

ajax.onreadystatechange = () => {
    if (ajax.readyState === 4 && ajax.status === 200) {
        console.log('sucesso');

        var html = "";
        var resposta = ajax.response;
        var lista = document.querySelector(".estoque-carros");

        resposta.resultado.forEach(car => {
            html += '<a href="/frontend-puro/pagina-estoque-detalhe/index.html">';
            html += '<div class="carros-anunciados">';
                html += `<img src="${car.imagem}" alt="" class="foto-carro-class">`;
                html += '<div class="descricao-carro">';
                    html += `<p class="nome-carro">${car.nome}</p>`;
                    html += `<p class="modelo-carro">${car.transmissao}</p>`;
                    html += `<p class="preco-carro">R$ ${car.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>`;
                    html += `<p class="ano-carro">${car.ano}</p>`;
                    html += `<p class="km-carro">${car.km.toLocaleString('pt-BR')} km</p>`;
                    html += '<div class="borda-ver-mais">';
                        html += '<p class="ver-mais">VER MAIS</p>';
                    html += '</div> ';
                    html += '</div>';
                html += '</div>';
            html += '</a>';
        });

        lista.innerHTML = html;
    }
};
