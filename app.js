const Reader = require('./Reader');
const Process = require('./Processor');
const Table = require('./Table');
const HtmlParser = require('./HtmlParser');

let reader = new Reader();

async function main() {
    let data = await reader.Reader('./users.csv');
    let dadosProcessados = Process.Process(data);

    let uruarios = new Table(dadosProcessados);
    console.log(`a tabela tem ${uruarios.RowCount} linhas`);
    console.log(`a tabela tem ${uruarios.ColumnCount} colunas`);
    
    let html = await HtmlParser.Parser(uruarios);
    console.log(html);
}

main();