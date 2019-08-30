//require('../index.js');
const itIsMd =require("../index.js");
//const { validateLinks } = require("");

describe('itIsMd', () => {

  it('is a function', () => {
    expect(typeof itIsMd).toBe('function');
    console.log('✓ itIsMd is a function');
  });

  it('should return true for a valid .md file', () => {
    expect(mdLinks.itIsMd('.../README.md')).toBe(true);
    console.log('✓ Validates the md file');
  });

  it('should return true for an invalid .md file', () => {
    expect(mdLinks.itIsMd('.../index.js')).toBe(false);
    console.log('Invalid .md file');
  });

});



