import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';
import firebase from 'firebase';
import logo from '../assets/images/logos/logo.svg';
import hamburger from '../assets/hamburger.svg';

class Navbar extends Component {

	render() {

		return (
			<nav className="navbar navbar-default">
				<div className="nav-container">
					<div className="navbar-header">
						<Link to="/" className='navbar-brand'><img src={ logo } style={{ width: 100 }} alt="On & On" /></Link>
					</div>


				</div>
			</nav>
		);
	}
}

export default Navbar;
