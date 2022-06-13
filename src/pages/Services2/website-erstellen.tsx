// import libraries
import React from "react";

// import assets and css
import "./Services.css";

// render the page pc bauen
const PCBauen = () => (
	<main className="dienst">
		{/* TODO: fix container */ }
		{/* TODO: add content */ }

		<section className="header">
			<p className="title-text">Website erstellen</p>
		</section>

		<section className="dienst-full f col">
			<p className="dienst-teaser">Benötigen Sie eine Website für Ihre Produkte oder Dienstleistungen?</p>
			<p className="dienst-description">
				Ich erstelle für Sie die Website, die Ihre Bedürfnisse erfüllen. Auf ihren Wunsch kann ich zusätzlich
				das Hosting und die Domain mit allem konfigurieren.
			</p>
			<p className="dienst-refs">
				<span>Referezen:</span>
				<ul>
					<li>
						<a href="https://fischlehrpfad.ch">fischlehrpfad.ch</a> - Webdesign und Webprogrammierung
					</li>
				</ul>
			</p>
			<p className="dienst-list">
				<span>Inhalt:</span>
				<ul>
					<li>Website</li>
					<li>Domain (nach Wunsch)</li>
					<li>Hosting (nach Wunsch)</li>
				</ul>
			</p>
			<a className="btn n" href="/anfrage?dienst=website-erstellen">
				Anfragen
			</a>
		</section>
	</main>
);

export default PCBauen;
