import React from "react";
import logo from "./logo.svg";
import "./Navbar.css";

function Navbar() {
	return (
		<nav className="navbar f row">
			<div className="navbar-brand">
				<a className="navbar-item" href="./">
					<img src={logo} alt="Logo" width="50" height="50" />
				</a>
			</div>
			<div className="navbar-menu f">
				<a className="n navbar-item" href="./">
					{" "}
					Startseite{" "}
				</a>
				<a className="n navbar-item" href="./impressum.html">
					{" "}
					Impressum{" "}
				</a>
				<a className="n navbar-item" href="./kontakt.html">
					{" "}
					Kontakt{" "}
				</a>
			</div>
		</nav>
	);
}

export default Navbar;
