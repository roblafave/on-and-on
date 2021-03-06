// react
import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import moment from 'moment';
import momentTimezone from 'moment-timezone';

// firebase
import firebase from 'firebase';

// components



// assets
import indicator1o3 from '../assets/indicator-1o3.svg'
import logo from '../assets/images/logos/logo.svg';

class Step1 extends Component {

	handleSubmit(e) {
		e.preventDefault();

		browserHistory.push(`/wave/signup/professional/confirmation`);

	}

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
								<img src={ indicator1o3 } style={{ width: '100%', }} alt="Sign Up Progress 1 of 3" />
							</div>
						</div>
					</div>
					<div className='progress-indicator-text'>
						<div className='row'>
							<div className='col-sm-3'></div>
							<div className='col-sm-6 center'>
								<h4>1 of 3</h4>
							</div>
						</div>
					</div>
				</div>

				<div className='signup-form-title'>
					<div className='row'>
						<div className='col-sm-3'></div>
						<div className='col-sm-6'>
							<h1>Welcome</h1>
							<br/>
						</div>
					</div>
				</div>

				<div className='row signup-form-container'>
					<div className='col-sm-2'></div>
					<div className='col-sm-8'>
						<p>In order to offer the highest level of service, we ask that you please complete this intake form prior to your first appointment.</p>
						<br />
						<form noValidate>
							<div className='form-item-container'>
								<div>
									<label htmlFor='inputFirstName'>First Name</label>
									<input className='form-control'
									maxLength={240}
									ref={ el=>this.firstNameEl = el }
									type='string'
									placeholder='' />
								</div>
							</div>

							<div className='form-item-container'>
								<div>
									<label htmlFor='inputLastName'>Last Name</label>
									<input className='form-control'
									maxLength={240}
									ref={ el=>this.lastNameEl = el }
									type='string'
									placeholder='' />
								</div>
							</div>

							<div className='form-item-container'>
								<div>
									<label htmlFor='inputEmail'>Email</label>
									<input formNoValidate className='form-control'
									maxLength={240}
									ref={ el=> this.emailEl = el }
									type='email'
									placeholder='' />

								</div>
							</div>

							<div className='form-item-container'>
								<div>
									<label htmlFor='inputPhone'>Phone</label>
									<input className='form-control'
									maxLength={240}
									ref={ el=>this.phoneEl = el }
									type='tel'
									placeholder='' />

								</div>
							</div>

							<div className='form-item-container'>
								<div>
									<label htmlFor='inputBirthday'>Birthday</label>
									<input className='form-control'
									maxLength={240}
									ref={ el=>this.dobEl = el }
									type='date'
									max='2005-01-01'
									placeholder='' />

								</div>
							</div>




							<div className='signup-form-btn-container'>
								<div className='row mt-60'>
									<div className='col-sm-2'></div>
									<div className='col-sm-8'>
										<Link to="/welcome/2">
											<button type="button" className="btn btn-default btn-block">
											 Next
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
