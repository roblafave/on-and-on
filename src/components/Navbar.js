import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';
import firebase from 'firebase';
import logo from '../assets/logo.svg';
import hamburger from '../assets/hamburger.svg';

class Navbar extends Component {

	render() {

		return (
			<nav className="navbar navbar-default">
				<div className="nav-container">
					<div className="navbar-header">
						

						<Link to="/wave" className='navbar-brand'><img src={ logo } style={{ width: 200 }} alt="BUILTBYGIRLS" /></Link>

					</div>


				</div>
			</nav>
		);
	}
}

export default Navbar;
