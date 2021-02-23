import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../Styles/Login.css";
import LoginImg from "../login.png";
import { Button } from "@material-ui/core";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import Logo from "../omnibiz_logo.png";
import auth from "../firebase";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();

	const history = useHistory();

	const handleLogin = () => {
		auth
			.signInWithEmailAndPassword(email, password)
			.then((userAuth) => {
				dispatch(
					login({
						email: userAuth.user.email,
						uuid: userAuth.user.uid,
						displayName: email,
					})
				);
			})
			.then(history.push("/"))
			.catch((error) => {
				alert(error);
			});
	};

	const handleRegister = () => {
		if (!email || !password) {
			return alert("Please enter a test email and password");
		}
		auth
			.createUserWithEmailAndPassword(email, password)
			.then((userAuth) => {
				userAuth.user
					.updateProfile({
						displayName: email,
					})
					.then(() => {
						dispatch(
							login({
								email: userAuth.user.email,
								uuid: userAuth.user.uid,
								displayName: email,
							})
						);
					});
			})
			.then(history.push("/"))
			.catch((error) => {
				alert(error);
			});
	};
	return (
		<div className="login">
			<div className="login__left">
				<img src={LoginImg} alt="" />
			</div>
			<div className="login__right">
				<div className="login__logo">
					<img src={Logo} alt="" onClick={() => history.push("/")} />
				</div>
				<div className="loginEmail">
					<p>Email/Login id</p>
					<div className="loginEmail__input">
						<MailOutlineIcon />
						<input
							type="email"
							placeholder="hello@gmail.com"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
				</div>
				<div className="loginPassword">
					<p>Password</p>

					<div className="loginPassword__input">
						<LockOutlinedIcon className="lock" />
						<input
							type="password"
							placeholder="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<VisibilityOutlinedIcon className="eye" />
					</div>
				</div>
				<div className="login__button">
					<Button onClick={handleLogin}>Login</Button>
				</div>
				<div className="login__signup">
					<p>
						Don't have an account ?{" "}
						<span onClick={handleRegister}>Register</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Login;
