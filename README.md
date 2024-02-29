# which-fileextension

detect if a file extension is text/ binary or file is text/ binary. uses the `file.ext` and the `file.ext.exttwo` detection pattern structure

* detect file extensions 
* detect if one of many possible script injection files
* check your file extension using provided string or array
* check if file is part of list of extension
* detect file extension is text
* detect file extension is binary
* detect if file is text
* detect if file is binary


### USAGE


`detect`, `isExtension`, `isTextExtension`, `isBinaryExtension`, 

```

const {
  textExtensions, 
  binaryExtensions, 
  scriptInjectionExtensions,
  detect, isExtension, 
  isTextExtension, isBinaryExtension, 
  isText, isBinary
} = require("which-fileextension");

```

// list of all textExtensions, binaryExtensions, scriptInjectionExtensions

```

const dr = require("which-fileextension");

// console.log(dr.textExtensions);
// console.log(dr.binaryExtensions);
// console.log(dr.scriptInjectionExtensions);

```

// detect

```

const dr = require("which-fileextension");

console.log(dr.detect("test/tester.jpg", dr.binaryExtensions), true) // true
console.log(dr.detect("test/tester.jpg", dr.textExtensions), false) // false

```

// isText

```

const dr = require("which-fileextension");

console.log(dr.isText("test/tester.txt"), true) // true
console.log(dr.isText("test/tester.txt", txt), true) // true

```

// isBinary

```

const dr = require("which-fileextension");
const fs = require("fs");

let txt = fs.readFileSync("./demos/demos.which-fileextension.js");
let png = fs.readFileSync("./demos/img-black.png");
let jpeg = fs.readFileSync("./demos/img-red.jpg");
let gif = fs.readFileSync("./demos/img-yellow.gif");

console.log(dr.isBinary("test/tester.exe"), true) // true
console.log(dr.isBinary("./demos/img-red.jpg", jpeg), true) // true
console.log(dr.isBinary("./demos/img-black.png", png), true) // true
console.log(dr.isBinary("./demos/img-yellow.gif", gif), true) // true

```

// detect

```

const dr = require("which-fileextension");

console.log(dr.detect("test/tester.jpg", dr.binaryExtensions), true) // true
console.log(dr.detect("test/tester.jpg", dr.textExtensions), false) // false
console.log(dr.detect("test/tester.jpg", ["gz", "txt", "jpg", "jpeg"]), true) // true`

```

// isExtension

```

const dr = require("which-fileextension");

console.log(dr.isExtension("test/tester.jpg", "jpg"), true) // true
console.log(dr.isExtension("test/tester.jpg", "txt"), false) // false
console.log(dr.isTextExtension("test/tester.txt"), true) // true
console.log(dr.isTextExtension("test/tester.jpeg"), false) // false

```

// isBinaryExtension

```

const dr = require("which-fileextension");
console.log(dr.isBinaryExtension("test/tester.jpeg"), true) // true

```

### Credits and References:

[binaryextensions](https://www.npmjs.com/package/binaryextensions)
[textextensions](https://www.npmjs.com/package/textextensions)
[istextorbinary](https://www.npmjs.com/package/istextorbinary)

