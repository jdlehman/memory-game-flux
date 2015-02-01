var Dispatcher = require('../dispatchers/dispatcher');

module.exports = {
  flipCard: function(card) {
    Dispatcher.flipCard(card);
  }
}
