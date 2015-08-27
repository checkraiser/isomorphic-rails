'use strict';

var React = require('react');
var Navigation = require('../Navigation/index');
var Index = React.createClass({
  displayName: 'HomeIndex',
  componentDidMount: function(){
    alert('hello');
  },
  handleClick: function(){
    alert(this.props.name);
  },
  render: function() {
    return <div>
    <Navigation />
     <div onClick={this.handleClick}>Hello {this.props.name}!</div>
     </div>;
  }
});

if (typeof window !== 'undefined') {
  // the variable is defined
  var data = window.DATA;
  React.render(<Index {...data} />, document.getElementById('react-app'));
} else {
  module.exports = Index;
}

