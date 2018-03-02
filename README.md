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

TODO:
* Syncano events.