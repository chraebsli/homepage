import React from "react";
import ReactDOM from "react-dom";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// css
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/overrides.css";
import "./css/main.css";
import "./css/components.css";
import "./css/responsive.css";
import "./css/form.css";

// components
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Loader from "./components/common/Loader";

// pages
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import CreateWebsite from "./pages/Services/single/CreateWebsite";
import ITSupport from "./pages/Services/single/ITSupport";
import BuildPC from "./pages/Services/single/BuildPC";
import DevelopWebapp from "./pages/Services/single/DevelopWebapp";

import Projects from "./pages/Projects/Projects";
import Fischlehrpfad from "./pages/Projects/single/fischlehrpfad";
import Personal from "./pages/Projects/single/personal";
import SGRumisberg from "./pages/Projects/single/sgrumisberg";
import MGRumisberg from "./pages/Projects/single/mgrumisberg";

import Contact from "./pages/Contact";
import Me from "./pages/Me/Me";

import Imprint from "./pages/Imprint";
import Privacy from "./pages/Privacy";

import Error404 from "./pages/Error/404";

const defaultTheme = createTheme({
	palette: {
		primary: { main: "#507cff" },
		secondary: { main: "#ffffff" },
		text: {
			primary: "#000000",
			secondary: "#ffffff",
		},
		background: {
			default: "#ffffff",
		},
	},
});

ReactDOM.render(
	<ThemeProvider theme={defaultTheme}>
		<Router>
			<CssBaseline />
			<Header />
			<React.Suspense fallback={Loader}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="*" element={<Error404 />} />
					<Route path="/services" element={<Services />} />
					<Route path="/service/create-website" element={<CreateWebsite />} />
					<Route path="/service/it-support" element={<ITSupport />} />
					<Route path="/service/build-pc" element={<BuildPC />} />
					<Route path="/service/develop-webapp" element={<DevelopWebapp />} />

					<Route path="/projects" element={<Projects />} />
					<Route path="/project/fischlehrpfad" element={<Fischlehrpfad />} />
					<Route path="/project/personal" element={<Personal />} />
					<Route path="/project/sgrumisberg" element={<SGRumisberg />} />
					<Route path="/project/mgrumisberg" element={<MGRumisberg />} />

					<Route path="/me" element={<Me />} />
					<Route path="/contact" element={<Contact />} />

					<Route path="/imprint" element={<Imprint />} />
					<Route path="/privacy" element={<Privacy />} />
				</Routes>
			</React.Suspense>
			<Footer />
		</Router>
	</ThemeProvider>,

	document.getElementById("root")
);
