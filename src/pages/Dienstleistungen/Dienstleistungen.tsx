// import libraries
import React from "react";
//import { Outlet } from "react-router-dom";
// import assets and css
import "./Dienstleistungen.css";

// render the page dienstleistungen
const Dienstleistungen = () => (
	<main className="dienstleistungen">
		<div className="header">
			<p className="title-text">Dienstleistungen</p>
		</div>

		<div className="content dienste-cont f c">
			<div className="owl-carousel">
				<div className="dienst-short soft-dark-shadow f col">
					<p className="dienst-title">Website erstellen</p>
					<p className="dienst-teaser">Benötigen Sie eine Website für Ihre Produkte oder Dienstleistungen?</p>
					<p className="dienst-description">
						Ich erstelle für Sie die Website, die Ihre Bedürfnisse erfüllen. Auf ihren Wunsch kann ich
						zusätzlich das Hosting und die Domain mit allem konfigurieren.
					</p>
					<p className="dienst-list">
						<ul>
							<li>Website</li>
							<li>Domain (nach Wunsch)</li>
							<li>Hosting (nach Wunsch)</li>
						</ul>
					</p>
					<a className="btn n" href="/dienstleistungen/website-erstellen">
						Mehr erfahren
					</a>
				</div>

				<div className="dienst-short soft-dark-shadow f col">
					<p className="dienst-title">PC bauen</p>
					<p className="dienst-teaser">Ich baue oder erweitere für Sie einen PC, wie Sie benötigen.</p>
					<ul className="dienst-description">
						<li>Beratung</li>
						<li></li>
					</ul>
					<a className="btn n" href="/dienstleistungen/pc-bauen">
						Mehr erfahren
					</a>
				</div>
			</div>
		</div>
	</main>
);

export default Dienstleistungen;
