import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ThemeProvider from "react-bootstrap/ThemeProvider";
//import * as serviceWorker from "./serviceWorker";
// import css
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/bootstrap-overrides.css";
import "./css/main.css";
import "./css/elements.css";
import "./css/responsive.css";
import "./css/smoother.css";
import "./css/Card.css";

// import components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// import pages
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import PCBauen from "./pages/Services/pc-bauen";
import WebsiteErstellen from "./pages/Services/website-erstellen";

import Contact from "./pages/Contact/Contact";
import Me from "./pages/Me/Me";

import Overview from "./pages/Overview/Overview";
import Impressum from "./pages/Impressum/Impressum";
import Datenschutz from "./pages/Datenschutz/Datenschutz";

ReactDOM.render(
	<ThemeProvider
		breakpoints={ [ "xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs" ] }
	>
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={ <Home /> } />
				<Route path="/services" element={ <Services /> }></Route>
				<Route path="/services/pc-bauen" element={ <PCBauen /> } />
				<Route path="/services/website-erstellen" element={ <WebsiteErstellen /> } />

				<Route path="/contact" element={ <Contact /> } />
				<Route path="/me" element={ <Me /> } />

				<Route path="/overview" element={ <Overview /> } />
				<Route path="/impressum" element={ <Impressum /> } />
				<Route path="/datenschutz" element={ <Datenschutz /> } />
			</Routes>
			<Footer />
		</Router>
	</ThemeProvider>,

	document.getElementById( "root" )
);

//serviceWorker.unregister();
