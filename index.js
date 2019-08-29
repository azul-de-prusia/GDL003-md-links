const fs = require('fs');
const path = require('path');
//const node fetch?
const chalk = require('chalk');
//const filehound = require('filehound');
const request = require('request');
const marked = require('marked');
const cheerio = require('cheerio');
//const keywords = "http";



//---------Validates if the file extension is = .md
//module.exports = (filePath) => {
const itIsMd = (filePath) => {
if (path.extname(filePath)==='.md'){
  console.log(chalk.bgMagenta.bold('✓ It is an .md file'));
 // log(chalk.blue.bgRed.bold('Hello world!'));
 return true; 
} else {
  console.log(chalk.bgCyan.bold('This is not an .md file D:'));
  return false;
}
};
console.log(itIsMd(process.argv[2]));



//---------Reads the .md file
const readFile = (path) =>{
fs.readFile((process.argv[2]), 'utf8', (error, data) => {
  if (error) throw error;
  console.log(data);
  parseMdToHtml(data);
});
};
readFile(path);



//---------Parses .md file to html
  const parseMdToHtml = (htmlData) =>{
  let htmlTags = marked(htmlData);
    console.log(htmlTags);
 findUrls(htmlTags); 
} 



//--------Finds url´s within the html file 
const findUrls = (htmlA) =>{
  $ = cheerio.load (htmlA);
  let links = [];
  $ ('a').each((i, element)=>{
    links[i] = $(element).attr("href");
  })
  console.log (links , links.length);
};

/*
//validateUrls(links);
const validateUrls = require('request');
request(htmlLinks[i].href, (error, response, body)=> {
     if (error){
          console.log("URL broken")
     }

          console.log("valid URL")
     
});

/*
//reads the .md file
fs.readFile((process.argv[2]), 'utf8', (error, data) => {
  if (error) throw error;
  let keywords = "http";
  let position = data.indexOf(keywords);
  console.log(position); 

  // -1 means there was no urls found
  while (position >= 0)
  {
      // remplaza "ato" por "atito"
      data = data.slice(0, position) + " " + data.slice(position + 3);
      // search for the next word match
      position = data.indexOf(keywords);
 
      request(keywords,  (error, response, body)=> {
          if (error){
                console.log("URL broken");}
          else{
                console.log("valid URL");}
      });
      console.log(position);
  }

});
*/


validateUrls = () => {
  console.log("validate")
};


printUrlStats = () => {
  console.log("print")
};

module.exports ={
  itIsMd: itIsMd,
  readFile: readFile,
  parseMdToHtml: parseMdToHtml,
  findUrls: findUrls,
  validateUrls: validateUrls,
  printUrlStats: printUrlStats
};
