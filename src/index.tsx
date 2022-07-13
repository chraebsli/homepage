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
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Fallback from "./components/common/Fallback";

// import pages
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import SingleService from "./pages/Services/single-service";

import Contact from "./pages/Contact";
import Me from "./pages/Me/Me";

import Overview from "./pages/Overview/Overview";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";

import Error404 from "./pages/Error/404";

ReactDOM.render(
	<ThemeProvider breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}>
		<Router>
			<Header />
			<React.Suspense fallback={Fallback}>
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
					<Route path="/loader" element={<Fallback />} />
				</Routes>
			</React.Suspense>
			<Footer />
		</Router>
	</ThemeProvider>,

	document.getElementById("root")
);

//serviceWorker.unregister();
