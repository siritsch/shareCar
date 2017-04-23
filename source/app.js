var React = require('react');
var ReactDom = require('react-dom');
var Application = require('./components/Application.react');

function showMap() {
	Application.showMap();
}

ReactDom.render(<Application />, document.getElementById('react-application'));
