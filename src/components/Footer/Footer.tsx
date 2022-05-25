// import libraries
import React from "react";
import { NavLink } from "react-router-dom";

// import assets and css
import "./Footer.css";

// render the footer component
const Footer = () => (
	<footer className="f col">
		<div className="links f row">
			<NavLink className="link text-sec " to="/impressum">
				Impressum
			</NavLink>
			<NavLink className="link text-sec " to="/datenschutz">
				Datenschutz
			</NavLink>
		</div>
		<p className="text-sec copyright">&copy; 2022 chraebsli Dienstleistungen</p>
	</footer>
);

export default Footer;
