const Reader = require('./Reader');
const Write = require('./Writer');
const Process = require('./Processor');
const Table = require('./Table');
const HtmlParser = require('./HtmlParser');
const PdfWriter = require('./PdfWriter');

let reader = new Reader();
let writer = new Write()

async function main() {
    let data = await reader.Reader('./users.csv');
    let dadosProcessados = Process.Process(data);

    let uruarios = new Table(dadosProcessados);
    console.log(`a tabela tem ${uruarios.RowCount} linhas`);
    console.log(`a tabela tem ${uruarios.ColumnCount} colunas`);
    
    let html = await HtmlParser.Parser(uruarios);
    //console.log(html);
    let now = Date.now();

    writer.writer(now + '.html', html);
    PdfWriter.generatePdf(now + '.pdf', html)
}

main();