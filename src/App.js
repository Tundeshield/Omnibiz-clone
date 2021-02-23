import "./App.css";
import Header from "./Components/Header";
import HeaderBanner from "./Components/HeaderBanner";
import Ordermgt from "./Components/Ordermgt";
import Solutions from "./Components/Solutions";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login";
import { useEffect, useState } from "react";
import auth from "./firebase";
import { useDispatch } from "react-redux";
import { login, logout } from "./features/userSlice";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		auth.onAuthStateChanged((userAuth) => {
			if (userAuth) {
				dispatch(
					login({
						email: userAuth.email,
						uuid: userAuth.uid,
					})
				);
			} else {
				dispatch(logout);
			}
		});
	}, [dispatch]);

	return (
		<div className="app">
			<Router>
				<Switch>
					<Route path="/" exact>
						<Header />
						<HeaderBanner />
						<Solutions />
						<Ordermgt />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
