
# write-file-p

 [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/write-file-p.svg)](https://www.npmjs.com/package/write-file-p) [![Downloads](https://img.shields.io/npm/dt/write-file-p.svg)](https://www.npmjs.com/package/write-file-p) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Create the directory structure and then create the file.

## :cloud: Installation

```sh
$ npm i --save write-file-p
```


## :clipboard: Example



```js
const writeFileP = require("write-file-p");

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
```

## :memo: Documentation


### `writeFileP(outputPath, data, cb)`
Create the directory structure and then create the file.

#### Params
- **String** `outputPath`: The path to the file you want to create.
- **String|Object** `data`: The file content. If an Array/Object is provided, it will be stringified.
- **Function** `cb`: The callback function.

### `writeFileP.sync(outputPath, data)`
The sync version of the function.

#### Params
- **String** `outputPath`: The path to the file you want to create.
- **String|Object** `data`: The file content. If an Array/Object is provided, it will be stringified.

#### Return
- **String|Object** The content written in the file. If an object was provided, the stringified version will *not* be returned but the raw value.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md