var Flux = require('delorean').Flux;

module.exports = Flux.createDispatcher({
  flipCard: function(card) {
    this.dispatch('card:flip', card);
  },
  getStores: function() {
    return {
      gameStore: require('../stores/gameStore')
    };
  }
});
