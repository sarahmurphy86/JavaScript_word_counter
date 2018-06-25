const PubSub = require('../helpers/pub_sub.js');
const ResultView = function(){

};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('WordCounter: result', (evt) => {
    const result = evt.detail;
    console.log(result);
    // this.updateView(result);
  })

};

ResutView.prototype.updateView = function () {
  const resultElement = document.querySelector('#result')
  resultElement.textContent = `You entered ${} words`
};
module.exports = ResultView;
