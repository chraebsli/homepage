// import libraries
import React from "react";
import { Container } from "react-bootstrap";

// import assets and css
import ImageError from "./assets/error-404.jpg";
import PageCard from "../../components/PageCard";

const card = {
	title: "Error 404",
	name: "Error 404",
	image: ImageError,
	content: "Die Seite wurde nicht gefunden.",
	action: {
		variant: "outlined",
		href: "/",
		text: "zur Startseite",
	},
};

// render the page home
const Error404 = () => (
	<main className={ "error" }>
		<Container>

			<div className="page-content page-content-only d-flex justify-content-center">
				<PageCard cardTitle={ card.title } image={ card.image } imageHeight={ "400" } content={ card.content } buttonVariant={ card.action.variant } buttonHref={ card.action.href } buttonText={ card.action.text } />
			</div>
		</Container>
	</main>
);

export default Error404;
