
var fs = require("fs");

fs.readFile("./lorem.txt" , (err, data) => {
    if (err) {
        console.log("Error - READ FILE !");
    } else {
        console.log("Data file: \n", data.toString());
    }
} );