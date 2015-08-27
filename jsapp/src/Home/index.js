'use strict';

var React = require('react');

var Index = React.createClass({
  displayName: 'HomeIndex',


  handleClick: function(){
    alert(this.props.name);
  },
  render: function() {
    return  (
      <a onClick={this.handleClick} className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></a>
    )
  }
});

if (typeof window !== 'undefined') {
  // the variable is defined

  var data = window.DATA;
  React.render(<Index {...data} />, document.getElementById('react-app'));
} else {
  module.exports = Index;
}

