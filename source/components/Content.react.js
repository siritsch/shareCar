/* vim: set ts=4 */
var React = require('react');
var createRectClass = require('create-react-class');
var GoogleMapsLoader = require('google-maps');

GoogleMapsLoader.KEY = 'AIzaSyBhaobI6vImnVVO4BksSOHkQJfcDynhuzs';

var Content = createRectClass({
	getInitialState: function() {
		return {
			map: null
		};
	},

	componentDidMount: function() {
		GoogleMapsLoader.load(function(google) {
			var pos = {lat: 52.255, lng: 10.373};
			var map = new google.maps.Map(document.getElementById("map"), {
				center: pos,
				zoom: 12
			});

			var marker = new google.maps.Marker({
				position: pos,
				map: map
			});

			this.setState({  map: map });
		});
	},

	render: function() {
		var html = <div id="map"></div>;

		return html;
	}
});


module.exports = Content;

