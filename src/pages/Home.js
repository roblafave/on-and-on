// react
import React, { Component } from 'react';
import { Link } from 'react-router';

// firebase
// import fire from '../fire';

// components
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
				<section className='hero'>

					<div className='container'>
						<div className='row'>
							<div className='col-sm-12'>
								<div className='row hero-container-text'>
									<h2>Hey Marc, this is cool!</h2>
									<div className='divider-honey mt-30'></div>
									<p className='mt-20'>We visit cool tech companies, prep you for your internship, and connect you with boss advisors to help you get ahead of the game.</p>
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

				<aside className='programs-quote-container bg-honey center-block'>
					<div className='container'>
						<div className='row'>
							<div className='col-sm-12'>
								<h3>Technology is the great accelerator – it's the single biggest supercharger that will fuel your passion and drive your success.</h3>
							</div>
						</div>
					</div>
				</aside>

				<section className='press-quote-container'>
					<div className='container'>
						<div className='row'>
							<div className='col-sm-12'>
								<h3>As Seen In</h3>
								<div className='h-grey'>
									<a href='http://www.forbes.com/sites/geekgirlrising/2016/09/13/meet-the-high-school-girls-taking-on-silicon-valley/#4d1712cf71c9' target='blank'>
										<h3>“Meet The High School Girls Taking Silicon Valley By Storm”</h3>
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className=''>
					<h3>Join the conversation</h3>
					<img src={ logo } className={ 'center-block'} style={{ width: 225 }} alt="BUILTBYGIRLS" />
					<div className='divider-honey mt-30'></div>
				</section>

				<footer className='main-footer'>
					<div className='container'>
						<nav className='footer-nav'>
						</nav>

						<nav className="social-nav">
							<a className="social-instagram" href="https://instagram.com/builtbygirls" target="_blank">
								<img src={ socialInstagram } alt='#BUILTBYGIRLS Girls Who Fund' className='social-instagram-icon' />
							</a>

							<a className="social-twitter" href="https://twitter.com/builtbygirls" target="_blank">
								<img src={ socialTwitter } alt='#BUILTBYGIRLS Girls Who Fund' className='social-twitter-icon' />
							</a>

							<a className="social-facebook" href="https://facebook.com/builtbygirls" target="_blank">
								<img src={ socialFB } alt='#BUILTBYGIRLS Girls Who Fund' className='social-facebook-icon' />
							</a>

						</nav>
					</div>
				</footer>

				<Footer />
			</div>
		);
	}
}

export default Home;
