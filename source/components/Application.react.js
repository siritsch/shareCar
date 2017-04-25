var React = require('react');
var createReactClass = require('create-react-class');
var Menu = require('./Menu.react');
var Content = require('./Content.react');

var Application = createReactClass({
	getInitialState: function() {
		return {
			userID: null,
			car: null,
			reminder: null,
			availableCars: [{position: {lat: 52.26074, lng: 10.5266}, Kennzeichen: 'PE-HA 68E', Ladezustand: 87},
					{position: {lat: 52.26336, lng: 10.3649}, Kennzeichen: 'PE-HA 69E', Ladezustand: 51}]
		}
	},

	render: function() {
		var html = <div>
				<Menu />
				<Content 
					cars={this.state.availableCars} />
			</div>;
		return html;
	},

	onAddAvailableCar: function(car) {
	},

	onBookCar: function(car) {
	},

	onReleaseCar: function(car) {
	}
});

module.exports = Application;
