// import libraries
import React from "react";
import { NavLink } from "react-router-dom";
import { Stack } from "react-bootstrap";

// render the footer component
class Footer extends React.Component {
	render() {
		return (
			<>
				<div className={"footer-space"}></div>
				<footer>
					<nav>
						<Stack direction={"vertical"} className={"text-center"}>
							<Stack gap={2} direction={"horizontal"} className={"d-flex justify-content-center"}>
								<NavLink className={"link text-sec"} to={"/imprint"}>
									Impressum
								</NavLink>
								{" | "}
								<NavLink className={"link text-sec"} to={"/contact"}>
									Kontakt
								</NavLink>
								{" | "}
								<NavLink className={"link text-sec"} to={"/privacy"}>
									Datenschutz
								</NavLink>
							</Stack>
							<span className={"text-sec copyright"}>
								&copy; {new Date().getFullYear()} chraebsli IT-Services
							</span>
						</Stack>
					</nav>
				</footer>
			</>
		);
	}
}

export default Footer;
