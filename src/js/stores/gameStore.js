var Flux = require('delorean').Flux;

module.exports = new (Flux.createStore({
  scheme: {
    cards: {
      default: [
        { id: 0, type: 'red' },
        { id: 1, type: 'green' },
        { id: 2, type: 'blue' },
        { id: 3, type: 'red' },
        { id: 4, type: 'blue' },
        { id: 5, type: 'green' }
      ]
    },
    selectedCards: {
      default: []
    },
    locked: false
  },
  actions: {
    'card:flip': 'flipCard',
  },
  flipCard: function(card) {
    if(this.locked) { return; }
    var selectedCards = this.selectedCards;
    var cards = this.cards;
    selectedCards.push(card);
    cards[card.id].flipped = true;
    this.set('selectedCards', selectedCards);
    this.checkMatch();
  },
  checkMatch: function() {
    if(this.selectedCards.length !== 2) { return; }
    var card1 = this.selectedCards[0];
    var card2 = this.selectedCards[1];
    var cards = this.cards;
    if(card1.type === card2.type) {
      cards[card1.id].matched = true;
      cards[card2.id].matched = true;
      this.set('selectedCards', []);
    }
    else {
      this.set('locked', true);
      setTimeout(function() {
        cards[card1.id].flipped = false;
        cards[card2.id].flipped = false;
        this.set('selectedCards', []);
        this.set('locked', false);
      }.bind(this), 1000);
    }
  },
  getState: function() {
    return {
      cards: this.cards
    };
  },
  initialize: function() {
  }
}))();
