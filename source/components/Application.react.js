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
			availabeCars: []
		}
	},

	render: function() {
		var html = <div>
				<Menu />
				<Content 
					type="map" 
					id="content" 
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
