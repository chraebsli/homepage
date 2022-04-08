import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

function Footer() {
	return (
		<footer className="footer f col">
			<div className="links f row">
				<NavLink className="link text-sec " to="/impressum">
					Impressum
				</NavLink>
				<NavLink className="link text-sec " to="/datenschutz">
					Datenschutz
				</NavLink>
			</div>
			<p className="text-sec copyright">Copyright &copy; chraebsli Dienstleistungen 2022</p>
		</footer>
	);
}

export default Footer;
