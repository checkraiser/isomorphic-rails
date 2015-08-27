'use strict';

var React = require('react');

var About = React.createClass({
  displayName: 'HomeAbout',

  handleClick: function(){
    alert(this.props.name);
  },
  render: function() {
    return <div>
      <div onClick={this.handleClick}>About</div>
      <ul className="pagination">
        <li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
        <li className="active"><a href="#!">1</a></li>
        <li className="waves-effect"><a href="#!">2</a></li>
        <li className="waves-effect"><a href="#!">3</a></li>
        <li className="waves-effect"><a href="#!">4</a></li>
        <li className="waves-effect"><a href="#!">5</a></li>
        <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
      </ul>
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

