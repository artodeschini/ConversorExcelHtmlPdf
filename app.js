const Reader = require('./Reader');
const Process = require('./Processor');
const Table = require('./Table');

let reader = new Reader();

async function main() {
    let data = await reader.Reader('./users.csv');
    let dadosProcessados = Process.Process(data);

    let uruarios = new Table(dadosProcessados);
    console.log(`a tabela tem ${uruarios.RowCount} linhas`);
    console.log(`a tabela tem ${uruarios.ColumnCount} colunas`);
}

main();