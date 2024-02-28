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

// console.log(dr.textExtensions);
// console.log(dr.binaryExtensions);
console.log(dr.detect("test/tester.jpg", dr.binaryExtensions), true) // true
console.log(dr.detect("test/tester.jpg", dr.textExtensions), false) // false


console.log(dr.isText("test/tester.txt"), true) // true
console.log(dr.isBinary("test/tester.exe"), true) // true


console.log(dr.detect("test/tester.jpg", dr.binaryExtensions), true) // true
console.log(dr.detect("test/tester.jpg", dr.textExtensions), false) // false
console.log(dr.detect("test/tester.jpg", ["gz", "txt", "jpg", "jpeg"]), true) // true`
console.log(dr.isExtension("test/tester.jpg", "jpg"), true) // true
console.log(dr.isExtension("test/tester.jpg", "txt"), false) // false
console.log(dr.isTextExtension("test/tester.txt"), true) // true
console.log(dr.isTextExtension("test/tester.jpeg"), false) // false
console.log(dr.isBinaryExtension("test/tester.jpeg"), true) // true

