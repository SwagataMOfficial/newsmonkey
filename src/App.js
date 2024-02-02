import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
// import Spinner from './components/Spinner.js';
import About from './components/About.js';
import Error from './components/Error.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


export default class App extends Component {
	// this code below is the tutorial of how to use .env.local variables to hide secrets.
	// password = process.env.REACT_APP_PASSWORD;

	state = {
		progress : 0
	}

	setProgress = (progress)=> {
		this.setState({ progress : progress });
	}

	componentDidMount() {
        this.setProgress(40);
        setTimeout(() => {
            this.setProgress(100);
        }, 300);
    }

	render() {
		// console.log("Hidden Password :", this.password);
		return (
			<>
				<Router>
					<Navbar title="NewsMonkey" />
					<LoadingBar color={"#f11946"} progress={this.state.progress} onLoaderFinished={() => this.setProgress(0)} />
					<Routes>
						<Route exact path='/' element={<News name="swagata" />} />
						<Route exact path='/about' element={<About setProgress={this.setProgress} />} />
						<Route exact path='/*' element={<Error />} />
					</Routes>
				</Router>
			</>
		);
	}
}
