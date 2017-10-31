// react
import React, { Component } from 'react';
// import Script from 'react-load-script';
// import { Link } from 'react-router';

// components
// components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// assets
// import logo from '../assets/logo.svg';
// import logoW from '../assets/images/logos/logo-w.svg';
// import socialFBW from '../assets/images/icons/social/facebook-w.svg';
// import socialInstagramW from '../assets/images/icons/social/instagram-w.svg';
// import socialTwitterW from '../assets/images/icons/social/twitter-w.svg';
import photoNisha from '../assets/images/photos/team/nisha.png';
import photoDanielle from '../assets/images/photos/team/danielle.jpg';
import photoTory from '../assets/images/photos/team/tory.jpg';



class Appointments extends Component {

	render() {
		return (
			<div>
				<Navbar />
				<section className='hero'>
					<div className='appointments-hero-container-img'></div>
					<div className='container'>
						<div className='row hero-container-text'>
							<div className='col-sm-12'>
								<h1>Appointments</h1>
							</div>
						</div>
						<div className='row mb-200'>
							<div className='col-sm-12'>

							</div>
						</div>
					</div>
				</section>

				<section>
					<div className='container'>
						<div className='row'>
							<div className='col-sm-12'>

							</div>
						</div>
					</div>
				</section>
				<Footer />
			</div>
		);
	}
}

export default Appointments;
