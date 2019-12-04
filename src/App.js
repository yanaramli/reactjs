import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Test from './components/Test.js';
import { Header } from './components/Header';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Header />
				<br />

				<Test />
			</React.Fragment>
		);
	}
}

export default App;
