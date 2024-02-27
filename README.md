# detect-fileextensions

detect if a file extension is text/ binary or file is text/ binary

* detect file extensions 
* check your file extension using provided string or array
* check if file is part of list of extension
* detect file extension is text
* detect file extension is binary
* detect if file is text
* detect if file is binary


### USAGE


`detect`, `isExtension`, `isTextExtension`, `isBinaryExtension`, 

```

const dr = require("detect-fileextensions");

dr.detect("test/tester.jpg", dr.binaryExtensions) // true
dr.detect("test/tester.jpg", dr.textExtensions) // false
dr.detect("test/tester.jpg", ["gz", "txt", "jpg", "jpeg"]) // true
dr.isExtension("test/tester.jpg", "jpg") // true
dr.isExtension("test/tester.jpg", "txt") // false
dr.isTextExtension("test/tester.txt") // true
dr.isTextExtension("test/tester.jpeg") // false
dr.isBinaryExtension("test/tester.jpeg") // true

```


`getEncoding`, `isText`, `isBinary`

```

const dr = require("detect-fileextensions");

dr.getEncoding("test/tester.txt") // UTF-8
dr.isText("test/tester.txt") // true
dr.isBinary("test/tester.exe") // true

```


`binaryExtensions`, `textExtensions`

```

const dr = require("detect-fileextensions");

console.log(dr.textExtensions);
console.log(dr.binaryExtensions);
dr.detect("test/tester.jpg", dr.binaryExtensions) // true
dr.detect("test/tester.jpg", dr.textExtensions) // false

```

### Credits and References:

[binaryextensions](https://www.npmjs.com/package/binaryextensions)
[textextensions](https://www.npmjs.com/package/textextensions)
[istextorbinary](https://www.npmjs.com/package/istextorbinary)

