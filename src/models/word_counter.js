const PubSub = require('../helpers/pub_sub.js');

const WordCounter = function (){

}

WordCounter.prototype.bindEvents = function () {
  PubSub.subscribe('InputView: words-inputted', (evt) => {
    const inputtedWords = evt.detail;
    const result = this.countWords(inputtedWords);
    PubSub.publish('WordCounter: result', result);
  })
};


WordCounter.prototype.countWords = function(string) {
  return string.split(" ").length;
};
module.exports = WordCounter;
