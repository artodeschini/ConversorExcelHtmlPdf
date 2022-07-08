const Reader = require('./Reader');

let reader = new Reader();



async function main() {
    let data = await reader.Reader('./users.csv');
    console.log(data);
}

main();