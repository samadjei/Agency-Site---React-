import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
	return (
		<nav>
			<div className="container">
				<div className="nav-columns">
					<div className="nav-column">
						<div className="nav-label">Menu</div>
						<ul className="nav-links">
							{/* NavLink allows us to stay in the routing of our page and not refresh the page  */}
							<li>
								<NavLink to="/case-studies" exact>
									{' '}
									Case Studies
								</NavLink>
							</li>
							<li>
								<NavLink to="/approach" exact>
									{' '}
									Appraoch
								</NavLink>
							</li>
							<li>
								<NavLink to="/services" exact>
									{' '}
									Services
								</NavLink>
							</li>
							<li>
								<NavLink to="/about-us" exact>
									{' '}
									About Us
								</NavLink>
							</li>
						</ul>
					</div>
					<div className="nav-column">
						<div className="nav-label">Contact</div>
						<div className="nav-infos">
							<ul className="nav-info">
								<li className="nav-info-label">Email</li>
								<li>
									<NavLink to="/contact" exact>
										{' '}
										Get in touch with us
									</NavLink>
								</li>
								<li>
									<NavLink to="/audit" exact>
										{' '}
										Get a free audit
									</NavLink>
								</li>
							</ul>
							<ul className="nav-info">
								<li className="nav-info-label">Headquaters</li>
								<li>51537 Jazmyne Lodge</li>
								<li>Suite 029</li>
								<li>Aruba</li>
							</ul>
							<ul className="nav-info">
								<li className="nav-info-label">Phone</li>
								<li>264.516.6631</li>
							</ul>
							<ul className="nav-info">
								<li className="nav-info-label">Legal</li>
								<li>Privacy and Cookies</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navigation;
