import * as React from "react";
import { AppBar, Container } from "@mui/material";
import { Nav, Navbar } from "react-bootstrap";

// assets and sass
import LogoWhiteTransparent from "../../assets/logo-white-transparent.svg";

const pages = [
	{ href: "/me", label: "Über mich" },
	{ href: "/services", label: "Services" },
	{ href: "/projects", label: "Projekte" },
	{ href: "/contact", label: "Kontakt" },
];

export default function Header() {
	return (
		<AppBar position="static">
			<Container>
				<Navbar collapseOnSelect expand={"sm"} bg={"none"} variant={"dark"}>
					<Navbar.Brand href={"/"}>
						<img
							src={LogoWhiteTransparent}
							alt={"logo"}
							width={50}
							height={50}
							className={"d-inline-block align-center"}
						/>
						<span className={"brand-name"}>chraebsli IT-Services</span>
					</Navbar.Brand>

					<Navbar.Toggle aria-controls={"header-nav"} />

					<Navbar.Collapse id={"responsive-navbar-nav"}>
						<Nav className={"me-auto"} />
						<Nav>
							{pages.map(page => (
								<Nav.Link key={page.label} href={page.href}>
									{page.label}
								</Nav.Link>
							))}
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</Container>
		</AppBar>
	);
};


