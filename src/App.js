import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import gsap from 'gsap';
import './styles/App.scss';
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

function App() {
	useEffect(() => {
		// Grab inner heihgt of window for mobile reasons when delaing with vh
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);

		// get ride of the flash when the screen reloads
		gsap.to('body', 0, { css: { visibility: 'visible' } });
	});
	return (
		<>
			{/* map through the routes and return the components */}

			<Header />
			<div className="App">
				{routes.map(({ path, Component }) => (
					<Route key={path} exact path={path}>
						<Component />
					</Route>
				))}
			</div>
		</>
	);
}

export default App;
