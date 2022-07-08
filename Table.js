class Table {

    constructor(arr) {
        this.header = arr[0];
        // shift é uma funcao de array que remove o primeiro elemento
        arr.shift();
        // assim posso colocar o arr em rows
        this.rows = arr;
    }

    // para usar get obrigatoriamente tem que retornar alguma coisa
    // com isso posso usar como um atributo virtual
    get RowCount() {
        return this.rows.length;
    }

    get ColumnCount() {
        return this.header.length;
    }
}

module.exports = Table;