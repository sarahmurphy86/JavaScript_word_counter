const PubSub = require('../helpers/pub_sub.js');
const ResultView = function(){

};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('WordCounter: result', (evt) => {
    const result = evt.detail;
    // console.log(result);
    this.updateView(result);
  })

};

ResultView.prototype.updateView = function (result) {
  const resultElement = document.querySelector('#result')
  resultElement.textContent = `You entered ${result} words`
};
module.exports = ResultView;
