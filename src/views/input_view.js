const PubSub = require('../helpers/pub_sub.js');

const InputView = function(){
};

InputView.prototype.bindEvents = function () {

  const input = document.querySelector('#text');
  input.addEventListener('input', (evt) => {
    const inputtedWords = evt.target.value;
    PubSub.publish('InputView: words-inputted', inputtedWords)

    // console.log(inputtedWords);
  })

};

module.exports = InputView;
