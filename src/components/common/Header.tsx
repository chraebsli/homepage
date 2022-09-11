import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { AppBar, Button, ButtonGroup, Container, Stack, Typography } from "@mui/material";
import { Nav, Navbar } from "react-bootstrap";
import { MaterialUISwitch } from "./ThemeSwitch";
import { defaultLanguage } from "./i18n";
import { useTranslation } from "react-i18next";

// assets
import LogoWhiteTransparent from "../../assets/logo-white-transparent.svg";

const pages = [
	{ key: "about", href: "/me" },
	{ key: "services", href: "/services" },
	{ key: "projects", href: "/projects" },
	{ key: "contact", href: "/contact" },
];

export default function Header({ toggleTheme, checked }: { toggleTheme: () => void; checked: boolean }) {
	const { t } = useTranslation("components");
	return (
		<AppBar position={ "static" } enableColorOnDark>
			<Container>
				<Navbar collapseOnSelect expand={ "sm" } bg={ "none" } variant={ "dark" }>
					<Navbar.Brand href={ "/" }>
						<img
							src={ LogoWhiteTransparent }
							alt={ "logo" }
							width={ 50 }
							height={ 50 }
							className={ "d-inline-block align-center" }
						/>
						<Typography
							component={ "span" }
							variant={ "h6" }
							sx={ {
								marginLeft: "1rem",
							} }>
							{ t("header.title") }
						</Typography>
					</Navbar.Brand>

					<Navbar.Toggle aria-controls={ "header-nav" } />

					<Navbar.Collapse id={ "responsive-navbar-nav" }>
						<Nav className={ "me-auto" } />
						<Nav>
							{ pages.map(page => (
								<Nav.Link key={ page.key } href={ page.href }>
									{ t(`header.links.${ page.key }`) }
								</Nav.Link>
							)) }
						</Nav>
					</Navbar.Collapse>

					<Stack direction={ { xs: "column", sm: "row" } } sx={ { alignItems: "center" } }>
						<LanguageSwitcher />
						<MaterialUISwitch sx={ { m: 1 } } onChange={ toggleTheme } checked={ checked } />
					</Stack>
				</Navbar>
			</Container>
		</AppBar>
	);
}

const LanguageSwitcher = () => {
	const [ language, setLanguage ] = React.useState(defaultLanguage);
	const [ cookies, setCookie ] = useCookies([ "i18next" ]);

	useEffect(() => { cookies.i18next ? setLanguage(cookies.i18next) : null; }, [ cookies, setCookie ]);

	const handleChange = (lang: string) => {
		setCookie("i18next", lang, { path: "/" });
		setLanguage(lang);
		window.location.reload();
	};

	return (
		<ButtonGroup variant="text" aria-label="language" color={ "secondary" }>
			<Button onClick={ () => {handleChange("en");} }>EN</Button>
			<Button onClick={ () => {handleChange("de");} }>DE</Button>
		</ButtonGroup>
	);
};