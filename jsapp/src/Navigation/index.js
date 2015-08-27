var React = require('react');

var Navigation = React.createClass({
  render: function(){
    return (
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    )
  }
});
module.exports = Navigation;
