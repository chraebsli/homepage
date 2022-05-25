// import libraries
import React from "react";
import { NavLink } from "react-router-dom";

// import assets and css
import logo from "./assets/logo.svg";
import menuIcon from "./assets/menu.svg";
import "./Header.css";

// render the header component
const Header = () => (
	<header className="f row">
		<NavLink className="navbar-brand n text-sec f row" to="/">
			<img src={logo} alt="logo" width="50" height="50" />
			chraebsli Dienstleistungen
		</NavLink>

		<nav className="navbar-content desktop f row">
			<NavLink className="nav-link text-sec n" to="/dienstleistungen">
				Dienstleistungen
			</NavLink>
			<NavLink className="nav-link text-sec n" to="/ubersicht">
				Übersicht
			</NavLink>
			<NavLink className="nav-link text-sec n" to="/kontakt">
				Kontakt
			</NavLink>
		</nav>

		<nav className="navbar-content mobile f col">
			<div className="dropdown">
				<div className="dropdown-btn">
					<img src={menuIcon} alt="menu" width="50" height="50" />
				</div>

				<div className="dropdown-menu f col">
					<NavLink className="nav-link text-sec n" to="/dienstleistungen">
						Dienstleistungen
					</NavLink>
					<NavLink className="nav-link text-sec n" to="/ubersicht">
						Übersicht
					</NavLink>
					<NavLink className="nav-link text-sec n" to="/kontakt">
						Kontakt
					</NavLink>
				</div>
			</div>
		</nav>
	</header>
);

export default Header;
