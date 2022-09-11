import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { AppBar, Box, Container, FormControl, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { Nav, Navbar } from "react-bootstrap";
import { MaterialUISwitch } from "./ThemeSwitch";
import { defaultLanguage, languages } from "./i18n";
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

					<Box>
						<LanguageSwitcher />
						<MaterialUISwitch sx={ { m: 1 } } onChange={ toggleTheme } checked={ checked } />
					</Box>
				</Navbar>
			</Container>
		</AppBar>
	);
}

const LanguageSwitcher = () => {
	const [ language, setLanguage ] = React.useState(defaultLanguage);
	const [ cookies, setCookie ] = useCookies([ "i18next" ]);

	useEffect(() => {
		cookies.i18next
			? setLanguage(cookies.i18next)
			: (setCookie("i18next", defaultLanguage, { path: "/" }));
	}, [ cookies, setCookie ]);

	const handleChange = (event: SelectChangeEvent) => {
		setCookie("i18next", event.target.value, { path: "/" });
		setLanguage(event.target.value);
	};

	return (
		<FormControl variant={ "standard" }>
			<Select
				labelId="language-label"
				id="language"
				value={ language }
				label="Age"
				onChange={ handleChange }
			>
				{ languages.map(language =>
					<MenuItem key={ language.code } value={ language.code }>{ language.name }</MenuItem>)
				}
			</Select>
		</FormControl>
	);
};