'use strict';

var React = require('react');
var Navigation = require('../Navigation/index');
var About = React.createClass({
  displayName: 'HomeAbout',
  componentDidMount: function(){
    alert('hello');
  },
  handleClick: function(){
    alert(this.props.name);
  },
  render: function() {
    return <div>
    <Navigation />
    <div onClick={this.handleClick}>About</div>
    </div>
  }
});

if (typeof window !== 'undefined') {
  // the variable is defined
  var data = window.DATA;
  React.render(<About {...data} />, document.getElementById('react-app'));
} else {
  module.exports = About;
}

