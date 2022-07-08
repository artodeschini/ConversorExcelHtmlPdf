const fs = require('fs');

// exemplo de leitura de arquivos do tipo json
fs.readFile('./artur.json', {encoding: 'utf-8'}, (err, dados) => {

    if (err) {
        console.log(`Ocorreu uma falha ao ler o arquivo detalhes >>> ${err}`);
    } else {
        
        console.log(`conteudo original ${dados}`);
        
        //JSON.parse converte conteudo em texto para json
        var content = JSON.parse(dados);
        
        //alterando o conteudo lido
        content.sobrenome += ' Crestani' ;
        console.log(content);

        //salvando alteracoes no arquivo
        fs.writeFile(
            './testes/artur.json', // arquivo a ser escrito
            JSON.stringify(content), (err) => { /// transforma json em texto para ser escrito no arquivo
                if (err) {
                    console.log(`Erro ao alterar o arquivo detalhes >>> ${err}`);
                }
            }
        ); 
    }
});

//para executar use node lerArquivo.js