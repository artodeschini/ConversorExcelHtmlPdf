const fs = require('fs');
const util = require('util');

class Write {
    
    constructor() {
        // transformado um callback em uma promise com promisify
        this.write = util.promisify(fs.writeFile);
    }

    async writer(filename, data) {
        try {
            await this.write(filename, data);
            return false;
        } catch (error) {
            return false;
        }
    }
}

module.exports = Write;