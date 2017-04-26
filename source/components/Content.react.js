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

	bookcar: function() {
		console.log('Fahrzeug gebucht');
	},

	render: function() {
		var html = <div id="map"></div>;
		var map = this.state.map;
		var classPtr = this;

		if (map != null) {
			console.log(this.props.cars);
			this.props.cars.forEach(function(car, index, arr) {
				var marker = new google.maps.Marker({
					position: car.position,
					map: map
				});

				marker.addListener('click', function() {
					var row1 = '<tr><td>Kennzeichen:</td><td>' + car.Kennzeichen + '</td></tr>';
					var row2 = '<tr><td>Ladezustand:</td><td>' + car.Ladezustand + '</td></tr>';
					var row3 = '<tr><td><button class=&quot;btn btn-default&quot; onclick={classPtr.bookcar();} >Buchen</button></td><td></td></tr>';
					var table = '<table>' + row1 + row2 + row3 + '</table>';

					var info = new google.maps.InfoWindow({
						content: table
					});

					info.open(map, marker);
				});
			});
		}

		return html;
	}
});


module.exports = Content;

