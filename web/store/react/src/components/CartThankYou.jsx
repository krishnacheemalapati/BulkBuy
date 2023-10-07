import React from 'react';
import { Link } from "react-router-dom";

class CartThankYou extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container">
				<div className="cartCenter">
					<div className="emptyCartContainer">
						<div className="emptyCart">
							<img className="emptyCartImg" src="/static/img/shopping-cart.svg" />
							<div className="emptyCartText">Thank you for your purchase!</div>
							<div className="emptyCartText">You will be contacted when a shopper chooses your order.</div>
							<Link to="/"><button className="blueButton">Back to menu</button></Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CartThankYou;
