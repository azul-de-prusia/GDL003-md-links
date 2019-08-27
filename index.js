const fs = require('fs');
const path = require('path');
//const node fetch?
//const chalk = require('chalk');
//const filehound = require('filehound');
const request = require('request');
const marked = require('marked');
const cheerio = require('cheerio');
const keywords = "http";




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
};
console.log(itIsMd(process.argv[2]));
//console.log(itIsMd("./README.md"));


//Reads the .md file
fs.readFile((process.argv[2]), 'utf8', (error, data) => {
  if (error) throw error;
  console.log(data);
  parseMdToHtml(data);
});

//Parses .md file to html
  const parseMdToHtml = (htmlData) =>{
  console.log(marked(htmlData));
} 

/*Finds url´s within the html file 
const findHref = cheerio.load('<a href>...</a>');
console.log(findHref);

/*var request = require('request');
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

findUrls = () => {

};


countUrls = () => {

};


validateUrls = () => {

};


printUrlStats = () => {

};