//export { default as Navigation } from "./components/Navigation";
//export { default as Footer } from "./components/Footer";
//export { default as Home } from "./components/Home";
//export { default as About } from "./components/About";
//export { default as Contact } from "./components/Contact";
//export { default as Blog } from "./components/Blog";
//export { default as Posts } from "./components/Posts";
//export { default as Post } from "./components/Post";

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Posts from "./components/Posts";
import Post from "./components/Post";

ReactDOM.render(
	<Router>
		<Navigation />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/blog" element={<Blog />}>
				<Route path="" element={<Posts />} />
				<Route path=":postSlug" element={<Post />} />
			</Route>
		</Routes>
		<Footer />
	</Router>,

	document.getElementById("root")
);

//serviceWorker.unregister();
