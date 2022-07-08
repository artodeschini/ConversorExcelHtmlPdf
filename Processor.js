class Processor {

    static Process(data) {
        let content = data.split("\n"); // separa por quebra de linha
        var rows = [];
        
        content.forEach(row => {
            rows.push(row.split(','));
        });

        return rows;
    }
}

module.exports = Processor;