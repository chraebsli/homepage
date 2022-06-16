// import libraries
import React from "react";
import { NavLink } from "react-router-dom";
import { Stack } from "react-bootstrap";

// import assets and css
import "./Footer.css";

// render the footer component

const Footer = () => (
	<footer>
		<Stack direction={ "vertical" } className={ "text-center" }>
			<Stack direction={ "horizontal" } className={ "link-cont d-flex justify-content-center" }>
				<NavLink className={ "link text-sec" } to={ "/impressum" }>Impressum</NavLink>
				<NavLink className={ "link text-sec" } to={ "/datenschutz" }>Datenschutz</NavLink>
			</Stack>
			<span className={ "text-sec copyright" }>&copy; { new Date().getFullYear() } chraebsli IT-Services</span>
		</Stack>
	</footer>
);

export default Footer;
