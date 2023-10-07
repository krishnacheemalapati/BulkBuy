import React from 'react';
import Logo from "./Logo";

class Header extends React.Component {

	render() {
		return (
			<footer>
				<div className="container">
					<div className="footer_inside">
						<div className="copyright">
							<Logo />
							<div className="year">© 2023</div>
						</div>
						<div className="contacts">
							<p>75 University Ave W</p>
							<p>Waterloo, ON N2L 3C5</p>
							<p>+1 647-747-4747</p>
							<p>bulk@buy.com</p>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}

export default Header;
