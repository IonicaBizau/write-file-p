
# write-file-p

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Version](https://img.shields.io/npm/v/write-file-p.svg)](https://www.npmjs.com/package/write-file-p) [![Downloads](https://img.shields.io/npm/dt/write-file-p.svg)](https://www.npmjs.com/package/write-file-p)

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


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the projects you like :rocket:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)

Thanks! :heart:


## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`bloggify-tools`](https://github.com/Bloggify/bloggify-tools)—Interactive command line tool to help you win at Bloggify.
 - [`reactgen`](https://github.com/CynderTech/reactgen#readme) (by June Domingo)—React Component Generator
 - [`reactgen-native`](https://github.com/JuneDomingo/reactgen-native#readme) (by June Domingo)—React-native Component Generator
 - [`tester-init`](https://github.com/IonicaBizau/tester-init#readme)—Init tests for tester.
 - [`tilda-init`](https://github.com/IonicaBizau/tilda-init#readme)—Init cli applications.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[badge_patreon]: http://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: http://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: http://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: http://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
