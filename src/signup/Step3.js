// react
import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import moment from 'moment';
import momentTimezone from 'moment-timezone';

// firebase
import firebase from 'firebase';

// components



// assets
import indicator3o3 from '../assets/indicator-3o3.svg'
import logo from '../assets/images/logos/logo.svg';

class Step1 extends Component {

	render() {

		return (
			<section className='container'>

				<div className='row mt-20'>
					<img src={ logo } className={ 'center-block img-responsive mt-30 mb-30'} style={{ maxHeight: 25 }} alt="On & On Logo" />
				</div>

				<div className='progress-indicator-container'>
					<div className='row'>
					<div className='progress-indicator-graphic'>
							<div className='col-xs-2 col-sm-4 '></div>
							<div className='col-xs-8 col-sm-4 center'>
								<img src={ indicator3o3 } style={{ width: '100%', }} alt="Sign Up Progress 3 of 3" />
							</div>
						</div>
					</div>
					<div className='progress-indicator-text'>
						<div className='row'>
							<div className='col-sm-3'></div>
							<div className='col-sm-6 center'>
								<h4>3 of 3</h4>
							</div>
						</div>
					</div>
				</div>

				<div className='signup-form-title'>
					<div className='row'>
						<div className='col-sm-3'></div>
						<div className='col-sm-6'>
							<h1>Payment Information</h1>
							<br/>
						</div>
					</div>
				</div>

				<div className='row signup-form-container'>
					<div className='col-sm-2'></div>
					<div className='col-sm-8'>
						<p>We will hold your card on file for your appointment and future services.</p>
						<br />
						<form noValidate>
							<div className='form-item-container'>
								<div>
									<label htmlFor='inputFirstName'>Card Number</label>
									<input className='form-control'
									maxLength={240}
									ref={ el=>this.firstNameEl = el }
									type='tel'
									placeholder='' />
								</div>
							</div>

							<div className='form-item-container'>
								<div>
									<label htmlFor='inputLastName'>CVV</label>
									<input className='form-control'
									maxLength={240}
									ref={ el=>this.lastNameEl = el }
									type='tel'
									placeholder='' />
								</div>
							</div>

							<div className='form-item-container'>
								<div>
									<label htmlFor='inputEmail'>Zip Code</label>
									<input formNoValidate className='form-control'
									maxLength={240}
									ref={ el=> this.emailEl = el }
									type='tel'
									placeholder='' />

								</div>
							</div>


							<div className='signup-form-btn-container'>
								<div className='row mt-60'>
									<div className='col-sm-2'></div>
									<div className='col-sm-8'>
										<Link to="/">
											<button type="button" className="btn btn-default btn-block">
											 Submit
											</button>
										</Link>
									</div>
								</div>
							</div>
						</form>
					</div>
					<div className='col-sm-3'></div>
				</div>
			</section>
		);
	}
}

export default Step1;
