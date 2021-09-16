// Module for creating, appending, reading, and deleting a file
"use strict";

const fs = require("fs");

// Function to create a new file
const createFile = (fileName, fileContent) => {
        //Write the file
        fs.writeSync(fileName, fileContent);
}

const appendFile = (fileName, fileContent) => {
    fs.appendFileSync(fileName, fileContent);
}

//Export the file functions for other modules to use
module.exports.create = createFile;
module.exports.append = appendFile;