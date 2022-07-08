const fs = require('fs');

// exemplo de leitura de arquivos do tipo texto
fs.readFile('./testes/my_file.txt', {encoding: 'utf-8'}, (err, dados) => {

    if (err) {
        console.log(`Ocorreu uma falha ao ler o arquivo detalhes >>> ${err}`);
    } else {
        console.log(dados);
    }
});

//para executar use node lerArquivo.js