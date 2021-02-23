import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Styles/Header.css";
import Logo from "../omnibiz_logo.png";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { logout, selectUser } from "../features/userSlice";
import auth from "../firebase";

const Header = () => {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();
	const handleLogout = () => {
		dispatch(logout());
		auth.signOut();
	};

	return (
		<div className="header">
			<div className="header__logo">
				<Link to="/">
					<img src={Logo} alt="" />
				</Link>
			</div>
			<div className="header__menu">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>Solutions</li>
				<li>Company</li>
				<li>Resources</li>
				<li>Contact Us</li>
			</div>
			<div className="header__right">
				<li>Request Demo</li>
				{user ? (
					<Button variant="contained" color="primary">
						<Link to="/login" onClick={handleLogout}>
							Logout
						</Link>
					</Button>
				) : (
					<Button variant="contained" color="primary">
						<Link to="/login">Login</Link>
					</Button>
				)}
			</div>
		</div>
	);
};

export default Header;
