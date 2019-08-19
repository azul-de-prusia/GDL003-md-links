const mdLinks = require('../');


describe('mdLinks', () => {

  it('should return true for a valid .md file', () => {
    expect(mdLinks('.../README.md')).toBe(true);
  });

  it('should return true for an invalid .md file', () => {
    expect(mdLinks('.../index.js')).toBe(false);
  });

});
