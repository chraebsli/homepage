import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./elements.css";
import "./components/OwlCarousel/OwlCarousel.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import * as serviceWorker from "./serviceWorker";

// import components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// import pages
import Home from "./pages/Home/Home";
import Dienstleistungen from "./pages/Dienstleistungen/Dienstleistungen";
import PCBauen from "./pages/Dienstleistungen/pc-bauen";
import WebsiteErstellen from "./pages/Dienstleistungen/pc-bauen";

import Kontakt from "./pages/Kontakt/Kontakt";
import Uber from "./pages/Uber/Uber";

import Ubersicht from "./pages/Ubersicht/Ubersicht";
import Impressum from "./pages/Impressum/Impressum";
import Datenschutz from "./pages/Datenschutz/Datenschutz";

ReactDOM.render(
	<Router>
		<Header />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/dienstleistungen" element={<Dienstleistungen />}></Route>
			<Route path="/dienstleistungen/pc-bauen" element={<PCBauen />} />
			<Route path="/dienstleistungen/website-erstellen" element={<WebsiteErstellen />} />

			<Route path="/kontakt" element={<Kontakt />} />
			<Route path="/uber" element={<Uber />} />

			<Route path="/ubersicht" element={<Ubersicht />} />
			<Route path="/impressum" element={<Impressum />} />
			<Route path="/datenschutz" element={<Datenschutz />} />
		</Routes>
		<Footer />
	</Router>,

	document.getElementById("root")
);

//serviceWorker.unregister();
