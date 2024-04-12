const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      const word = new Word("test");
      expect(word).to.have.property("word");
    });
  
    it('should set the "word" property when a new word is created', function () {
      const word = new Word("example");
      expect(word.word).to.equal("example");
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      const word = new Word("smanga");
      expect(word.removeVowels()).to.equal("smng");
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      const word = new Word("smanga");
      expect(word.removeConsonants()).to.equal("aa");
    });
  });
  
  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      const word = new Word("hello");
      expect(word.pigLatin()).to.equal("ellohay");
    });
  });
});