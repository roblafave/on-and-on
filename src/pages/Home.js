// react
import React, { Component } from 'react';
import { Link } from 'react-router';

// firebase
// import fire from '../fire';

// components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// assets
import logo from '../assets/logo.svg';
import socialFB from '../assets/images/icons/social/facebook.svg';
import socialInstagram from '../assets/images/icons/social/instagram.svg';
import socialTwitter from '../assets/images/icons/social/twitter.svg';

class Home extends Component {

	render() {
		return (
			<div>
				<Navbar />
				<section className='hero'>

					<div className='container'>
						<div className='row mb-200'>
							<div className='col-sm-12'>
								<div className='row hero-container-text'>
									<h2>This is the home page</h2>
									<div className='divider-clay mt-30'></div>
									<p className='mt-40'>We will put home page content in this section.</p>
								</div>
								<div className='row hero-container-btn mt-30 mb-4 0'>
									<div className='col-sm-3'></div>
									<div className='col-sm-6'>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='container'>
						<div className='row mb-200'>

						</div>
					</div>

				</section>

				<Footer />
			</div>
		);
	}
}

export default Home;
