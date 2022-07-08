const fs = require('fs');

let conteudo = "Algo que eu queria adicionar no arquivo";

// exemplo de escrita em arquivos do tipo texto
fs.writeFile('./teste.txt', conteudo, (err) => {
    if (err) {
        console.log(`Ocorreu um erro ao escrever no arquivo detalhes >>> ${err}`);
    }
});

// para executar node escreverArquivo.js