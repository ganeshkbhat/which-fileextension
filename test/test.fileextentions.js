/**
 * 
 * Package: 
 * Author: Ganesh B
 * Description: 
 * Install: npm i  --save
 * Github: https://github.com/ganeshkbhat/detect-fileextension
 * npmjs Link: https://www.npmjs.com/package/detect-fileextension
 * File: index.js
 * File Description: 
 * 
*/
/* eslint no-console: 0 */

'use strict';

const fs = require("fs");
// const { describe, before, after } = require("mocha");
const { expect } = require("chai");

const {
  getEncoding,
  isText,
  isBinary,
  detect,
  isExtension,
  isTextExtension,
  isBinaryExtension,
  binaryExtensions,
  textExtensions
} = require("../index");


describe('[Parser tests] ', () => {

  before(() => {

  });

  after(() => {

  });

  it('should detect text file using extention', () => {
    expect(getEncoding("test/tester.txt")).to.deep.equal("UTF-8");
    expect(getEncoding("test/tester.xml")).to.deep.equal("UTF-8");
    expect(getEncoding("test/tester.ini")).to.deep.equal("UTF-8");
    expect(getEncoding("test/tester.yaml")).to.deep.equal("UTF-8");
    expect(getEncoding("test/tester.csv")).to.deep.equal("UTF-8");
    expect(getEncoding("test/tester.json")).to.deep.equal("UTF-8");
  });

  it('should detect text file using buffer', () => {
    expect(getEncoding("test/tester.jpg")).to.deep.equal(expected);
    expect(getEncoding("test/tester.jpg")).to.deep.equal(expected);
    expect(getEncoding("test/tester.jpg")).to.deep.equal(expected);
    expect(getEncoding("test/tester.jpg")).to.deep.equal(expected);
    expect(getEncoding("test/tester.jpg")).to.deep.equal(expected);
    expect(getEncoding("test/tester.jpg")).to.deep.equal(expected);
  });

  it('should detect binary file using extention', () => {
    expect(getEncoding("test/tester.txt")).to.deep.equal(expected);
    expect(getEncoding("test/tester.jpg")).to.deep.equal(expected);
    expect(getEncoding("test/tester.jpg")).to.deep.equal(expected);
    expect(getEncoding("test/tester.jpg")).to.deep.equal(expected);
    expect(getEncoding("test/tester.jpg")).to.deep.equal(expected);
    expect(getEncoding("test/tester.jpg")).to.deep.equal(expected);
  });

  it('should detect binary file using buffer', () => {
    expect(getEncoding("test/tester.jpg")).to.deep.equal(expected);
    expect(getEncoding("test/tester.jpg")).to.deep.equal(expected);
    expect(getEncoding("test/tester.jpg")).to.deep.equal(expected);
    expect(getEncoding("test/tester.jpg")).to.deep.equal(expected);
    expect(getEncoding("test/tester.jpg")).to.deep.equal(expected);
    expect(getEncoding("test/tester.jpg")).to.deep.equal(expected);
  });

  it('should detect text file using extention', () => {
    expect(isText("test/tester.jpg")).to.deep.equal(expected);
    expect(isText("test/tester.jpg")).to.deep.equal(expected);
    expect(isText("test/tester.jpg")).to.deep.equal(expected);
    expect(isText("test/tester.jpg")).to.deep.equal(expected);
    expect(isText("test/tester.jpg")).to.deep.equal(expected);
    expect(isText("test/tester.jpg")).to.deep.equal(expected);
  });

  it('should detect text file using buffer', () => {
    expect(isText("test/tester.jpg")).to.deep.equal(expected);
    expect(isText("test/tester.jpg")).to.deep.equal(expected);
    expect(isText("test/tester.jpg")).to.deep.equal(expected);
    expect(isText("test/tester.jpg")).to.deep.equal(expected);
    expect(isText("test/tester.jpg")).to.deep.equal(expected);
    expect(isText("test/tester.jpg")).to.deep.equal(expected);
  });

  it('should detect binary file using extention', () => {
    expect(isBinary("test/tester.jpg")).to.deep.equal(expected);
    expect(isBinary("test/tester.jpg")).to.deep.equal(expected);
    expect(isBinary("test/tester.jpg")).to.deep.equal(expected);
    expect(isBinary("test/tester.jpg")).to.deep.equal(expected);
    expect(isBinary("test/tester.jpg")).to.deep.equal(expected);
    expect(isBinary("test/tester.jpg")).to.deep.equal(expected);
  });

  it('should detect bonary file using buffer', () => {
    expect(isBinary("test/tester.jpg")).to.deep.equal(expected);
    expect(isBinary("test/tester.jpg")).to.deep.equal(expected);
    expect(isBinary("test/tester.jpg")).to.deep.equal(expected);
    expect(isBinary("test/tester.jpg")).to.deep.equal(expected);
    expect(isBinary("test/tester.jpg")).to.deep.equal(expected);
    expect(isBinary("test/tester.jpg")).to.deep.equal(expected);
  });

  it('should detect text file using provided extentions', () => {
    const expected = true;
    expect(detect("test/tester.jpg", textExtensions)).to.deep.equal(expected);
    expect(detect("test/tester.jpg", textExtensions)).to.deep.equal(expected);
    expect(detect("test/tester.jpg", textExtensions)).to.deep.equal(expected);
    expect(detect("test/tester.jpg", textExtensions)).to.deep.equal(expected);
    expect(detect("test/tester.jpg", textExtensions)).to.deep.equal(expected);
    expect(detect("test/tester.jpg", textExtensions)).to.deep.equal(expected);
    expect(detect("test/tester.jpg", textExtensions)).to.deep.equal(expected);
    expect(detect("test/tester.jpg", textExtensions)).to.deep.equal(expected);
    expect(detect("test/tester.jpg", textExtensions)).to.deep.equal(expected);
    expect(detect("test/tester.jpg", textExtensions)).to.deep.equal(expected);
    expect(detect("test/tester.jpg", textExtensions)).to.deep.equal(expected);
    expect(detect("test/tester.jpg", textExtensions)).to.deep.equal(expected);
  });

  it('should detect binary file using provided extentions', () => {
    const expected = true;
    expect(detect("test/tester.jpg", binaryExtensions)).to.deep.equal(expected);
    expect(detect("test/tester.jpg", binaryExtensions)).to.deep.equal(expected);
    expect(detect("test/tester.jpg", binaryExtensions)).to.deep.equal(expected);
    expect(detect("test/tester.jpg", binaryExtensions)).to.deep.equal(expected);
    expect(detect("test/tester.jpg", binaryExtensions)).to.deep.equal(expected);
    expect(detect("test/tester.jpg", binaryExtensions)).to.deep.equal(expected);
    expect(detect("test/tester.jpg", binaryExtensions)).to.deep.equal(expected);
    expect(detect("test/tester.jpg", binaryExtensions)).to.deep.equal(expected);
    expect(detect("test/tester.jpg", binaryExtensions)).to.deep.equal(expected);
    expect(detect("test/tester.jpg", binaryExtensions)).to.deep.equal(expected);
    expect(detect("test/tester.jpg", binaryExtensions)).to.deep.equal(expected);
    expect(detect("test/tester.jpg", binaryExtensions)).to.deep.equal(expected);
  });

  it('should detect any file using provided extentions', () => {
    const expected = true;
    expect(detect("test/tester.jpg", [...textExtensions, ...binaryExtensions])).to.deep.equal(expected);
    expect(detect("test/tester.jpg", [...textExtensions, ...binaryExtensions])).to.deep.equal(expected);
    expect(detect("test/tester.jpg", [...textExtensions, ...binaryExtensions])).to.deep.equal(expected);
    expect(detect("test/tester.jpg", [...textExtensions, ...binaryExtensions])).to.deep.equal(expected);
    expect(detect("test/tester.jpg", [...textExtensions, ...binaryExtensions])).to.deep.equal(expected);
    expect(detect("test/tester.jpg", [...textExtensions, ...binaryExtensions])).to.deep.equal(expected);
    expect(detect("test/tester.jpg", [...textExtensions, ...binaryExtensions])).to.deep.equal(expected);
    expect(detect("test/tester.jpg", [...textExtensions, ...binaryExtensions])).to.deep.equal(expected);
    expect(detect("test/tester.jpg", [...textExtensions, ...binaryExtensions])).to.deep.equal(expected);
    expect(detect("test/tester.jpg", [...textExtensions, ...binaryExtensions])).to.deep.equal(expected);
    expect(detect("test/tester.jpg", [...textExtensions, ...binaryExtensions])).to.deep.equal(expected);
    expect(detect("test/tester.jpg", [...textExtensions, ...binaryExtensions])).to.deep.equal(expected);
  });

  it('should detect file type using provided custom extentions array', () => {
    const expected = true;
    expect(detect("test/tester.jpg", ["gz", "txt", "jpg", "jpeg"])).to.deep.equal(expected);
    expect(detect("test/tester.jpg", ["gz", "txt", "jpg", "jpeg"])).to.deep.equal(expected);
    expect(detect("test/tester.jpg", ["gz", "txt", "jpg", "jpeg"])).to.deep.equal(expected);
    expect(detect("test/tester.jpg", ["gz", "txt", "jpg", "jpeg"])).to.deep.equal(expected);
    expect(detect("test/tester.jpg", ["gz", "txt", "jpg", "jpeg"])).to.deep.equal(expected);
    expect(detect("test/tester.jpg", ["gz", "txt", "jpg", "jpeg"])).to.deep.equal(expected);
    expect(detect("test/tester.jpg", ["gz", "txt", "jpg", "jpeg"])).to.deep.equal(expected);
    expect(detect("test/tester.jpg", ["gz", "txt", "jpg", "jpeg"])).to.deep.equal(expected);
    expect(detect("test/tester.jpg", ["gz", "txt", "jpg", "jpeg"])).to.deep.equal(expected);
    expect(detect("test/tester.jpg", ["gz", "txt", "jpg", "jpeg"])).to.deep.equal(expected);
    expect(detect("test/tester.jpg", ["gz", "txt", "jpg", "jpeg"])).to.deep.equal(expected);
    expect(detect("test/tester.jpg", ["gz", "txt", "jpg", "jpeg"])).to.deep.equal(expected);
  });

  it('should detect text file using isExtension', () => {
    const expected = true;
    expect(isExtension("test/tester.txt", "txt")).to.deep.equal(expected);
    expect(isExtension("test/tester.ini", "ini")).to.deep.equal(expected);
    expect(isExtension("test/tester.yaml", "yaml")).to.deep.equal(expected);
    expect(isExtension("test/tester.yml", "yml")).to.deep.equal(expected);
    expect(isExtension("test/tester.php", "php")).to.deep.equal(expected);
    expect(isExtension("test/tester.asp", "asp")).to.deep.equal(expected);
    expect(isExtension("test/tester.aspx", "apsx")).to.deep.equal(expected);
    expect(isExtension("test/tester.jsp", "jsp")).to.deep.equal(expected);
    expect(isExtension("test/tester.xml", "xml")).to.deep.equal(expected);
    expect(isExtension("test/tester.csv", "csv")).to.deep.equal(expected);
    expect(isExtension("test/tester.json", "json")).to.deep.equal(expected);
    expect(isExtension("test/tester.asp", "asp")).to.deep.equal(expected);
  });

  it('should detect binary file using isExtension', () => {
    const expected = true;
    expect(isExtension("test/tester.zip", "zip")).to.deep.equal(expected);
    expect(isExtension("test/tester.tar", "tar")).to.deep.equal(expected);
    expect(isExtension("test/tester.xz", "xz")).to.deep.equal(expected);
    expect(isExtension("test/tester.exe", "exe")).to.deep.equal(expected);
    expect(isExtension("test/tester.mp3", "mp3")).to.deep.equal(expected);
    expect(isExtension("test/tester.mp4", "mp4")).to.deep.equal(expected);
    expect(isExtension("test/tester.wav", "wav")).to.deep.equal(expected);
    expect(isExtension("test/tester.a", "a")).to.deep.equal(expected);
    expect(isExtension("test/tester.so", "so")).to.deep.equal(expected);
    expect(isExtension("test/tester.lib", "lib")).to.deep.equal(expected);
    expect(isExtension("test/tester.bin", "bin")).to.deep.equal(expected);
    expect(isExtension("test/tester.epub", "epub")).to.deep.equal(expected);
  });

  it('should detect text file using isTextExtension', () => {
    const expected = true;
    expect(isTextExtension("test/tester.txt")).to.deep.equal(expected);
    expect(isTextExtension("test/tester.ini")).to.deep.equal(expected);
    expect(isTextExtension("test/tester.yaml")).to.deep.equal(expected);
    expect(isTextExtension("test/tester.yml")).to.deep.equal(expected);
    expect(isTextExtension("test/tester.php")).to.deep.equal(expected);
    expect(isTextExtension("test/tester.asp")).to.deep.equal(expected);
    expect(isTextExtension("test/tester.aspx")).to.deep.equal(expected);
    expect(isTextExtension("test/tester.jsp")).to.deep.equal(expected);
    expect(isTextExtension("test/tester.xml")).to.deep.equal(expected);
    expect(isTextExtension("test/tester.csv")).to.deep.equal(expected);
    expect(isTextExtension("test/tester.json")).to.deep.equal(expected);
    expect(isTextExtension("test/tester.asp")).to.deep.equal(expected);
  });

  it('should detect binary file using isTextExtension', () => {
    const expected = true;
    expect(isTextExtension("test/tester.zip")).to.deep.equal(expected);
    expect(isTextExtension("test/tester.tar")).to.deep.equal(expected);
    expect(isTextExtension("test/tester.xz")).to.deep.equal(expected);
    expect(isTextExtension("test/tester.exe")).to.deep.equal(expected);
    expect(isTextExtension("test/tester.mp3")).to.deep.equal(expected);
    expect(isTextExtension("test/tester.mp4")).to.deep.equal(expected);
    expect(isTextExtension("test/tester.wav")).to.deep.equal(expected);
    expect(isTextExtension("test/tester.a")).to.deep.equal(expected);
    expect(isTextExtension("test/tester.so")).to.deep.equal(expected);
    expect(isTextExtension("test/tester.lib")).to.deep.equal(expected);
    expect(isTextExtension("test/tester.bin")).to.deep.equal(expected);
    expect(isTextExtension("test/tester.epub")).to.deep.equal(expected);
  });

  it('should detect text file using isBinaryExtension', () => {
    const expected = true;
    expect(isBinaryExtension("test/tester.txt")).to.deep.equal(expected);
    expect(isBinaryExtension("test/tester.ini")).to.deep.equal(expected);
    expect(isBinaryExtension("test/tester.yaml")).to.deep.equal(expected);
    expect(isBinaryExtension("test/tester.yml")).to.deep.equal(expected);
    expect(isBinaryExtension("test/tester.php")).to.deep.equal(expected);
    expect(isBinaryExtension("test/tester.asp")).to.deep.equal(expected);
    expect(isBinaryExtension("test/tester.aspx")).to.deep.equal(expected);
    expect(isBinaryExtension("test/tester.jsp")).to.deep.equal(expected);
    expect(isBinaryExtension("test/tester.xml")).to.deep.equal(expected);
    expect(isBinaryExtension("test/tester.csv")).to.deep.equal(expected);
    expect(isBinaryExtension("test/tester.json")).to.deep.equal(expected);
    expect(isBinaryExtension("test/tester.asp")).to.deep.equal(expected);
  });

  it('should detect binary file using isBinaryExtension', () => {
    expect(isBinaryExtension("test/tester.zip")).to.deep.equal(expected);
    expect(isBinaryExtension("test/tester.tar")).to.deep.equal(expected);
    expect(isBinaryExtension("test/tester.xz")).to.deep.equal(expected);
    expect(isBinaryExtension("test/tester.exe")).to.deep.equal(expected);
    expect(isBinaryExtension("test/tester.mp3")).to.deep.equal(expected);
    expect(isBinaryExtension("test/tester.mp4")).to.deep.equal(expected);
    expect(isBinaryExtension("test/tester.wav")).to.deep.equal(expected);
    expect(isBinaryExtension("test/tester.a")).to.deep.equal(expected);
    expect(isBinaryExtension("test/tester.so")).to.deep.equal(expected);
    expect(isBinaryExtension("test/tester.lib")).to.deep.equal(expected);
    expect(isBinaryExtension("test/tester.bin")).to.deep.equal(expected);
    expect(isBinaryExtension("test/tester.epub")).to.deep.equal(expected);
  });

});
