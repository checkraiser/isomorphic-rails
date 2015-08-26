var React = require('react');
var App = require('./App');
var data = window.DATA;
React.render(<App {...data} />, document.getElementById('react-app'));
