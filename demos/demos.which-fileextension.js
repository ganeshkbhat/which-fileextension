/**
 * 
 * Package: 
 * Author: Ganesh B
 * Description: 
 * Install: npm i  --save
 * Github: https://github.com/ganeshkbhat/which-fileextension
 * npmjs Link: https://www.npmjs.com/package/which-fileextension
 * File: index.js
 * File Description: 
 * 
*/
/* eslint no-console: 0 */

'use strict';

const dr = require("../index.js");

console.log(dr.textExtensions);
console.log(dr.binaryExtensions);
dr.detect("test/tester.jpg", dr.binaryExtensions) // true
dr.detect("test/tester.jpg", dr.textExtensions) // false


dr.isText("test/tester.txt") // true
dr.isBinary("test/tester.exe") // true


dr.detect("test/tester.jpg", dr.binaryExtensions) // true
dr.detect("test/tester.jpg", dr.textExtensions) // false
dr.detect("test/tester.jpg", ["gz", "txt", "jpg", "jpeg"]) // true`
dr.isExtension("test/tester.jpg", "jpg") // true
dr.isExtension("test/tester.jpg", "txt") // false
dr.isTextExtension("test/tester.txt") // true
dr.isTextExtension("test/tester.jpeg") // false
dr.isBinaryExtension("test/tester.jpeg") // true

