/* vim: set ts=4 */
var React = require('react');
var createRectClass = require('create-react-class');
var GoogleMapsLoader = require('google-maps');

GoogleMapsLoader.KEY = 'AIzaSyBhaobI6vImnVVO4BksSOHkQJfcDynhuzs';

var classPtr = null;

var Content = createRectClass({
	getInitialState: function() {
		return {
			map: null
		};
	},

	componentDidMount: function() {
		classPtr = this;
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

			var state = { map: map };

			classPtr.setState(state);
		});
	},

	render: function() {
		var html = <div id="map"></div>;
		var map = this.state.map;

		if (map != null) {
			console.log(this.props.cars);
			this.props.cars.forEach(function(car, index, arr) {
				var marker = new google.maps.Marker({
					position: car.position,
					map: map
				});

				marker.addListener('click', function() {
				});
			});
		}

		return html;
	}
});


module.exports = Content;

