// react
import React, { Component } from 'react';
import { Link } from 'react-router';

// assets
//import logo from '../assets/logo.svg';
import logoW from '../assets/images/logos/logo-w.svg';
import socialFBW from '../assets/images/icons/social/facebook-w.svg';
import socialInstagramW from '../assets/images/icons/social/instagram-w.svg';
import socialTwitterW from '../assets/images/icons/social/twitter-w.svg';

class Footer extends Component {

	render() {
		return (
			<footer className='footer-container'>
				<div className='container'>
					<nav className='footer-nav-container'>
						<div className='row'>
							<div className='col-sm-3'></div>
							<div className='col-sm-2 footer-nav-item'><Link to='/'>HOME</Link></div>
							<div className='col-sm-2 footer-nav-item'><Link to='/services'>SERVICES</Link></div>
							<div className='col-sm-2 footer-nav-item'><Link to='/appointments'>APPOINTMENTS</Link></div>
							<div className='col-sm-3'></div>
						</div>
					</nav>
					<hr className='footer-hr'/>

					<nav className='social-nav mt-20'>

						<a className='social-instagram' href='https://instagram.com/onandon' target='_blank'>
							<img src={ socialInstagramW } alt='On & On' className='social-instagram-icon' />
						</a>

						<a className='social-twitter' href='https://twitter.com/onandon' target='_blank'>
							<img src={ socialTwitterW } alt='On & On' className='social-twitter-icon' />
						</a>

						<a className='social-facebook' href='https://facebook.com/onandon' target='_blank'>
							<img src={ socialFBW } alt='On & On' className='social-facebook-icon' />
						</a>
					</nav>

					<section className='footer-legal-container mb-20'>
						<p>
							<a href='#' target='_blank'>Privacy Policy</a> | <a href='#' target='_blank'>Terms of Service</a>
							<br />
							&copy; 2017 The Great Rearranged, LLC. All rights reserved.
						</p>

					</section>
				</div>
			</footer>
		);
	}
}

export default Footer;
