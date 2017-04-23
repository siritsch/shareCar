import React from 'react'

class Menu extends React.Component {
	render() {
		var html = <nav className="navbar navbar-default">
			<div className="container-fluid">
				<div className="navbar-header">
					<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#sh-menu">
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span> 
					</button>
				</div>
				<div className="collapse navbar-collapse" id="sh-menu">
					<ul className="nav navbar-nav">
						<li><a href="">Home</a></li>
						<li><a href="">Registrieren</a></li>
						<li><a href="">Anmelden</a></li>
						<li><a href="">Reservieren</a></li>
						<li><a href="">Mieten</a></li>
					</ul>
				</div>
			</div>
		</nav>;

		return html;
	}
}

module.exports = Menu;
