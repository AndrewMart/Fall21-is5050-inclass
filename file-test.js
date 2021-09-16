"use strict";

//import the node file system module
const fs = require("fs");

// Write a file with initial content
try {
    fs.writeFileSync('hello.txt', 'Hello World!');

    // Append additional content to the file
    fs.appendFileSync("hello.txt", "\nThis file was created with Node.js");
    
    console.log(fs.readFileSync('./hello.txt',"utf-8",'r'));
    fs.unlinkSync("hello.txt");
}
catch (error) {
    console.log("Oops! Something bad happened, probably because of something you did.", error.message);
}

