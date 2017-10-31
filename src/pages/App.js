import React, { Component } from 'react';
import '../assets/App.css';
import '../assets/signature-pad.css';
// import fire from '../fire';
// import { Link } from 'react-router';
//import Navbar from '../components/Navbar';

// import appState from '../appState'
//import { observer } from 'mobx-react';


class App extends Component {

	render() {
		return (
			<div className='App'>
				{this.props.children}
			</div>
		);
	}
}

export default App;
