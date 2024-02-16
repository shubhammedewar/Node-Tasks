const fs = require('fs')

const read = fs.readFileSync('/FSWD/Tasks js/node_task/nodeJS_architecture.txt');
console.log(read.toString());

fs.appendFileSync('E:/FSWD/Tasks js/node_task/nodeJS_architecture.txt','\nEND of assignement 4(1)');
fs.appendFile('E:/FSWD/Tasks js/node_task/nodeJS_architecture.txt','\nEND of assignement 4',function(){
    console.log("The file has been appended");
});

fs.unlink('E:/FSWD/Tasks js/node_task/nodeJS_architecture.txt',function(){
    console.log('File deleted successfully');
})