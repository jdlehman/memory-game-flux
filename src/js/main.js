var React = require('react');
var Game = require('./components/game');
var Dispatcher = require('./dispatchers/dispatcher');

React.render(<Game dispatcher={Dispatcher}/>, document.getElementById('main'));
