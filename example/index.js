"use strict";

const writeFileP = require("../lib");

// Write a text file
writeFileP(`${__dirname}/foo/bar/output.txt`, "Hello World", (err, data) => {
    console.log(err || data);
});


// Write a json syncronously
writeFileP.sync(`${__dirname}/bar/bar/output.json`, {
    hello: "world"
});
// .
// ├── bar
// │   └── bar
// │       └── output.json
// └── foo
//     └── bar
//         └── output.txt
