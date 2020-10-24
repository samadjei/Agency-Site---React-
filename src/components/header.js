import React, { useState, useEffect } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { ReactComponent as UpArrow } from '../assets/up-arrow-circle.svg';
import gsap from 'gsap';

let tl = gsap.timeline();

const Header = ({ dimensions }) => {
	// we use state becuase we want to know when the menu is opened and when it is opned, we want to trigger a certain animation
	const [menuState, setMenuState] = useState({ menuOpened: false });
	useEffect(() => {
		// if the menuState animation is opened, the state will be set to true
		if (menuState.menuOpened === true) {
			// Run open menu animaiton
			gsap.to('nav', { css: { display: 'block' } });
			// when we click on the naviagtion and it opens up, we want to not be able to scroll on the body
			gsap.to('body', { css: { overflow: 'hidden' } });

			tl.to('.App', {
				duration: 1,
				y: dimensions.width <= 654 ? '70vh' : dimensions.height / 2,
				ease: 'expo.inOut',
			});
		} else {
			// Run close menu animation
		}
	}, [menuState.menuOpened]);
	return (
		<div className="header">
			<div className="container">
				<div className="row v-center space-between">
					<div className="logo">
						<a href="/">AGENCY.</a>
					</div>
					<div className="nav-toggle">
						<div onClick={() => setMenuState({ menuOpened: true })} className="hamburger-menu">
							<span></span>
							<span></span>
						</div>
						<div onClick={() => setMenuState({ menuOpened: false })} className="hamburger-menu-close">
							<UpArrow />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
