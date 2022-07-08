const fs = require('fs');
const util = require('util');

class Reader {

    constructor() {
        // transformado um callback em uma promise com promisify
        this.reader = util.promisify(fs.readFile);
    }

    async Reader(filepath) {
        try {
            return await this.reader(filepath, "utf-8");
        } catch (error) {
            return error;
        }
    }

//    sem promise nao consego pegar os dados
//     Reader(filepath) {
        
//         fs.readFile(filepath, "utf-8", (err, data) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log(data);
//             }
//         });
//     }

}

module.exports = Reader;