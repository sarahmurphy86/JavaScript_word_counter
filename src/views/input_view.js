const PubSub = require('../helpers/pub_sub.js');

const InputView = function(){
};

InputView.prototype.bindEvents = function () {

  const input = document.querySelector('#wordcounter-form');
  input.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const textbox = evt.target.querySelector("#text")
    const inputtedWords = textbox.value;
    console.log(inputtedWords);
    PubSub.publish('InputView: words-inputted', inputtedWords)
    // event.preventDefault();
    // console.log(inputtedWords);
  })

};

module.exports = InputView;
