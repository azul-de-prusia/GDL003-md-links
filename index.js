const fs = require('fs');
const path = require('path');
//const node fetch?
//const chalk = require('chalk');
//const filehound = require('filehound');
const marked = require('marked');
const cheerio = require('cheerio')





//file extension
//module.exports = (filePath) => {
const itIsMd = (filePath) => {
if (path.extname(filePath)==='.md'){
  console.log('✓ It is an .md file')
  return true;
} else {
  console.log('This is not an .md file D:')
  return false;
}

 //ternario, síntesis del if anterior
 //return path.extname(filePath)==='.md' ? true : false;
};

// console.log(itIsMd(process.argv[2]));
console.log(itIsMd("./README.md"));


//reads the .md file
fs.readFile('README.md', 'utf8', (error, data) => {
  if (error) throw error;
  console.log(data);
});

//parses .md file to html
marked.setOptions({
  highlight: function(code, lang, callback) {
    require('pygmentize-bundled') ({ lang: lang, format: 'html' }, code, function (error, result) {
      callback(error, result.toString());
    });
  }
});

console.log(marked(markdownString));
/*reads the .md file
fs.readFile('README.md', 'utf8', (err, data) => {
  if (err) throw err;
  let keywords = "http"
  let posicion = data.indexOf(keywords);
  console.log(posicion)
  // y mientras tengas una posición mayor o igual que 0,
  // (recuerda que -1 significa que no lo encontró)
  while (posicion >= 0)
  {
      // remplaza "ato" por "atito"
      data = data.slice(0, posicion) + " " + data.slice(posicion + 3);
      // busca la siguiente ocurrencia de la palabra
      posicion = data.indexOf(keywords);
 
      request(keywords,  (error, response, body)=> {
          if (error){
                console.log("mal")
          }
else{
  console.log("url funciona bien")
}
      });
      console.log(posicion);
  }
});*/

findUrls = () => {

};


countUrls = () => {

};


validateUrls = () => {

};


printUrlStats = () => {

};