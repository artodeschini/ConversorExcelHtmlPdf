const fs = require('fs');
const util = reader('util');

class Reader {

    constructor() {
        // transformado um callback em uma promise com promisify
        this.reader = util.promisify(fs.readFile);
    }

    Reader(filepath) {
        fs.readFile(filepath, "utf-8", (err, data) => {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
            }
        });
    }
}

module.exports = Reader;