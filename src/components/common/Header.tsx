// import libraries
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

// import assets and css
import logo from "../../assets/logo.svg";

// render the header component
class Header extends React.Component {
	render() {
		return (
			<>
				<Navbar collapseOnSelect expand={"lg"} bg={"primary"} variant={"dark"}>
					<Container>
						<Navbar.Brand href={"/"}>
							<img
								src={logo}
								alt={"logo"}
								width={50}
								height={50}
								className={"d-inline-block align-center"}
							/>
							<span className={"brand-name"}>chraebsli IT-Services</span>
						</Navbar.Brand>

						<Navbar.Toggle aria-controls={"header-nav"} />

						<Navbar.Collapse id={"responsive-navbar-nav"}>
							<Nav className={"me-auto"}></Nav>
							<Nav>
								<Nav.Link href={"/me"}>Über mich</Nav.Link>
								<Nav.Link href={"/services"}>Services</Nav.Link>
								<Nav.Link href={"/projects"}>Projekte</Nav.Link>
								<Nav.Link href={"/contact"}>Kontakt</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</>
		);
	}
}

export default Header;
