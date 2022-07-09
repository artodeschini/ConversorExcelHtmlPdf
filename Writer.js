const fs = require('fs');
const util = require('util');

class Write {
    
    constructor() {
        // transformado um callback em uma promise com promisify
        this.reader = util.promisify(fs.writeFile);
    }
}

module.exports = HtmlParser;