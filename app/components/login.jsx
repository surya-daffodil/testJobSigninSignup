import React from 'react';
import { Link, Router } from 'react-router';
import { connect } from 'react-redux';

import { saveUser } from '../actions';
import LeftPanel from './leftpanel.jsx';
import config from '../config.js';

class Login extends React.Component{
	constructor (props) {
		super(props);
		this.state = {
			errorMessage: ""
		}
	}

	// setValue(field, e) {
 //    	let obj = {};
	// 	obj[field] = e.target.value;
	// 	console.log("setValue", e.target.value, obj)
	// 	this.setState(obj);
	// }

	save(e) {
		const { dispatch } = this.props;
		let username = document.forms[0].elements["username"].value;
		let password = document.forms[0].elements["password"].value;
		e.preventDefault();
		if(username && password){
			fetch(`${config.baseApiUrl}api/login`, {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					username,
					password
				})
			}).then((response) => {
				if(response.status == 200) {
					console.log("OK");
					this.setState({errorMessage: ""});
					dispatch(saveUser(username));
					console.log(this);
					this.context.router.push('/');
				} else {
					response.json().then((messageJSON) => {
						this.setState({errorMessage: errorJSON.message});
					}).catch((err) => {
						console.log(err);
					})
				}
			}).catch((err) => {
				console.log(err);
			});
		} else {
			this.setState({errorMessage: "Email and Password are mandatory."});
		}
	}

	render () {
		return (
			<div>
				<div className="wrapper" itemScope itemType="http://schema.org/Organization">
					<div className="main-container">
						<div className="login-page equalize">
							<LeftPanel />
							<div className="rt">
								<div className="contin">
									<div className="contw">
										<h4>Sign In to Postopia</h4>
										<form action="#" onSubmit={this.save.bind(this)}>
											<div className="form-group">
												<span style={{color: 'red'}}> {this.state.errorMessage}</span>
											</div>
											<div className="form-group">
												<input type="text" placeholder="Email" name="username" className="form-control" />
											</div>
											<div className="form-group">
												<input type="password" placeholder="Password" name="password" className="form-control" />
											</div>
											<div className="form-group">
												<a href="#" className="link">Forgot Password ?</a>
											</div>
											<input type="submit" value="Sign In" />
											<a href="#" className="captcha"><img itemProp="image" src="images/captcha.png" alt="" /></a>
										</form>
										<div className="signw text-center">
											<h6><span>or Sign In with</span></h6>
											<a href="#" className="btns fbw"><span>facebook</span></a>
											<a href="#" className="btns glw"><span>Google</span></a>
											<span className="clear"></span>
											<div className="bots">
												<h5>Don't have an account? </h5>
												<a href="/signup" className="btns"><span>Sign Up</span></a>
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

Login.contextTypes = {
  router: React.PropTypes.object.isRequired
};

Login = connect()(Login);
export default Login;