function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você não buscou uma tecnologia.</p>";
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    let resultados = "";

    // Itera sobre cada tecnologia no array 'tecnologias'
    for (let tecnologia of tecnologias) {
        // Verifica se as propriedades existem e são strings antes de usar toLowerCase
        let titulo = tecnologia.titulo ? tecnologia.titulo.toLowerCase() : "";
        let descricao = tecnologia.descricao ? tecnologia.descricao.toLowerCase() : "";
        let tags = tecnologia.tags ? tecnologia.tags.toLowerCase() : "";

        // Verifica se algum dos campos contém o termo pesquisado
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="${tecnologia.link_titulo}" target="_blank">${tecnologia.titulo}</a>
                </h2>
                <p class="descricao-meta">${tecnologia.descricao}</p>
                <a href="${tecnologia.link_mais}" target="_blank">Saber mais</a>
            </div>
            `;
        }
    }

    // Se nenhum resultado foi encontrado, exibe uma mensagem padrão
    if (!resultados) {
        resultados = "<p>Nada foi encontrado.</p>";
    }

    section.innerHTML = resultados;
}


