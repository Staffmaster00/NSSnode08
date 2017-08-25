const fs = require('fs')
fs.readFile('08.json', (err,data)=>{
    if (err) throw err;
    console.log(`data`, data.toString());
});