import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ThemeProvider from "react-bootstrap/ThemeProvider";
//import * as serviceWorker from "./serviceWorker";
// import css
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/overrides.css";
import "./css/main.css";
import "./css/components.css";
import "./css/responsive.css";

// import components
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Fallback from "./components/common/Fallback";

// import pages
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import SingleService from "./pages/Services/single-service";

import Projects from "./pages/Projects/Projects";
import Fischlehrpfad from "./pages/Projects/fischlehrpfad";
import Personal from "./pages/Projects/personal";
import SGRumisberg from "./pages/Projects/sgrumisberg";
import MGRumisberg from "./pages/Projects/mgrumisberg";

import Contact from "./pages/Contact";
import Me from "./pages/Me/Me";

import Imprint from "./pages/Imprint";
import Privacy from "./pages/Privacy";

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

					<Route path="/projects" element={<Projects />} />
					<Route path="/project/fischlehrpfad" element={<Fischlehrpfad />} />
					<Route path="/project/personal" element={<Personal />} />
					<Route path="/project/sgrumisberg" element={<SGRumisberg />} />
					<Route path="/project/mgrumisberg" element={<MGRumisberg />} />

					<Route path="/contact" element={<Contact />} />
					<Route path="/me" element={<Me />} />

					<Route path="/imprint" element={<Imprint />} />
					<Route path="/privacy" element={<Privacy />} />
				</Routes>
			</React.Suspense>
			<Footer />
		</Router>
	</ThemeProvider>,

	document.getElementById("root")
);

//serviceWorker.unregister();
