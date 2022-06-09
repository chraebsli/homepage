// import libraries
import React from "react";
import { Card, Container, Stack } from "react-bootstrap";

// import assets and css
import "./Me.css";
//import ImageOfMe from "./assets/me.jpg";

// render the page über
const Me = () => (
	<main className={ "me" }>
		<Container>
			<div className={ "page-title" }>
				<p>Über mich</p>
			</div>

			<div className="page-content d-flex justify-content-center">
				<Card>
					<Card.Img variant={ "top" } /*src={ ImageOfMe }*/ />
					<Card.Body>
						<Card.Title className="card-title">Über mich</Card.Title>
						<Card.Subtitle className="card-teaser mb-2 text-muted">Ich bin Nicholas Krebs, ein
							Informatiklehrling im 2. Lehrjahr in der{ " " } <a href="https://tfbern.ch">Technischen
								Fachschule Bern</a>. <br></br> Am meisten interessiert mich die Webentwicklung. Ich
							erstelle gerne Websites und Webapps. Mehr dazu in meinen{ " " }
							<a href="/referenzen">Referenzen</a>.
						</Card.Subtitle>
						<Card.Text className="card-description">
							<section>
								<p className="section-title">Lebenslauf</p>
								<Stack gap={ 3 } className="lebenslauf f col c">
									<Stack gap={ 0 }>
										<span className="name">Name</span>
										<span className="value">Nicholas Krebs</span>
									</Stack>
									<Stack gap={ 0 }>
										<span className="name">Geburtsdatum</span>
										<span className="value">29.12.2004</span>
									</Stack>
									<Stack gap={ 0 }>
										<span className="name">Nationalität</span>
										<span className="value">Schweiz</span>
									</Stack>
									<Stack gap={ 0 }>
										<span className="name">Interessen</span>
										<span className="value">Programmieren, Musik machen, Pfadi leiten, snowboarden</span>
									</Stack>
									<Stack gap={ 0 }>
										<span className="name">Ausbildung</span>
										<span className="value">Betriebsinformatiker EFZ mit BMS (momentan im 2.
											Lehrjahr)</span>
									</Stack>
									<Stack gap={ 0 }>
										<span className="name">Besuchte Schulen</span>
										<span className="value">
											2011 - 2017: 1. - 6. Primarschule, SV Rumisberg <br></br>
											2017 - 2019: 1. / 2. Sekundarschule, Wiedlisbach <br></br>
											2019 - 2020: 1. Gymnasium, Langenthal <br></br>
											2020 - jetzt: Technische Fachschule Bern
										</span>
									</Stack>
									<Stack gap={ 0 }>
										<span className="name">Schnupperlehren</span>
										<span className="value">
											15.1.2019: Schaerer AG Zuchwil, Informatik <br></br>
											08.-12.4.2019: Steiner- Arch Wiedlisbach, Architekt <br></br>
											15.-16.4.2019: AZM Langenthal, Informatik
										</span>
									</Stack>
								</Stack>
							</section>
						</Card.Text>
					</Card.Body>
				</Card>
			</div>
		</Container>
	</main>
);

export default Me;
