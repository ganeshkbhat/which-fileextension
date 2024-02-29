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

/**
 * isBrowser
 *
 * @return {*} 
 */
function isBrowser() {
  if (typeof process === "object" && typeof require === "function") {
    return false;
  }
  if (typeof importScripts === "function") { return false; }
  if (typeof window === "object") { return true; }
}

const binaryExtensions = [
  "3dm",
  "3ds",
  "3g2",
  "3gp",
  "7z",
  "a",
  "aac",
  "adp",
  "ai",
  "aif",
  "aiff",
  "alz",
  "ape",
  "apk",
  "appimage",
  "ar",
  "arj",
  "asf",
  "au",
  "avi",
  "bak",
  "baml",
  "bh",
  "bin",
  "bk",
  "bmp",
  "btif",
  "bz2",
  "bzip2",
  "cab",
  "caf",
  "cgm",
  "class",
  "cmx",
  "cpio",
  "cr2",
  "cur",
  "dat",
  "dcm",
  "deb",
  "dex",
  "djvu",
  "dll",
  "dmg",
  "dng",
  "doc",
  "docm",
  "docx",
  "dot",
  "dotm",
  "dra",
  "DS_Store",
  "dsk",
  "dts",
  "dtshd",
  "dvb",
  "dwg",
  "dxf",
  "ecelp4800",
  "ecelp7470",
  "ecelp9600",
  "egg",
  "eol",
  "eot",
  "epub",
  "exe",
  "f4v",
  "fbs",
  "fh",
  "fla",
  "flac",
  "flatpak",
  "fli",
  "flv",
  "fpx",
  "fst",
  "fvt",
  "g3",
  "gh",
  "gif",
  "graffle",
  "gz",
  "gzip",
  "h261",
  "h263",
  "h264",
  "icns",
  "ico",
  "ief",
  "img",
  "ipa",
  "iso",
  "jar",
  "jpeg",
  "jpg",
  "jpgv",
  "jpm",
  "jxr",
  "key",
  "ktx",
  "lha",
  "lib",
  "lvp",
  "lz",
  "lzh",
  "lzma",
  "lzo",
  "m3u",
  "m4a",
  "m4v",
  "mar",
  "mdi",
  "mht",
  "mid",
  "midi",
  "mj2",
  "mka",
  "mkv",
  "mmr",
  "mng",
  "mobi",
  "mov",
  "movie",
  "mp3",
  "mp4",
  "mp4a",
  "mpeg",
  "mpg",
  "mpga",
  "mxu",
  "nef",
  "npx",
  "numbers",
  "nupkg",
  "o",
  "odp",
  "ods",
  "odt",
  "oga",
  "ogg",
  "ogv",
  "otf",
  "ott",
  "pages",
  "pbm",
  "pcx",
  "pdb",
  "pdf",
  "pea",
  "pgm",
  "pic",
  "png",
  "pnm",
  "pot",
  "potm",
  "potx",
  "ppa",
  "ppam",
  "ppm",
  "pps",
  "ppsm",
  "ppsx",
  "ppt",
  "pptm",
  "pptx",
  "psd",
  "pya",
  "pyc",
  "pyo",
  "pyv",
  "qt",
  "rar",
  "ras",
  "raw",
  "resources",
  "rgb",
  "rip",
  "rlc",
  "rmf",
  "rmvb",
  "rpm",
  "rtf",
  "rz",
  "s3m",
  "s7z",
  "scpt",
  "sgi",
  "shar",
  "snap",
  "sil",
  "sketch",
  "slk",
  "smv",
  "snk",
  "so",
  "stl",
  "suo",
  "sub",
  "swf",
  "tar",
  "tbz",
  "tbz2",
  "tga",
  "tgz",
  "thmx",
  "tif",
  "tiff",
  "tlz",
  "ttc",
  "ttf",
  "txz",
  "udf",
  "uvh",
  "uvi",
  "uvm",
  "uvp",
  "uvs",
  "uvu",
  "viv",
  "vob",
  "war",
  "wav",
  "wax",
  "wbmp",
  "wdp",
  "weba",
  "webm",
  "webp",
  "whl",
  "wim",
  "wm",
  "wma",
  "wmv",
  "wmx",
  "woff",
  "woff2",
  "wrm",
  "wvx",
  "xbm",
  "xif",
  "xla",
  "xlam",
  "xls",
  "xlsb",
  "xlsm",
  "xlsx",
  "xlt",
  "xltm",
  "xltx",
  "xm",
  "xmind",
  "xpi",
  "xpm",
  "xwd",
  "xz",
  "z",
  "zip",
  "zipx"
];

const textExtensions = [
  'Dockerfile',
  'Makefile',
  'Rakefile',
  'ada',
  'adb',
  'ads',
  'applescript',
  'as',
  'ascx',
  'asm',
  'asmx',
  'asp',
  'aspx',
  'atom',
  'bas',
  'bash',
  'bashrc',
  'bat',
  'bbcolors',
  'bdsgroup',
  'bdsproj',
  'bib',
  'bowerrc',
  'c',
  'cbl',
  'cc',
  'cfc',
  'cfg',
  'cfm',
  'cfml',
  'cgi',
  'clj',
  'cls',
  'cmake',
  'cmd',
  'cnf',
  'cob',
  'coffee',
  'coffeekup',
  'conf',
  'cpp',
  'cpt',
  'cpy',
  'crt',
  'cs',
  'csh',
  'cson',
  'csr',
  'css',
  'csslintrc',
  'csv',
  'ctl',
  'curlrc',
  'cxx',
  'dart',
  'dfm',
  'diff',
  'dockerignore',
  'dof',
  'dpk',
  'dproj',
  'dtd',
  'eco',
  'editorconfig',
  'ejs',
  'el',
  'emacs',
  'eml',
  'ent',
  'erb',
  'erl',
  'eslintignore',
  'eslintrc',
  'ex',
  'exs',
  'f',
  'f03',
  'f77',
  'f90',
  'f95',
  'fish',
  'for',
  'fpp',
  'frm',
  'ftn',
  'gemrc',
  'gitattributes',
  'gitconfig',
  'gitignore',
  'gitkeep',
  'gitmodules',
  'go',
  'gpp',
  'gradle',
  'groovy',
  'groupproj',
  'grunit',
  'gtmpl',
  'gvimrc',
  'h',
  'haml',
  'hbs',
  'hgignore',
  'hh',
  'hpp',
  'hrl',
  'hs',
  'hta',
  'htaccess',
  'htc',
  'htm',
  'html',
  'htpasswd',
  'hxx',
  'iced',
  'inc',
  'ini',
  'ino',
  'int',
  'irbrc',
  'itcl',
  'itermcolors',
  'itk',
  'jade',
  'java',
  'jhtm',
  'jhtml',
  'js',
  'jscsrc',
  'jshintignore',
  'jshintrc',
  'json',
  'json5',
  'jsonld',
  'jsp',
  'jspx',
  'jsx',
  'ksh',
  'less',
  'lhs',
  'lisp',
  'log',
  'ls',
  'lsp',
  'lua',
  'm',
  'mak',
  'map',
  'markdown',
  'master',
  'md',
  'mdown',
  'mdwn',
  'mdx',
  'metadata',
  'mht',
  'mhtml',
  'mjs',
  'mk',
  'mkd',
  'mkdn',
  'mkdown',
  'ml',
  'mli',
  'mm',
  'mxml',
  'nfm',
  'nfo',
  'njk',
  'noon',
  'npmignore',
  'npmrc',
  'nvmrc',
  'ops',
  'pas',
  'pasm',
  'patch',
  'pbxproj',
  'pch',
  'pem',
  'pg',
  'php',
  'php3',
  'php4',
  'php5',
  'phpt',
  'phtml',
  'pir',
  'pl',
  'pm',
  'pmc',
  'pod',
  'pot',
  'properties',
  'props',
  'pt',
  'pug',
  'py',
  'r',
  'rake',
  'rb',
  'rdoc',
  'rdoc_options',
  'resx',
  'rhtml',
  'rjs',
  'rlib',
  'rmd',
  'ron',
  'rs',
  'rss',
  'rst',
  'rtf',
  'rvmrc',
  'rxml',
  's',
  'sass',
  'scala',
  'scm',
  'scss',
  'seestyle',
  'sh',
  'shtml',
  'sls',
  'spec',
  'sql',
  'sqlite',
  'ss',
  'sss',
  'st',
  'strings',
  'sty',
  'styl',
  'stylus',
  'sub',
  'sublime-build',
  'sublime-commands',
  'sublime-completions',
  'sublime-keymap',
  'sublime-macro',
  'sublime-menu',
  'sublime-project',
  'sublime-settings',
  'sublime-workspace',
  'sv',
  'svc',
  'svg',
  't',
  'tcl',
  'tcsh',
  'terminal',
  'tex',
  'text',
  'textile',
  'tg',
  'tmLanguage',
  'tmTheme',
  'tmpl',
  'toml',
  'tpl',
  'ts',
  'tsv',
  'tsx',
  'tt',
  'tt2',
  'ttml',
  'txt',
  'v',
  'vb',
  'vbs',
  'vh',
  'vhd',
  'vhdl',
  'vim',
  'viminfo',
  'vimrc',
  'vue',
  'webapp',
  'wxml',
  'wxss',
  'x-php',
  'xaml',
  'xht',
  'xhtml',
  'xml',
  'xs',
  'xsd',
  'xsl',
  'xslt',
  'yaml',
  'yml',
  'zsh',
  'zshrc',
]

const scriptInjectionExtensions = [
  "html", "php",
  "php2", "php3",
  "phpt", "phtml",
  "phar", "do",
  "svg", "action",
  "cgi", "asp",
  "ashx", "cshtml",
  "js", "xml",
  "php7", "asmx",
  "jsp", "cgi",
  "htm", "cer",
  "aspx ", "php4",
  "php5", "odt",
  "sh", "bat"
];

function isBinaryExtension(str) {
  return !!detect(str, binaryExtensions);
}

function isTextExtension(str) {
  return !!detect(str, textExtensions);
}

function isExtension(str, ext) {
  if (!ext || typeof ext !== "string") throw Error("Please provide a valid string for type check")
  return !!detect(str, [ext]);
}

function detect(str, arr) {
  let a = str.split(".")
  return (!!(arr.includes(a[a.length - 1]) || arr.includes(a[a.length - 2])));
}

// consider browser compatible implementation
// https://www.npmjs.com/package/istextorbinary?activeTab=code

function isBinary(filename, buffer) {
  const text = isText(filename, buffer);
  if (text == null)
    return null;
  // this fails with a binary filename and 
  let b = getEncoding(buffer) === "binary";
  // (!!buffer) ? !!b : false
  return !text;
}

function isText(filename, buffer) {
  // Test extensions
  if (filename) {
    // Extract filename
    const parts = filename.split('.').reverse();
    // Cycle extensions
    for (const extension of parts) {
      if (textExtensions.indexOf(extension) !== -1) {
        return true;
      }
      if (binaryExtensions.indexOf(extension) !== -1) {
        return false;
      }
    }
  }
  // Fallback to encoding if extension check was not enough
  if (buffer) {
    return getEncoding(buffer) === 'utf8';
  }
  // No buffer was provided
  return null;
}

function getEncoding(buffer, opts) {
  // Check
  if (!buffer)
    return null;
  // Prepare
  const textEncoding = 'utf8';
  const binaryEncoding = 'binary';
  const chunkLength = opts?.chunkLength ?? 24;
  let chunkBegin = opts?.chunkBegin ?? 0;
  // Discover
  if (opts?.chunkBegin == null) {
    // Start
    let encoding = getEncoding(buffer, { chunkLength, chunkBegin });
    if (encoding === textEncoding) {
      // Middle
      chunkBegin = Math.max(0, Math.floor(buffer.length / 2) - chunkLength);
      encoding = getEncoding(buffer, {
        chunkLength,
        chunkBegin,
      });
      if (encoding === textEncoding) {
        // End
        chunkBegin = Math.max(0, buffer.length - chunkLength);
        encoding = getEncoding(buffer, {
          chunkLength,
          chunkBegin,
        });
      }
    }
    // Return
    return encoding;
  }
  else {
    // Extract
    chunkBegin = getChunkBegin(buffer, chunkBegin);
    if (chunkBegin === -1) {
      return binaryEncoding;
    }
    const chunkEnd = getChunkEnd(buffer, Math.min(buffer.length, chunkBegin + chunkLength));
    if (chunkEnd > buffer.length) {
      return binaryEncoding;
    }
    const contentChunkUTF8 = buffer.toString(textEncoding, chunkBegin, chunkEnd);
    // Detect encoding
    for (let i = 0; i < contentChunkUTF8.length; ++i) {
      const charCode = contentChunkUTF8.charCodeAt(i);
      if (charCode === 65533 || charCode <= 8) {
        // 8 and below are control characters (e.g. backspace, null, eof, etc.)
        // 65533 is the unknown character
        // console.log(charCode, contentChunkUTF8[i])
        return binaryEncoding;
      }
    }
    // Return
    return textEncoding;
  }
}

function getChunkBegin(buf, chunkBegin) {
  // If it's the beginning, just return.
  if (chunkBegin === 0) {
    return 0;
  }
  if (!isLaterByteOfUtf8(buf[chunkBegin])) {
    return chunkBegin;
  }
  let begin = chunkBegin - 3;
  if (begin >= 0) {
    if (isFirstByteOf4ByteChar(buf[begin])) {
      return begin;
    }
  }
  begin = chunkBegin - 2;
  if (begin >= 0) {
    if (isFirstByteOf4ByteChar(buf[begin]) ||
      isFirstByteOf3ByteChar(buf[begin])) {
      return begin;
    }
  }
  begin = chunkBegin - 1;
  if (begin >= 0) {
    // Is it a 4-byte, 3-byte utf8 character?
    if (isFirstByteOf4ByteChar(buf[begin]) ||
      isFirstByteOf3ByteChar(buf[begin]) ||
      isFirstByteOf2ByteChar(buf[begin])) {
      return begin;
    }
  }
  return -1;
}

function getChunkEnd(buf, chunkEnd) {
  // If it's the end, just return.
  if (chunkEnd === buf.length) {
    return chunkEnd;
  }
  let index = chunkEnd - 3;
  if (index >= 0) {
    if (isFirstByteOf4ByteChar(buf[index])) {
      return chunkEnd + 1;
    }
  }
  index = chunkEnd - 2;
  if (index >= 0) {
    if (isFirstByteOf4ByteChar(buf[index])) {
      return chunkEnd + 2;
    }
    if (isFirstByteOf3ByteChar(buf[index])) {
      return chunkEnd + 1;
    }
  }
  index = chunkEnd - 1;
  if (index >= 0) {
    if (isFirstByteOf4ByteChar(buf[index])) {
      return chunkEnd + 3;
    }
    if (isFirstByteOf3ByteChar(buf[index])) {
      return chunkEnd + 2;
    }
    if (isFirstByteOf2ByteChar(buf[index])) {
      return chunkEnd + 1;
    }
  }
  return chunkEnd;
}

function isFirstByteOf4ByteChar(byte) {
  // eslint-disable-next-line no-bitwise
  return byte >> 3 === 30; // 11110xxx?
}

function isFirstByteOf3ByteChar(byte) {
  // eslint-disable-next-line no-bitwise
  return byte >> 4 === 14; // 1110xxxx?
}

function isFirstByteOf2ByteChar(byte) {
  // eslint-disable-next-line no-bitwise
  return byte >> 5 === 6; // 110xxxxx?
}

function isLaterByteOfUtf8(byte) {
  // eslint-disable-next-line no-bitwise
  return byte >> 6 === 2; // 10xxxxxx?
}

if (!isBrowser()) {
  const exp = {
    // getEncoding,
    isText,
    isBinary,
    detect,
    isExtension,
    isTextExtension,
    isBinaryExtension,
    binaryExtensions,
    textExtensions,
    scriptInjectionExtensions
  }
  module.exports = exp;
  module.exports.default = exp;
}
