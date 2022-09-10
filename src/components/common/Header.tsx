import React from "react";
import { AppBar, Container, Typography } from "@mui/material";
import { Nav, Navbar } from "react-bootstrap";
import { MaterialUISwitch } from "./ThemeSwitch";

// assets
import LogoWhiteTransparent from "../../assets/logo-white-transparent.svg";

const pages = [
	{ href: "/me", label: "Über mich" },
	{ href: "/services", label: "Services" },
	{ href: "/projects", label: "Projekte" },
	{ href: "/contact", label: "Kontakt" },
];

export default function Header({ toggleTheme, checked }: { toggleTheme: () => void; checked: boolean }) {
	return (
		<AppBar position={"static"} enableColorOnDark>
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
						<Typography
							component={"span"}
							variant={"h6"}
							sx={{
								marginLeft: "1rem",
							}}>
							chraebsli IT-Services
						</Typography>
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

					<MaterialUISwitch sx={{ m: 1 }} onChange={toggleTheme} checked={checked} />
				</Navbar>
			</Container>
		</AppBar>
	);
}
