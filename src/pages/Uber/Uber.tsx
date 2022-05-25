// import libraries
import React from "react";

// import assets and css
import "./Uber.css";

// render the page über
const Uber = () => (
	<main className="uber">
		<div className="header">
			<p className="title-text">Über mich</p>
		</div>

		<div className="content f col">
			<section>
				<p className="text">
					Main Name ist Nicholas Krebs. Ich bin ein Informatiklehrling im 2. Lehrjahr in der{" "}
					<a href="https://tfbern.ch">TF Bern</a>. <br></br>
					Ich interessiere mich hauptsächlich für Webentwicklung und Hardware.
				</p>
			</section>

			<section>
				<p className="section-title">Lebenslauf</p>
				<div className="lebenslauf f col c">
					<div className="f col">
						<p className="name">Name</p>
						<p className="value">Nicholas Krebs</p>
					</div>
					<div className="f col">
						<p className="name">Geburtsdatum</p>
						<p className="value">29.12.2004</p>
					</div>
					<div className="f col">
						<p className="name">Nationalität</p>
						<p className="value">Schweiz</p>
					</div>
					<div className="f col">
						<p className="name">Interessen</p>
						<p className="value">Programmieren, Musik machen, Pfadi leiten, snowboarden</p>
					</div>
					<div className="f col">
						<p className="name">Ausbildung</p>
						<p className="value">Betriebsinformatiker EFZ mit BMS (momentan im 2. Lehrjahr)</p>
					</div>
					<div className="f col">
						<p className="name">Besuchte Schulen</p>
						<p className="value">
							2011 - 2017: 1. - 6. Primarschule, SV Rumisberg <br></br>
							2017 - 2019: 1. / 2. Sekundarschule, Wiedlisbach <br></br>
							2019 - 2020: 1. Gymnasium, Langenthal <br></br>
							2020 - jetzt: Technische Fachschule Bern
						</p>
					</div>
					<div className="f col">
						<p className="name">Schnupperlehren</p>
						<p className="value">
							15.1.2019: Schaerer AG Zuchwil, Informatik <br></br>
							08.-12.4.2019: Steiner- Arch Wiedlisbach, Architekt <br></br>
							15.-16.4.2019: AZM Langenthal, Informatik
						</p>
					</div>
				</div>
			</section>
		</div>
	</main>
);

export default Uber;
