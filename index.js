const path = require('path');

module.exports = (filePath) => {
if (path.extname(filePath)==='.md'){
  return true;
} else {
  return false;
}
 //ternario, síntesis del if anterior
 //return path.extname(filePath)==='.md' ? true : false;
};
