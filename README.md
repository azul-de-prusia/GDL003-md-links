# Markdown Links

<img src="https://httpstatusdogs.com/img/200.jpg" width="45%">

 This is a npm library that does analyze the URL´s on your markdown files (.md extension) searching for those that still works and the ones that are already broken :( so you can keep them updated. At the end you´ll get a list and stats of the URL´s working and broken whitin the md file given. 
 The first thing to do it is to install de library on your CLI, by writing `npm install <azul-de-prusia>/md-links`. It´s up to you to install it on a project or globally.

<img src="https://httpstatusdogs.com/img/404.jpg" width="45%">

### In this project you will find the next files:

- `README.md` Presentation of the library with the instructions of instalation, use and behavior.
- `index.js`: It contains the functions that make up the library work.
- `package.json` Contains informaton about author, version, license, dependencies, tests and pretest.
- `.editorconfig` Text editor settings.
- `.eslintrc` Linter settings.
- `.gitignore` To ignore `node_modules` or other files that shouldn´t get include on the versions control (`git`).
- `test/md-links.spec.js` It contains functionality tests.
  `mdLinks()`. Tests the implementation must pass.  
  
  <img src="https://httpstatusdogs.com/img/402.jpg" width="45%">

This is the flowchart made for the fisrt iteration od this project, in which you can see the processes to get to the final solution.

<img src="https://i.ibb.co/LNdQzYc/Proceso-de-soporte-t-cnico.png" width="100%">


## General considerations:

This project was developed by Tegthyn Coral Quiñones Gutiérrez.

The library it´s implemented in JavaScript to be executed with
Node.js. ** It uses external libraries **.

The module is installable via npm install <github-azul-de-prusia> / md-links. This module include both an executable that we can invoke on the command line and an interface that we can import with require to use it programmatically.

Unit tests must cover a minimum of 70% of statements, functions, lines and branches.

Github project boards were used to organize and prioritize the development of this library.

This library runs by writting on the CLI:   
node index yourfile.md  
It will show you a validation for the .md type of file, followed by the links found on your file, and the "valid URL" or "URL broken", in the same order than links appear and the URL´s total. 

## Dependencies:

Node file system  
Node path  
Elintr  
Jest  
Prettier  
Chalk  
Marked   
Cheerio  
Request  

<img src="https://httpstatusdogs.com/img/423.jpg" width="45%">

## Checklist

### General

- [✓] Can be installed by `npm install --global <azul-de-prusia>/md-links`

### `README.md`

- [✓] Contains the flowchart that resolves the problem.
- [✓] A board with the backlog for the library implementation.
- [✓] Technical documentation about the library.
- [✓] Instalation and use guide of the library.

### API `mdLinks(path, opts)`

- [✓] The module exports a function with the expected interface (API).
- [✓] Implements support to an individual file.
- [ ] Implements support to directorys.
- [ ] Implements `options.validate`

### Tests

- [ ] Unit tests cover a minimum of 70% of statements, functions,
      lines, and branches.
- [ ] Pass tests (and linters) (`npm test`).

### CLI

- [ ] Expose executable `md-links` in the path (configured in` package.json`).
- [✓] It runs without errors / expected output.
- [✓] Implements `--validate`.
- [ ] Implements `--stats`.


$ md-links ./some/example.md --validate
./some/example.md http://algo.com/2/3/ ok 200 Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html fail 404 algún doc
./some/example.md http://google.com/ ok 301 Google
```
https://www.facebook.com/
https://i.ibb.co/LNdQzYc/Proceso-de-soporte-t-cnico.png
http://google.co/