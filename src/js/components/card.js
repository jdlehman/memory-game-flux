var React = require('react/addons');
var CardActionCreator = require('../actions/cardActionCreator');

module.exports = React.createClass({
  handleClick: function() {
    if(!(this.props.flipped || this.props.matched)) {
      CardActionCreator.flipCard(this.props);
    }
  },
  render: function() {
    var classes = React.addons.classSet({
      'flipped': this.props.flipped,
      'matched': this.props.matched,
      'card': true
    });
    var content = this.props.flipped ? this.props.type : '?';
    return (
      <div onClick={this.handleClick} className={classes}>
        {content}
      </div>
    );
  }
});
