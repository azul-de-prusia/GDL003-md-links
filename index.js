const fs = require('fs');
const path = require('path');
//const node fetch?
//const chalk = require('chalk');
//const filehound = require('filehound');
//const marked = require('marked');
//const cheerio = require ('cheerio');




//file extension
//module.exports = (filePath) => {
const itIsMd = (filePath) => {
if (path.extname(filePath)==='.md'){
  return true;
} else {
  return false;
}
 //ternario, síntesis del if anterior
 //return path.extname(filePath)==='.md' ? true : false;
};


//reads the .md file
fs.readFile('README.md', 'utf8' (err, data) => {
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