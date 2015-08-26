'use strict';

var React = require('react');

var App = React.createClass({
  displayName: 'App',
  componentDidMount: function(){
    alert('hello');
  },
  handleClick: function(){
    alert(this.props.name);
  },
  render: function() {
    return <div onClick={this.handleClick}>Hello {this.props.name}!</div>;
  }
});

module.exports = App;
