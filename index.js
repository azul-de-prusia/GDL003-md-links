const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const request = require('request');
const marked = require('marked');
const cheerio = require('cheerio');



//---------Validates if the file extension is = .md
module.exports = (filePath) => {
const itIsMd = (filePath) => {
if (path.extname(filePath)==='.md'){
  console.log(chalk.bgMagenta.bold('✓ It is an .md file'));
 return true; 
} else {
  console.log(chalk.bgCyan.bold('This is not an .md file D:'));
  return false;
}
};
console.log(itIsMd(process.argv[2]));
}


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
    //console.log(htmlTags);
 findUrls(htmlTags); 
} 


//--------Finds url´s within the html file and validates them
const findUrls = (htmlA) =>{
  $ = cheerio.load (htmlA);
  let links = [];
  $ ('a').each((i, element)=>{
    links[i] = $(element).attr("href");
    request(links[i], (error, response, body)=> {
      if (error){
           console.log(chalk.bgRed.bold("URL broken"));
      }else{
        console.log(chalk.bgBlue.bold("valid URL"));
      }
 
    })
  })

  console.log("There are " + links.length + " links found");
};


/*
//--------Finds url´s within the html file 
const findUrls = (htmlA) =>{
  $ = cheerio.load (htmlA);
  let links = [];
  $ ('a').each((i, element)=>{
    links[i] = $(element).attr("href");
  })
  console.log (links , links.length);
};*/

/*
module.exports ={
  itIsMd: itIsMd,
  readFile: readFile,
  parseMdToHtml: parseMdToHtml,
  findUrls: findUrls,
  validateUrls: validateUrls,
  printUrlStats: printUrlStats
};
*/






