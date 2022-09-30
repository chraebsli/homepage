import { appWithTranslation } from "next-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.sass";
import "./home/home.sass";
import "./me/me.sass";
import "./project/project.sass";
import "./service/service.sass";
import "../components/social-media/SocialMedia.sass";
import { useCookies } from "react-cookie";
import { Box, Container, createTheme, CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ScrollToTop from "../components/common/ScrollToTop";
import CookieDisclaimer from "../components/common/CookieDisclaimer";

const light = createTheme({
	palette: {
		mode: "light",
		primary: { main: "#507cff" },
		secondary: { main: "#ffffff" },
	},
});
const dark = createTheme({
	palette: {
		mode: "dark",
		primary: { main: "#507cff" },
		secondary: { main: "#ffffff" },
	},
});

function App({ Component, pageProps }: any) {
	const [ cookies, setCookie ] = useCookies([ "colorScheme" ]);
	const expires = new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 365);
	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
	const colorScheme = cookies.colorScheme;
	if (!colorScheme) {
		setCookie("colorScheme", prefersDarkMode ? "dark" : "light", { path: "/", expires: expires });
	}

	const [ theme, setTheme ] = useState<"light" | "dark">(!colorScheme ? (prefersDarkMode ? "dark" : "light") : colorScheme);
	const [ checked, setChecked ] = React.useState<boolean>(theme !== "light");

	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setCookie("colorScheme", newTheme, { path: "/", expires: expires });
		setTheme(newTheme);
		setChecked(!checked);
	};

	return (
		<ThemeProvider theme={ theme === "light" ? light : dark }>
			<CssBaseline />
			<Header toggleTheme={ toggleTheme } checked={ checked } />
			<Container sx={ { mt: "2rem", mb: "2rem" } }>
				<Component { ...pageProps } />
			</Container>
			<Box sx={ { height: "5rem" } } />
			<Footer />
			<ScrollToTop />
			<CookieDisclaimer />
		</ThemeProvider>
	);
}

export default appWithTranslation(App);
