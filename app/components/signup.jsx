import React from 'react';
import { Link } from 'react-router';

import LeftPanel from './leftpanel.jsx';
import config from '../config.js';

class Signup extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			city: '',
			password: '',
			confirmPassword: '',
			birthDate: '',
			errorMessage: ''
		}
	}

	setValue(field, e) {
		let obj = {};
		obj[field] = e.target.value;
		this.setState(obj);
	}
	componentDidMount() {
		$(".date-picker").datepicker({
			format: "yyyy-mm-dd",
			endDate: new Date()
		});
	}

	cancel() {
		this.setState({
			firstName: '',
			lastName: '',
			email: '',
			city: '',
			password: '',
			confirmPassword: '',
			birthDate: '',
			errorMessage: ''
		});
	}

	save(e) {
		e.preventDefault();
		let {
				firstName,
				lastName,
				mobileNo,
				email,
				city,
				state,
				country,
				zipcode,
				password,
				birthDate,
				gender
			} = this.state;
		let data = {
			firstName,
			lastName,
			mobileNo,
			email,
			city,
			state,
			country,
			zipcode,
			password,
			birthDate,
			gender
		}
		if(firstName && lastName && email && password && birthDate){
			fetch(config.baseApiUrl+'api/users/signup', {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			}).then((response) => {
				response.json().then((outputJSON) => {
					this.setState({errorMessage: outputJSON.message});
				}).catch((err) => {
					console.log(err);
				});
			}).catch((err) => {
				console.log(err);
			});
		} else {
			this.setState({errorMessage: "First Name, Last Name, Email , Password and Birth Date are mandatory."});
		}
	}

	render () {
		return (
			<div>
				<div className="wrapper" itemScope itemType="http://schema.org/Organization">
					<div className="main-container">
						<div className="login-page signup-page equalize">
							<LeftPanel/>
							<div className="rt">
								<div className="contin">
									<div className="contw">
										<h4>Join Postopia</h4>
										<form action="#" onSubmit={this.save.bind(this)}>
											<div className="form-group">
												<span style={{color: 'red'}}> {this.state.errorMessage}</span>
											</div>
											<div className="form-group">
												<div className="row">
													<div className="col-xs-6">
														<input type="text" placeholder="First Name" className="form-control" onChange={this.setValue.bind(this, 'firstName')} />
													</div>
													<div className="col-xs-6">
														<input type="text" placeholder="Last Name" className="form-control" onChange={this.setValue.bind(this, 'lastName')} />
													</div>
												</div>
											</div>
											<div className="form-group">
												<input type="text" placeholder="Email" className="form-control" onChange={this.setValue.bind(this, 'email')} />
											</div>
											<div className="form-group">
												<input type="text" placeholder="City" className="form-control" onChange={this.setValue.bind(this, 'city')} />
											</div>
											<div className="form-group">
												<input type="password" placeholder="Password" className="form-control" onChange={this.setValue.bind(this, 'password')} />
											</div>
											<div className="form-group">
												<input type="password" placeholder="Confirm Password" className="form-control" onChange={this.setValue.bind(this, 'confirmPassword')} />
											</div>
											<div className="form-group">
												<label>Birth Date</label>
												<input className="form-control date-picker" onChange={this.setValue.bind(this, 'birthDate')}/>
												<span className="clear"></span>
											</div>
											<div className="form-group">
												<h6>By clicking Create an account, you agree to our Terms 
												  and that you have read our Data Policy, including our Cookie Use.
												</h6>
											</div>
											<a href="#" className="captcha"><img itemProp="image" src="images/captcha.png" alt="" /></a>
											<input type="submit" value="Create an account" />
										</form>
										<div className="signw text-center">
											<div className="bots">
												<h5>Have an account?</h5>
												<a href="/login" className="btns"><span>Sign In</span></a>
												<span className="clear"></span>
											</div>
										</div>
									</div>
								</div>
								<div className="topt">
									<h6>Language</h6>
									<div className="form-group">
										<select>
											<option>English</option>
											<option>English</option>
											<option>English</option>
										</select>
										<span className="clear"></span>
									</div>
									<span className="clear"></span>
								</div>
								<div className="bott">
									<div className="container-fluid">
										<div className="row">
											<div className="col-lg-5">
												<h6>&copy; Postopia, Inc. 2016, All rights reserved</h6>
											</div>
											<div className="col-lg-7">
												<div className="links">
													<ul>
														<li><a href="#">About       </a></li>
														<li><a href="#">Terms       </a></li>
														<li><a href="#">Privacy       </a></li>
														<li><a href="#">Help       </a></li>
														<li><a href="#">Press       </a></li>
													</ul>
													<span className="clear"></span>
												</div>
											</div>
										</div>
										<span className="clear"></span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

Signup.contextTypes = {
	router: React.PropTypes.object.isRequired
};

export default Signup;
