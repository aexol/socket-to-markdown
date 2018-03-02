# socket-to-markdown

Analyze socket.yml in current directory and print to `stdout` markdown with socket documentation.

## Installation

```
$ npm install --save-dev @aexol/socket-to-markdown
```

## Usage

Just add this to your socket's package.json
```json
{
    ...
    "scripts": {
        ...
        "docs": "socket2md > README.md; echo"
        ...
    },
    ...
}
```

and then run
```sh
$ npm run docs
```

## Built in partials

* class-row
* classes-index
* classes
* config-index
* config
* endpoint
* endpoints-index
* endpoints
* events
* index
* main
* parameter
* parameters
* parameters-block
* parameters-table

## Extra partial

You can add any handlebars template file as partial template.

## Built in helpers

* socket - Get socket object
* classes - Get classes obejct
* config - Get config object
* endpoints - Get endpoints obejct
* events - Get events object
* parameters - Get parameters for current endpoint
* parameters-table - Create param table for current endpoint
* reference-type - True if class type is reference or relation.

## Extra helpers
Just add javascript file exporting simple function, for example:
```javascript
module.exports = (context, options) => {
    let out = 'HEADER!!!!\n'
    out += options.fn(this)
    out += 'FOOTER!!!\n'
    return out:
}
```

TODO:
* Syncano events.