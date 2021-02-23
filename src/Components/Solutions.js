import React from "react";
import "../Styles/Solutions.css";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Graph from "../Graph.png";

const Solutions = () => {
	return (
		<div className="solutions">
			<div className="solutions__header">
				<h2>Our Solutions</h2>
				<p>
					We are focused on helping companies in improving their distribution
					network and its contribution to sales. We do this by providing a
					unified platform to manage all your sales channels and your customers.
				</p>
			</div>
			<div className="solutions__container">
				<div className="solutions__left">
					<div className="solutions__sales__header">
						<h4>Sales Force Automation</h4>
					</div>
					<div className="solutions__sales__body">
						<p>
							Empower your sales force with the right customer data, optimized
							route plans and an easy to use application to maximize sales
							orders and efficiently track stock through primary and secondary
							levels.
						</p>
					</div>
					<div className="solutions__sales__link">
						<p>Learn More</p>
						<ArrowForwardIcon />
					</div>
				</div>
				<div className="solutions__right">
					<img src={Graph} alt="" />
				</div>
			</div>
		</div>
	);
};

export default Solutions;
