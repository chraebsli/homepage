// import libraries
import React from "react";
import { Button, Card, Carousel } from "react-bootstrap";
//import { Outlet } from "react-router-dom";
// import assets and css
import "./Services.css";
import ImageCreateWebsite from "./assets/create-website.jpg";
import ImageBuildPC from "./assets/build-pc.jpg";

// render the page services
const Services = () => (
	<main className={ "services" }>
		<div className={ "page-title" }>
			<p>Dienstleistungen</p>
		</div>

		<div className="page-content d-flex justify-content-center">
			<Carousel variant="dark">
				<Carousel.Item className={ "soft-dark-shadow" }>
					<Card>
						<Card.Img variant={ "top" } src={ ImageCreateWebsite } />
						<Card.Body>
							<Card.Title className="service-title">Website erstellen</Card.Title>
							<Card.Subtitle className="service-teaser mb-2 text-muted">Benötigen Sie eine Website für
								Ihre Produkte oder Dienstleistungen?</Card.Subtitle>
							<Card.Text className="service-description">
								<p>Ich erstelle für Sie die Website, die Ihre Bedürfnisse erfüllen. Auf ihren Wunsch
									kann ich zusätzlich das Hosting und die Domain mit allem konfigurieren.</p>
								<p className="service-list">
									<ul>
										<li>Website</li>
										<li>Domain (nach Wunsch)</li>
										<li>Hosting (nach Wunsch)</li>
									</ul>
								</p>
							</Card.Text>
							<Button variant="primary"
							        className="btn n text-center"
							        href="/dienstleistungen/website-erstellen">
								Mehr erfahren
							</Button>
						</Card.Body>
					</Card>
				</Carousel.Item>

				<Carousel.Item className=" soft-dark-shadow ">
					<Card>
						<Card.Img variant="top" src={ ImageBuildPC } />
						<Card.Body>
							<Card.Title className="service-title">PC bauen</Card.Title>
							<Card.Subtitle className="service-teaser">Ich baue oder erweitere für Sie einen PC, wie
								Sie benötigen.</Card.Subtitle>
							<Card.Text className="service-description">
								<p></p>
								<p>
									<ul>
										<li>Beratung</li>
										<li></li>
									</ul>
								</p>
							</Card.Text>
							<Button variant="primary" className="btn n" href="/dienstleistungen/pc-bauen">
								Mehr erfahren
							</Button></Card.Body></Card>
				</Carousel.Item>
			</Carousel>
		</div>
	</main>
);

export default Services;
