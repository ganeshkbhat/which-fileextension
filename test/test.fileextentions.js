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


describe('[which-fileextension tests] detect which file extension is of a file using file name or file buffers', () => {

  before(() => {

  });

  after(() => {

  });

  // it('should detect text file using extention', () => {
  //   expect(getEncoding("addbufferhere.txt")).to.deep.equal("UTF-8");
  //   expect(getEncoding("addbufferhere.xml")).to.deep.equal("UTF-8");
  //   expect(getEncoding("addbufferhere.ini")).to.deep.equal("UTF-8");
  //   expect(getEncoding("addbufferhere.yaml")).to.deep.equal("UTF-8");
  //   expect(getEncoding("addbufferhere.csv")).to.deep.equal("UTF-8");
  //   expect(getEncoding("addbufferhere.json")).to.deep.equal("UTF-8");
  // });

  // it('should detect text file using buffer', () => {
  //   expect(getEncoding("addbufferhere.jpg")).to.deep.equal(expected);
  //   expect(getEncoding("addbufferhere.jpg")).to.deep.equal(expected);
  //   expect(getEncoding("addbufferhere.jpg")).to.deep.equal(expected);
  //   expect(getEncoding("addbufferhere.jpg")).to.deep.equal(expected);
  //   expect(getEncoding("addbufferhere.jpg")).to.deep.equal(expected);
  //   expect(getEncoding("addbufferhere.jpg")).to.deep.equal(expected);
  // });

  // it('should detect binary file using extention', () => {
  //   expect(getEncoding("addbufferhere.txt")).to.deep.equal(expected);
  //   expect(getEncoding("addbufferhere.jpg")).to.deep.equal(expected);
  //   expect(getEncoding("addbufferhere.jpg")).to.deep.equal(expected);
  //   expect(getEncoding("addbufferhere.jpg")).to.deep.equal(expected);
  //   expect(getEncoding("addbufferhere.jpg")).to.deep.equal(expected);
  //   expect(getEncoding("addbufferhere.jpg")).to.deep.equal(expected);
  // });

  // it('should detect binary file using buffer', () => {
  //   expect(getEncoding("addbufferhere.jpg")).to.deep.equal(expected);
  //   expect(getEncoding("addbufferhere.jpg")).to.deep.equal(expected);
  //   expect(getEncoding("addbufferhere.jpg")).to.deep.equal(expected);
  //   expect(getEncoding("addbufferhere.jpg")).to.deep.equal(expected);
  //   expect(getEncoding("addbufferhere.jpg")).to.deep.equal(expected);
  //   expect(getEncoding("addbufferhere.jpg")).to.deep.equal(expected);
  // });

  it('should detect text file using extention', () => {
    const expected = true;
    expect(isText("test/tester.txt")).to.deep.equal(expected);
    expect(isText("test/tester.ini")).to.deep.equal(expected);
    expect(isText("test/tester.yaml")).to.deep.equal(expected);
    expect(isText("test/tester.xml")).to.deep.equal(expected);
    expect(isText("test/tester.html")).to.deep.equal(expected);
    expect(isText("test/tester.json")).to.deep.equal(expected);
    expect(isText("test/tester.csv")).to.deep.equal(expected);
    expect(isText("test/tester.jpg")).to.deep.equal(!expected);
    expect(isText("test/tester.jpeg")).to.deep.equal(!expected);
    expect(isText("test/tester.mp3")).to.deep.equal(!expected);
    expect(isText("test/tester.mp4")).to.deep.equal(!expected);
    expect(isText("test/tester.wav")).to.deep.equal(!expected);
    expect(isText("test/tester.zip")).to.deep.equal(!expected);
    expect(isText("test/tester.gz")).to.deep.equal(!expected);
  });

  // it('should detect text file using buffer', () => {
  //   expect(isText("test/tester.jpg")).to.deep.equal(expected);
  //   expect(isText("test/tester.jpg")).to.deep.equal(expected);
  //   expect(isText("test/tester.jpg")).to.deep.equal(expected);
  //   expect(isText("test/tester.jpg")).to.deep.equal(expected);
  //   expect(isText("test/tester.jpg")).to.deep.equal(expected);
  //   expect(isText("test/tester.jpg")).to.deep.equal(expected);
  // });

  it('should detect binary file using extention', () => {
    const expected = true;
    expect(isBinary("test/tester.txt")).to.deep.equal(!expected);
    expect(isBinary("test/tester.ini")).to.deep.equal(!expected);
    expect(isBinary("test/tester.yaml")).to.deep.equal(!expected);
    expect(isBinary("test/tester.xml")).to.deep.equal(!expected);
    expect(isBinary("test/tester.html")).to.deep.equal(!expected);
    expect(isBinary("test/tester.json")).to.deep.equal(!expected);
    expect(isBinary("test/tester.csv")).to.deep.equal(!expected);
    expect(isBinary("test/tester.jpg")).to.deep.equal(expected);
    expect(isBinary("test/tester.jpeg")).to.deep.equal(expected);
    expect(isBinary("test/tester.mp3")).to.deep.equal(expected);
    expect(isBinary("test/tester.mp4")).to.deep.equal(expected);
    expect(isBinary("test/tester.wav")).to.deep.equal(expected);
    expect(isBinary("test/tester.zip")).to.deep.equal(expected);
    expect(isBinary("test/tester.gz")).to.deep.equal(expected);
    expect(isBinary("test/tester.xz")).to.deep.equal(expected);
    expect(isBinary("test/tester.flv")).to.deep.equal(expected);
    expect(isBinary("test/tester.xls")).to.deep.equal(expected);
    expect(isBinary("test/tester.odt")).to.deep.equal(expected);
    expect(isBinary("test/tester.doc")).to.deep.equal(expected);
    expect(isBinary("test/tester.docx")).to.deep.equal(expected);
    expect(isBinary("test/tester.exe")).to.deep.equal(expected);
    expect(isBinary("test/tester.bin")).to.deep.equal(expected);
  });

  // it('should detect binary file using buffer', () => {
  //   const expected = true;
  //   expect(isBinary("test/tester.txt", )).to.deep.equal(!expected);
  //   expect(isBinary("test/tester.ini", )).to.deep.equal(!expected);
  //   expect(isBinary("test/tester.yaml", )).to.deep.equal(!expected);
  //   expect(isBinary("test/tester.xml", )).to.deep.equal(!expected);
  //   expect(isBinary("test/tester.html", )).to.deep.equal(!expected);
  //   expect(isBinary("test/tester.json", )).to.deep.equal(!expected);
  //   expect(isBinary("test/tester.csv", )).to.deep.equal(!expected);
  //   expect(isBinary("test/tester.jpg", )).to.deep.equal(expected);
  //   expect(isBinary("test/tester.jpeg", )).to.deep.equal(expected);
  //   expect(isBinary("test/tester.mp3", )).to.deep.equal(expected);
  //   expect(isBinary("test/tester.mp4", )).to.deep.equal(expected);
  //   expect(isBinary("test/tester.wav", )).to.deep.equal(expected);
  //   expect(isBinary("test/tester.zip", )).to.deep.equal(expected);
  //   expect(isBinary("test/tester.gz", )).to.deep.equal(expected);
  //   expect(isBinary("test/tester.xz", )).to.deep.equal(expected);
  //   expect(isBinary("test/tester.flv", )).to.deep.equal(expected);
  //   expect(isBinary("test/tester.xls", )).to.deep.equal(expected);
  //   expect(isBinary("test/tester.odt", )).to.deep.equal(expected);
  //   expect(isBinary("test/tester.doc", )).to.deep.equal(expected);
  //   expect(isBinary("test/tester.docx", )).to.deep.equal(expected);
  //   expect(isBinary("test/tester.exe", )).to.deep.equal(expected);
  //   expect(isBinary("test/tester.bin", )).to.deep.equal(expected);
  // });

  it('should detect text file using provided extentions', () => {
    const expected = true;
    expect(detect("test/tester.txt", textExtensions)).to.deep.equal(expected);
    expect(detect("test/tester.ini", textExtensions)).to.deep.equal(expected);
    expect(detect("test/tester.yaml", textExtensions)).to.deep.equal(expected);
    expect(detect("test/tester.xml", textExtensions)).to.deep.equal(expected);
    expect(detect("test/tester.html", textExtensions)).to.deep.equal(expected);
    expect(detect("test/tester.json", textExtensions)).to.deep.equal(expected);
    expect(detect("test/tester.csv", textExtensions)).to.deep.equal(expected);
  });

  it('should detect binary file using provided extentions', () => {
    const expected = true;
    expect(detect("test/tester.jpg", binaryExtensions)).to.deep.equal(expected);
    expect(detect("test/tester.jpeg", binaryExtensions)).to.deep.equal(expected);
    expect(detect("test/tester.mp3", binaryExtensions)).to.deep.equal(expected);
    expect(detect("test/tester.mp4", binaryExtensions)).to.deep.equal(expected);
    expect(detect("test/tester.wav", binaryExtensions)).to.deep.equal(expected);
    expect(detect("test/tester.zip", binaryExtensions)).to.deep.equal(expected);
    expect(detect("test/tester.gz", binaryExtensions)).to.deep.equal(expected);
    expect(detect("test/tester.xz", binaryExtensions)).to.deep.equal(expected);
    expect(detect("test/tester.flv", binaryExtensions)).to.deep.equal(expected);
    expect(detect("test/tester.xls", binaryExtensions)).to.deep.equal(expected);
    expect(detect("test/tester.odt", binaryExtensions)).to.deep.equal(expected);
    expect(detect("test/tester.doc", binaryExtensions)).to.deep.equal(expected);
    expect(detect("test/tester.docx", binaryExtensions)).to.deep.equal(expected);
    expect(detect("test/tester.exe", binaryExtensions)).to.deep.equal(expected);
    expect(detect("test/tester.bin", binaryExtensions)).to.deep.equal(expected);
    
  });

  it('should detect any file using provided extentions', () => {
    const expected = true;
    expect(detect("test/tester.jpg", [...textExtensions, ...binaryExtensions])).to.deep.equal(expected);
    expect(detect("test/tester.jpeg", [...textExtensions, ...binaryExtensions])).to.deep.equal(expected);
    expect(detect("test/tester.mp3", [...textExtensions, ...binaryExtensions])).to.deep.equal(expected);
    expect(detect("test/tester.mp4", [...textExtensions, ...binaryExtensions])).to.deep.equal(expected);
    expect(detect("test/tester.wav", [...textExtensions, ...binaryExtensions])).to.deep.equal(expected);
    expect(detect("test/tester.zip", [...textExtensions, ...binaryExtensions])).to.deep.equal(expected);
    expect(detect("test/tester.gz", [...textExtensions, ...binaryExtensions])).to.deep.equal(expected);
    expect(detect("test/tester.xz", [...textExtensions, ...binaryExtensions])).to.deep.equal(expected);
    expect(detect("test/tester.flv", [...textExtensions, ...binaryExtensions])).to.deep.equal(expected);
    expect(detect("test/tester.xls", [...textExtensions, ...binaryExtensions])).to.deep.equal(expected);
    expect(detect("test/tester.odt", [...textExtensions, ...binaryExtensions])).to.deep.equal(expected);
    expect(detect("test/tester.doc", [...textExtensions, ...binaryExtensions])).to.deep.equal(expected);
    expect(detect("test/tester.docx", [...textExtensions, ...binaryExtensions])).to.deep.equal(expected);
    expect(detect("test/tester.exe", [...textExtensions, ...binaryExtensions])).to.deep.equal(expected);
    expect(detect("test/tester.bin", [...textExtensions, ...binaryExtensions])).to.deep.equal(expected);
    expect(detect("test/tester.txt", [...textExtensions, ...binaryExtensions])).to.deep.equal(expected);
    expect(detect("test/tester.ini", [...textExtensions, ...binaryExtensions])).to.deep.equal(expected);
    expect(detect("test/tester.yaml", [...textExtensions, ...binaryExtensions])).to.deep.equal(expected);
    expect(detect("test/tester.xml", [...textExtensions, ...binaryExtensions])).to.deep.equal(expected);
    expect(detect("test/tester.html", [...textExtensions, ...binaryExtensions])).to.deep.equal(expected);
    expect(detect("test/tester.json", [...textExtensions, ...binaryExtensions])).to.deep.equal(expected);
    expect(detect("test/tester.csv", [...textExtensions, ...binaryExtensions])).to.deep.equal(expected);
  });

  it('should detect file type using provided custom extentions array', () => {
    const expected = true;
    expect(detect("test/tester.jpg", ["gz", "txt", "jpg", "jpeg"])).to.deep.equal(expected);
    expect(detect("test/tester.jpeg", ["gz", "txt", "jpg", "jpeg"])).to.deep.equal(expected);
    expect(detect("test/tester.mp3", ["gz", "txt", "jpg", "jpeg"])).to.deep.equal(!expected);
    expect(detect("test/tester.mp4", ["gz", "txt", "jpg", "jpeg"])).to.deep.equal(!expected);
    expect(detect("test/tester.wav", ["gz", "txt", "jpg", "jpeg"])).to.deep.equal(!expected);
    expect(detect("test/tester.zip", ["gz", "txt", "jpg", "jpeg"])).to.deep.equal(!expected);
    expect(detect("test/tester.gz", ["gz", "txt", "jpg", "jpeg"])).to.deep.equal(expected);
    expect(detect("test/tester.xz", ["gz", "txt", "jpg", "jpeg"])).to.deep.equal(!expected);
    expect(detect("test/tester.flv", ["gz", "txt", "jpg", "jpeg"])).to.deep.equal(!expected);
    expect(detect("test/tester.xls", ["gz", "txt", "jpg", "jpeg"])).to.deep.equal(!expected);
    expect(detect("test/tester.odt", ["gz", "txt", "jpg", "jpeg"])).to.deep.equal(!expected);
    expect(detect("test/tester.doc", ["gz", "txt", "jpg", "jpeg"])).to.deep.equal(!expected);
    expect(detect("test/tester.docx", ["gz", "txt", "jpg", "jpeg"])).to.deep.equal(!expected);
    expect(detect("test/tester.exe", ["gz", "txt", "jpg", "jpeg"])).to.deep.equal(!expected);
    expect(detect("test/tester.bin", ["gz", "txt", "jpg", "jpeg"])).to.deep.equal(!expected);
    expect(detect("test/tester.txt", ["gz", "txt", "jpg", "jpeg"])).to.deep.equal(expected);
    expect(detect("test/tester.ini", ["gz", "txt", "jpg", "jpeg"])).to.deep.equal(!expected);
    expect(detect("test/tester.yaml", ["gz", "txt", "jpg", "jpeg"])).to.deep.equal(!expected);
    expect(detect("test/tester.xml", ["gz", "txt", "jpg", "jpeg"])).to.deep.equal(!expected);
    expect(detect("test/tester.html", ["gz", "txt", "jpg", "jpeg"])).to.deep.equal(!expected);
    expect(detect("test/tester.json", ["gz", "txt", "jpg", "jpeg"])).to.deep.equal(!expected);
    expect(detect("test/tester.csv", ["gz", "txt", "jpg", "jpeg"])).to.deep.equal(!expected);
  });

  it('should detect text file using isExtension', () => {
    const expected = true;
    expect(isExtension("test/tester.txt", "txt")).to.deep.equal(expected);
    expect(isExtension("test/tester.ini", "ini")).to.deep.equal(expected);
    expect(isExtension("test/tester.yaml", "yaml")).to.deep.equal(expected);
    expect(isExtension("test/tester.yml", "yml")).to.deep.equal(expected);
    expect(isExtension("test/tester.php", "php")).to.deep.equal(expected);
    expect(isExtension("test/tester.asp", "asp")).to.deep.equal(expected);
    expect(isExtension("test/tester.aspx", "aspx")).to.deep.equal(expected);
    expect(isExtension("test/tester.jsp", "jsp")).to.deep.equal(expected);
    expect(isExtension("test/tester.xml", "xml")).to.deep.equal(expected);
    expect(isExtension("test/tester.csv", "csv")).to.deep.equal(expected);
    expect(isExtension("test/tester.json", "json")).to.deep.equal(expected);
    expect(isExtension("test/tester.asp", "asp")).to.deep.equal(expected);
    
    expect(isExtension("test/tester.txt", "txts")).to.deep.equal(!expected);
    expect(isExtension("test/tester.ini", "icni")).to.deep.equal(!expected);
    expect(isExtension("test/tester.yaml", "yacml")).to.deep.equal(!expected);
    expect(isExtension("test/tester.yml", "ymsl")).to.deep.equal(!expected);
    expect(isExtension("test/tester.php", "php3")).to.deep.equal(!expected);
    expect(isExtension("test/tester.asp", "aspx")).to.deep.equal(!expected);
    expect(isExtension("test/tester.aspx", "apx")).to.deep.equal(!expected);
    expect(isExtension("test/tester.jsp", "jspx")).to.deep.equal(!expected);
    expect(isExtension("test/tester.xml", "xmlx")).to.deep.equal(!expected);
    expect(isExtension("test/tester.csv", "tsv")).to.deep.equal(!expected);
    expect(isExtension("test/tester.json", "cjson")).to.deep.equal(!expected);
    expect(isExtension("test/tester.asp", "aspx")).to.deep.equal(!expected);
    
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
    const expected = false;
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
    const expected = false;
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
    const expected = true;
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
