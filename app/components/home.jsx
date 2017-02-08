import React from 'react';

import { connect } from 'react-redux';
import { saveUser } from '../actions';

class Home extends React.Component{
	componentWillMount () {
		const { user } = this.props;
		if(!user) {
	        this.context.router.push('/login');
	    }
	}

	logout () {
		const { dispatch } = this.props;
		dispatch(saveUser(null));
		this.context.router.push("/login")
	}

	render () {
		return (<button onClick={this.logout.bind(this)}>Logout</button>);
	}
}

Home.contextTypes = {
  router: React.PropTypes.object.isRequired
};
const mapStateToProps = (state) => {
    return { user: state.user }
}
Home = connect(mapStateToProps)(Home);
export default Home;