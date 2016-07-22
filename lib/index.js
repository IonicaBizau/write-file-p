"use strict";

const mkdirp = require("mkdirp")
    , fs = require("fs")
    , abs = require("abs")
    , typpy = require("typpy")
    , path = require("path")
    ;

/**
 * writeFileP
 * Create the directory structure and then create the file.
 *
 * @name writeFileP
 * @function
 * @param {String} outputPath The path to the file you want to create.
 * @param {String|Object} data The file content. If an Array/Object is provided, it will be stringified.
 * @param {Function} cb The callback function.
 */
function writeFileP (outputPath, data, cb) {
    outputPath = abs(outputPath);
    let dirname = path.dirname(outputPath);
    mkdirp(dirname, err => {
        if (err) { return cb(err); }
        let str = data;
        if (typpy(data, Array) || typpy(data, Object)) {
            str = JSON.stringify(data, null, 2);
        }
        fs.writeFile(outputPath, data, err => cb(err, data));
    });
}

/**
 * writeFileP.sync
 * The sync version of the function.
 *
 * @name writeFileP.sync
 * @function
 * @param {String} outputPath The path to the file you want to create.
 * @param {String|Object} data The file content. If an Array/Object is provided, it will be stringified.
 * @returns {String|Object} The content written in the file. If an object was provided, the stringified version will *not* be returned but the raw value.
 */
writeFileP.sync = (outputPath, data) => {
    outputPath = abs(outputPath);
    let dirname = path.dirname(outputPath);
    mkdirp.sync(dirname);
    let str = data;
    if (typpy(data, Array) || typpy(data, Object)) {
        str = JSON.stringify(data, null, 2);
    }
    fs.writeFileSync(outputPath, str);
    return data;
};

module.exports = writeFileP;
