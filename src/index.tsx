import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ThemeProvider from "react-bootstrap/ThemeProvider";
//import * as serviceWorker from "./serviceWorker";
// import css
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/overrides.css";
import "./css/main.css";
import "./css/comonents.css";
import "./css/responsive.css";

// import components
import Header from "./components/Header";
import Footer from "./components/Footer";

// import pages
import Home from "./pages/Home";
import Services from "./pages/Services/Services";
import SingleService from "./pages/Services/single-service";

import Contact from "./pages/Contact";
import Me from "./pages/Me2/Me";

import Overview from "./pages/Overview/Overview";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";

import Error404 from "./pages/Error/404";

ReactDOM.render(
	<ThemeProvider breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}>
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="*" element={<Error404 />} />
				<Route path="/services" element={<Services />} />
				<Route path="/service/:service" element={<SingleService />} />

				<Route path="/contact" element={<Contact />} />
				<Route path="/me" element={<Me />} />

				<Route path="/overview" element={<Overview />} />
				<Route path="/impressum" element={<Impressum />} />
				<Route path="/datenschutz" element={<Datenschutz />} />
			</Routes>
			<Footer />
		</Router>
	</ThemeProvider>,

	document.getElementById("root")
);

//serviceWorker.unregister();
