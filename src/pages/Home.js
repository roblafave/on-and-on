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
						<div className='row'>
							<div className='col-sm-12'>
								<div className='row hero-container-text'>
									<h2>This is the home page</h2>
									<div className='divider-clay mt-30'></div>
									<p className='mt-20'>We will put home page content in this section.</p>
								</div>
								<div className='row hero-container-btn mt-30 mb-4 0'>
									<div className='col-sm-3'></div>
									<div className='col-sm-6'>

									</div>
								</div>
							</div>
						</div>
					</div>
					<hr />
				</section>

				<section className='overview section-block'>
					<div className='container'>
						<div className='row text-center'>
							<div className='col-sm-4 col-xs-12 mt-30'>

								<div className='section-break size-xs'></div>
								<h5 className='tx-aol-blue h3 type-bold mb-20'>Opportunities</h5>
								<div className='section-break size-xs'></div>
								<p className='size-lg tx-aol-black pad-txt npt npb nmt nmb mb-40'>Exposing you to the countless possibilities for a career in tech</p>
								<hr className='visible-xs'></hr>
							</div>
							<div className='col-sm-4 col-xs-12	mt-30'>

								<div className='section-break size-xs'></div>
								<h5 className='tx-aol-blue h3 type-bold mb-20'>Practical Skills</h5>
								<div className='section-break size-xs'></div>
								<p className='size-lg tx-aol-black pad-txt npt npb nmt nmb mb-40'>Arming you with the tools to leverage tech for any passion</p>
								<hr className='visible-xs'></hr>
							</div>
							<div className='col-sm-4 col-xs-12 mt-30'>

								<div className='section-break size-xs'></div>
								<h5 className='tx-aol-blue h3 type-bold mb-20'>Connections</h5>
								<div className='section-break size-xs'></div>
								<p className='size-lg tx-aol-black pad-txt npt npb nmt nmb mb-40'>Building you a network of rockstar professional advisors</p>
							</div>
						</div>
					</div>
				</section>

				<Footer />
			</div>
		);
	}
}

export default Home;
