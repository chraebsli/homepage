import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { Box, Container, createTheme, CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useCookies } from "react-cookie";

// styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.sass";

// components
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Loader from "./components/common/Loader";
import ScrollToTop from "./components/common/ScrollToTop";
import CookieDisclaimer from "./components/common/CookieDisclaimer";

// pages
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import SingleService from "./pages/Services/SingleService";

import Projects from "./pages/Projects/Projects";
import SingleProject from "./pages/Projects/SingleProject";

import Contact from "./pages/Contact";
import Me from "./pages/Me/Me";

import Imprint from "./pages/Imprint";
import Privacy from "./pages/Privacy";

import NotFound404 from "./pages/Error/404";

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

function App() {
	const [ cookies, setCookie ] = useCookies([ "colorScheme" ]);
	const expires = new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 365);
	const colorScheme = cookies.colorScheme;
	if (!colorScheme) {
		const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
		setCookie("colorScheme", prefersDarkMode ? "dark" : "light", { path: "/", expires: expires });
	}

	const [ theme, setTheme ] = useState<"light" | "dark">(colorScheme);
	const [ checked, setChecked ] = React.useState<boolean>(theme !== "light");

	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setCookie("colorScheme", newTheme, { path: "/", expires: expires });
		setTheme(newTheme);
		setChecked(!checked);
		!colorScheme && window.location.reload();
	};

	return (
		<ThemeProvider theme={ theme === "light" ? light : dark }>
			<Router>
				<CssBaseline />
				<Header toggleTheme={ toggleTheme } checked={ checked } />
				<Container sx={ { mt: "2rem", mb: "2rem" } }>
					<React.Suspense fallback={ <Loader /> }>
						<Routes>
							<Route path="/" element={ <Home /> } />
							<Route path="*" element={ <NotFound404 /> } />
							<Route path="/services" element={ <Services /> } />
							<Route path="/service/:service" element={ <SingleService /> } />

							<Route path="/projects" element={ <Projects /> } />
							<Route path="/project/:project" element={ <SingleProject /> } />

							<Route path="/me" element={ <Me /> } />
							<Route path="/contact" element={ <Contact /> } />

							<Route path="/imprint" element={ <Imprint /> } />
							<Route path="/privacy" element={ <Privacy /> } />
						</Routes>
					</React.Suspense>
				</Container>
				<Box sx={ { height: "5rem" } } />
				<Footer />
				<ScrollToTop />
				<CookieDisclaimer />
			</Router>
		</ThemeProvider>
	);
}

const root = createRoot(document.getElementById("root")!);
root.render(<App />);