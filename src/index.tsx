import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import * as serviceWorker from "./serviceWorker";

// import components
import Navigation from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// import pages
import Home from "./pages/Home/Home";
import Ubersicht from "./pages/Ubersicht/Ubersicht";
import Uber from "./pages/Uber/Uber";
import Kontakt from "./pages/Kontakt/Kontakt";
import Impressum from "./pages/Impressum/Impressum";
import Datenschutz from "./pages/Datenschutz/Datenschutz";
import Dienstleistungen from "./pages/Dienstleistungen/Dienstleistungen";
import PCBauenShort from "./pages/Dienstleistungen/pc-bauen-short";
import PCBauen from "./pages/Dienstleistungen/pc-bauen";

ReactDOM.render(
	<Router>
		<Navigation />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/kontakt" element={<Kontakt />} />
			<Route path="/ubersicht" element={<Ubersicht />} />
			<Route path="/uber" element={<Uber />} />

			<Route path="/impressum" element={<Impressum />} />
			<Route path="/datenschutz" element={<Datenschutz />} />

			<Route path="/dienstleistungen" element={<Dienstleistungen />}>
				<Route path="" element={<PCBauenShort />} />
				<Route path=":postSlug" element={<PCBauen />} />
			</Route>
		</Routes>
		<Footer />
	</Router>,

	document.getElementById("root")
);

//serviceWorker.unregister();
