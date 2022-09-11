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

// pages
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Website from "./pages/Services/single/Website";
import Support from "./pages/Services/single/Support";
import Database from "./pages/Services/single/Database";
import Webapp from "./pages/Services/single/Webapp";

import Projects from "./pages/Projects/Projects";
import Fischlehrpfad from "./pages/Projects/single/fischlehrpfad";
import Personal from "./pages/Projects/single/personal";
import SGRumisberg from "./pages/Projects/single/sgrumisberg";
import MGRumisberg from "./pages/Projects/single/mgrumisberg";
import HomeDashboard from "./pages/Projects/single/home-dashboard";

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
	const colorScheme = cookies.colorScheme;
	if (!colorScheme) {
		const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
		setCookie("colorScheme", prefersDarkMode ? "dark" : "light", { path: "/" });
	}

	const [ theme, setTheme ] = useState<"light" | "dark">(colorScheme);
	const [ checked, setChecked ] = React.useState<boolean>(theme !== "light");

	const toggleTheme = () => {
		setChecked(!checked);
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
		setCookie("colorScheme", newTheme, { path: "/" });
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
							<Route path="/service/website" element={ <Website /> } />
							<Route path="/service/support" element={ <Support /> } />
							<Route path="/service/webapp" element={ <Webapp /> } />
							<Route path="/service/database" element={ <Database /> } />

							<Route path="/projects" element={ <Projects /> } />
							<Route path="/project/fischlehrpfad" element={ <Fischlehrpfad /> } />
							<Route path="/project/personal" element={ <Personal /> } />
							<Route path="/project/sgrumisberg" element={ <SGRumisberg /> } />
							<Route path="/project/mgrumisberg" element={ <MGRumisberg /> } />
							<Route path="/project/home-dashboard" element={ <HomeDashboard /> } />

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
			</Router>
		</ThemeProvider>
	);
}

const root = createRoot(document.getElementById("root")!);
root.render(<App />);