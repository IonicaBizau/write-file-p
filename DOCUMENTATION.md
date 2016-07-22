## Documentation

You can see below the API reference of this module.

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

