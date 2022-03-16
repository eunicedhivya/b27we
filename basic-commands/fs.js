const fs = require('fs');
const process = require('process');

// data = "Test";

// Read File
// ======================================
fs.readFile("./msg.txt","utf-8" ,(err, fileContent) => {
    if(err){
        console.error(err);
        return;
    }
    console.log(fileContent);
})

// Write File
// ======================================
// fs.writeFile("./names.txt", data, (err) => {
//     console.log("complete writing!!!");
// })

// Write Multiple Files
// ======================================
// const [a, b, noFiles] = process.argv;

// console.log(a, b);

// for(let i=0; i<noFiles; i++){
//     fs.writeFile("./backup/text-"+(i+1)+".txt", data, (err) => {
//         console.log("complete writing!!! File #"+(i+1));
//     })
// }
