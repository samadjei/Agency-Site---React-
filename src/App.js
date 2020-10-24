import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import gsap from 'gsap';
import './styles/App.scss';

//Components
import Navigation from './components/navigation';
import Header from './components/header.js';

// Pages
import Home from './pages/home.js';
import CaseStudies from './pages/caseStudies';
import Approach from './pages/approach';
import Services from './pages/services';
import About from './pages/about';

const routes = [
	{ path: '/', name: 'Home', Component: Home },
	{ path: '/case-studies', name: 'Case Studies', Component: CaseStudies },
	{ path: '/appraoch', name: 'Appraoch', Component: Approach },
	{ path: '/services', name: 'Services', Component: Services },
	{ path: '/about-us', name: 'About Us', Component: About },
];

function debounce(fn, ms) {
	let timer;
	return () => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			timer = null;
			fn.apply(this, arguments);
		}, ms);
	};
}

function App() {
	// get ride of the flash when the screen reloads
	gsap.to('body', 0, { css: { visibility: 'visible' } });
	// define a dimension state
	const [dimensions, setDimensions] = useState({
		// cpturing the width and height and setting them to the width and height properties
		height: window.innerHeight,
		width: window.innerWidth,
	});

	useEffect(() => {
		// Grab inner heihgt of window for mobile reasons when delaing with vh
		let vh = dimensions.height * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);

		// sets the state to the height and width
		const debouncedHandleResize = debounce(function handleResize() {
			setDimensions({
				height: window.innerHeight,
				width: window.innerWidth,
			});
		}, 1000);

		window.addEventListener('resize', debouncedHandleResize);

		// removes the event listener from the window
		return () => {
			window.removeEventListener('resize', debouncedHandleResize);
		};
	});
	return (
		<>
			<Header dimensions={dimensions} />
			{console.log(dimensions)}
			{/* map through the routes and return the components */}
			<div className="App">
				{routes.map(({ path, Component }) => (
					<Route key={path} exact path={path}>
						<Component />
					</Route>
				))}
			</div>
			<Navigation />
		</>
	);
}

export default App;
