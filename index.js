const fs = require('fs');
const path = require('path');
//const node fetch?
//const chalk = require('chalk');
//const filehound = require('filehound');
//const markdownIt = require('markdownIt');





//file extension
//module.exports = (filePath) => {
const itIsMd = (filePath) => {
if (path.extname(filePath)==='.md'){
  console.log('si')
  return true;
} else {
  console.log('no')
  return false;
}

 //ternario, síntesis del if anterior
 //return path.extname(filePath)==='.md' ? true : false;
};

// console.log(itIsMd(process.argv[2]));
console.log(itIsMd("./README.md"));

//reads the .md file
fs.readFile('README.md', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});


findUrls = () => {

};


countUrls = () => {

};


validateUrls = () => {

};


printUrlStats = () => {

};