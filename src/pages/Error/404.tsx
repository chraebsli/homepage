// import libraries
import React from "react";
import { Container } from "react-bootstrap";

// import assets and css
//import "./Error.css";

// render the page home
const Error404 = () => (
	<main className={ "error" }>
		<Container>
			<div className={ "page-title" }>
				<p>404</p>
			</div>

			<div className="page-content d-flex justify-content-center">
			</div>
		</Container>
	</main>
);

export default Error404;
