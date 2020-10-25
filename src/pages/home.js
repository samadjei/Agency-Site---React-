import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import IntroOverlay from '../components/introOverlay.js';
import Banner from '../components/banner.js';
import Cases from '../components/cases.js';

// timeline
const tl = gsap.timeline();

// Animation Variable
// allows you to return the function when the animation is compelte
// this would remove the black overlay (unmounts it)
const homeAnimation = (completeAnimation) => {
	tl.from('.line span', 1.5, {
		y: 100,
		ease: 'power4.out',
		delay: 0.7,
		skeyY: 7,
		stagger: {
			amount: 0.3,
		},
	})
		.to('.overlay-top', 1.2, {
			height: 0,
			ease: 'expo.inOut',
			stagger: 0.2,
		})
		.to('.overlay-bottom', 1.4, {
			width: 0,
			ease: 'expo.inOut',
			delay: -0.6,
			stagger: {
				amount: 0.4,
			},
		})
		// allows you to hover again
		.to('.intro-overlay', 0, {
			css: {
				display: 'none',
			},
		})
		.from('.case-image img', 1.6, {
			scale: 1.4,
			ease: 'expo.inOut',
			delay: -2,
			stagger: {
				amount: 0.4,
			},
			// changes its state
			onComplete: completeAnimation,
		});
};

function Home() {
	// lets us know whether the animation is complete or not
	const [animationComplete, setAnimationComplete] = useState(false);

	const completeAnimation = () => {
		setAnimationComplete(true);
	};

	useEffect(() => {
		// returns the homes animation
		homeAnimation(completeAnimation);
	}, []);
	return (
		<>
			{/* we want to check when animation is set to false, we want to return IntroOverlay and when completeAnimation is set to true, we want to completely unmount it and not reutn anything at all  */}
			{animationComplete === false ? <IntroOverlay /> : ''}
			<IntroOverlay />
			<Banner />
			<Cases />
		</>
	);
}

export default Home;
