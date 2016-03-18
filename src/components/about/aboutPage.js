"use strict";

var React = require('react');

var About = React.createClass({
	render: function() {
		return (
			<div>
				<h1>About</h1>
				<p> 
					This application uses the following techs:
					<ul>
						<li>blah</li>
					</ul>
				</p>
			</div>
		);
	}
});


module.exports = About;