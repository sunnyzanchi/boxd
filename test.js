const boxd = require('./index');
const expect = require('chai').expect;

process.stdout.columns = 60;

describe('boxd', function(){
  describe('Simple box', function(){
    var str = 'Testing testing';
    var result = boxd(str);

    it('should return a boxed string', function(){
      expect(result).to.be.a('string');
      expect(result).to.equal('┌───────────────┐\n│Testing testing│\n└───────────────┘\n');
    })
  });

  describe('Double box', function(){
    var str = 'Testing testing';
    var result = boxd(str, {type: 'double'});

    it('should return a double-boxed string', function(){
      expect(result).to.be.a('string');
      expect(result).to.equal('╔═══════════════╗\n║Testing testing║\n╚═══════════════╝\n');
    })
  });

  describe('Short string with breaks in a box', function(){
    var str = 'Here is a short string\nWith some line breaks\nIn the middle';
    var result = boxd(str);

    it('should return a boxed string with line breaks', function(){
      expect(result).to.be.a('string');
      expect(result).to.equal('┌──────────────────────┐\n│Here is a short string│\n│With some line breaks │\n│In the middle         │\n└──────────────────────┘\n');
    })
  });

  describe('Centered text in a simple box', function(){
    var str = 'Short line\nNew line thats much longer\nShorter line';
    var result = boxd(str, {centered: true});

    it('should return a boxed string with centered text', function(){
      expect(result).to.be.a('string');
      expect(result).to.equal('┌──────────────────────────┐\n│        Short line        │\n│New line thats much longer│\n│       Shorter line       │\n└──────────────────────────┘\n');
    })
  });

  describe('Simple box centered in the console', function(){
    var str = 'Testing testing';
    var result = boxd(str, {consoleCentered: true});

    it('should return a boxed string, centered in the console', function(){
      expect(result).to.be.a('string');
      expect(result).to.equal('                      ┌───────────────┐\n                      │Testing testing│\n                      └───────────────┘\n');
    })
  });

  describe('String longer than console', function(){
    var str = new Array(80).join('a');
    var result = boxd(str);

    it('should return a multiline boxed string', function(){
      expect(result).to.be.a('string');
      expect(result).to.equal('┌──────────────────────────────────────────────────────────┐│aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa││aaaaaaaaaaaaaaaaaaaaa                                     │└──────────────────────────────────────────────────────────┘');
    })
  });

  describe('Two lines passed as an array', function(){
    var arr = ['A short line', 'A little bit longer line'];
    var result = boxd(arr);

    it('should return a boxed string with line breaks', function(){
      expect(result).to.be.a('string');
      expect(result).to.equal('┌────────────────────────┐\n│A short line            │\n│A little bit longer line│\n└────────────────────────┘\n');
    })
  });

});
