var React = require('react');
var Flux = require('delorean').Flux;
var Card = require('./card');

module.exports = React.createClass({
  mixins: [Flux.mixins.storeListener],
  render: function(){
    return (
      <div>
        {this.getStore('gameStore').cards.map(function(card) {
           return <Card key={card.id} id={card.id} type={card.type} flipped={card.flipped} matched={card.matched} />;
        })}
      </div>
    );
  }
});
