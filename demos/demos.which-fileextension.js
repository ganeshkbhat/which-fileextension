/**
 * 
 * Package: which-fileextension
 * Author: Ganesh B
 * Description: 
 * Install: npm i which-fileextension --save
 * Github: https://github.com/ganeshkbhat/which-fileextension/
 * npmjs Link: https://www.npmjs.com/package/which-fileextension/
 * File: index.js
 * File Description: 
 * 
 * 
*/

/* eslint no-console: 0 */

'use strict';

const fs = require("fs");
const dr = require("../index.js");

let txt = fs.readFileSync("./demos/demos.which-fileextension.js");
let png = fs.readFileSync("./demos/img-black.png");
let jpeg = fs.readFileSync("./demos/img-red.jpg");
let gif = fs.readFileSync("./demos/img-yellow.gif");

// list of all textExtensions, binaryExtensions, scriptInjectionExtensions

// console.log(dr.textExtensions);
// console.log(dr.binaryExtensions);
// console.log(dr.scriptInjectionExtensions);

// detect

console.log(dr.detect("test/tester.jpg", dr.binaryExtensions), true) // true
console.log(dr.detect("test/tester.jpg", dr.textExtensions), false) // false

// isText

console.log(dr.isText("test/tester.txt"), true) // true
console.log(dr.isText("test/tester.txt", txt), true) // true

// isBinary

console.log(dr.isBinary("test/tester.exe"), true) // true
console.log(dr.isBinary("./demos/img-red.jpg", jpeg), true) // true
console.log(dr.isBinary("./demos/img-black.png", png), true) // true
console.log(dr.isBinary("./demos/img-yellow.gif", gif), true) // true


// detect

console.log(dr.detect("test/tester.jpg", dr.binaryExtensions), true) // true
console.log(dr.detect("test/tester.jpg", dr.textExtensions), false) // false
console.log(dr.detect("test/tester.jpg", ["gz", "txt", "jpg", "jpeg"]), true) // true`

// isExtension

console.log(dr.isExtension("test/tester.jpg", "jpg"), true) // true
console.log(dr.isExtension("test/tester.jpg", "txt"), false) // false
console.log(dr.isTextExtension("test/tester.txt"), true) // true
console.log(dr.isTextExtension("test/tester.jpeg"), false) // false

// isBinaryExtension

console.log(dr.isBinaryExtension("test/tester.jpeg"), true) // true
