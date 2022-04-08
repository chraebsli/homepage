import React from "react";
import logo from "./logo.svg";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
	return (
		<nav className="navbar f row">
			<NavLink className="navbar-brand n text-sec f row" to="/">
				<img src={logo} alt="Logo" width="50" height="50" />
				chraebsli Dienstleistungen
			</NavLink>
			<div className="navbar-content f row">
				<NavLink className="nav-link text-sec n" to="/dienstleistungen">
					Dienstleistungen
				</NavLink>
				<NavLink className="nav-link text-sec n" to="/ubersicht">
					Übersicht
				</NavLink>
				<NavLink className="nav-link text-sec n" to="/uber">
					Über mich
				</NavLink>
			</div>
		</nav>
	);
}

export default Navbar;
