// import libraries
import React from "react";
import { Container } from "react-bootstrap";

// import assets and css
import "./Home.css";

// render the page home
const Home = () => (
	<main className={ "home" }>
		<Container>
			<div className={ "page-title" }>
				<p>Home</p>
			</div>

			<div className="page-content d-flex justify-content-center">
			</div>
		</Container>
	</main>
);

export default Home;
