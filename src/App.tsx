import React from "react";
import logo from "./logo.svg";
import "./Navbar.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
			</header>
		</div>
	);
}
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
