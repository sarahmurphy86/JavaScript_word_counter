const InputView = require ('./views/input_view.js');
const WordCounter = require('./models/word_counter.js');
const ResultView = require ('./views/result_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const inputView = new InputView();
  inputView.bindEvents();

  const wordCounter = new WordCounter();
  wordCounter.bindEvents();

  const resultView = new ResultView();
  resultView.bindEvents();


});
