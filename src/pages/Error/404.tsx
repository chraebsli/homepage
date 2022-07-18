// import libraries
import React from "react";
import { Container } from "react-bootstrap";
import PageCard from "../../components/PageCard";
import Head from "../../components/common/Head";

// import assets and css
import ImageError from "./assets/error-404.jpg";

// render the page error 404
export default class Home extends React.Component {
	pageName = "Error 404";
	card = {
		title: "Error 404",
		name: "Error 404",
		image: ImageError,
		content: "Diese Seite wurde nicht gefunden.",
		action: {
			variant: "outlined",
			href: "/",
			text: "zur Startseite",
		},
	};

	render() {
		return (
			<>
				<Head title={this.pageName} />
				<main className={this.pageName.toLowerCase()}>
					<Container>
						<article className="page-content page-content-only d-flex justify-content-center">
							<PageCard
								cardTitle={this.card.title}
								image={this.card.image}
								imageHeight={"400"}
								content={this.card.content}
								buttonVariant={this.card.action.variant}
								buttonHref={this.card.action.href}
								buttonText={this.card.action.text}
							/>
						</article>
					</Container>
				</main>
			</>
		);
	}
}
