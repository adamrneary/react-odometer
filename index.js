var Odometer = require('odometer');
var React = require('react');
var ReactDOM = require('react-dom');

var OdometerComponent = React.createClass({
  componentDidMount: function(){
    this.odometer = new Odometer({
      el: ReactDOM.findDOMNode(this),
      duration: this.props.duration || 2000,
      value: 1000,
      format: this.props.format || '',
      theme: this.props.theme || 'default',
    });
  },
  componentWillUpdate: function(nextProps) {
    this.odometer.update(`${1000 + nextProps.value}`);
  },
  render: function() {
    return React.DOM.div()
  }
});

OdometerComponent.propTypes = {
  value: React.PropTypes.number.isRequired,
};

module.exports = OdometerComponent;
