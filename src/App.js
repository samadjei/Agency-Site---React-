import React, { useEffect } from 'react';
import Banner from './components/banner.js';
import Header from './components/header.js';
import './styles/App.scss';

function App() {
	useEffect(() => {
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	}, []);
	return (
		<div className="App">
			<Header />
			<Banner />
		</div>
	);
}

export default App;
