var React = require('react');
var ReactDom = require('react-dom');

var OdometerComponent = React.createClass({
    componentDidMount: function(){
        this.odometer = new Odometer({
            el: ReactDom.findDOMNode(this),
            value: this.props.value
        });
    },
    componentDidUpdate: function() {
        this.odometer.update(this.props.value)
    },
    render: function() {
        return React.DOM.div()
    }
})

module.exports = OdometerComponent;
