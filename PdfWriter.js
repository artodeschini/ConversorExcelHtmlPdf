const pdf = require('html-pdf');

class PdfWriter {
    static generatePdf(filename, html) {
        pdf.create(html, {}).toFile(filename, (err) => {
            console.log(`Erro ao gerar arquivo pdf ${err}`);
        });
    }
}

module.exports = PdfWriter;