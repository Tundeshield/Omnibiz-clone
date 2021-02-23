import { Button } from "@material-ui/core";
import React from "react";
import "../Styles/HeaderBanner.css";
import HeaderPhoto from "../HeaderPhoto.png";

const HeaderBanner = () => {
	return (
		<div className="headerBanner">
			<div className="headerBanner__left">
				<div className="headerBanner__left__title">
					<h1>
						Omnibiz helps <br />
						you <span>get closer</span> to your customers
					</h1>
				</div>
				<div className="headerBanner__left__subtitle">
					<p>
						With all your sales channels in one place, we help make your
						processes agile to meet the demands of today’s resellers and
						consumers
					</p>
				</div>
				<Button>Request Demo</Button>
			</div>
			<div className="headerBanner__right">
				<img src={HeaderPhoto} alt="" />
			</div>
		</div>
	);
};

export default HeaderBanner;
