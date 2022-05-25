import React from "react";
//import { Outlet } from "react-router-dom";
import "./Dienstleistungen.css";

function Dienstleistungen() {
	return (
		<main className="dienstleistungen">
			<div className="header">
				<p className="title-text">Dienstleistungen</p>
			</div>

			<div className="content dienste-cont f c">
				<div className="owl-carousel">
					<div className="dienst-short f col">
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
					<div className="dienst-short f col">
						<p className="dienst-title">Website erstellen</p>
						<p className="dienst-teaser">
							Brauchen Sie eine Website für Ihre Firma oder Ihre Produkte? Dann klicken sie auf den Button.
						</p>
						<p className="dienst-description">
							Ich kann für Sie eine Website bauen, die Ihre Bedürfnisse erfüllen. Egal ob für Ihre Firma, Verein oder
							Privat, ich werde das passende für sie finden. Auf ihren Wunsch werde ich inklusive Hosting und Domain
							alles konfigurieren.
						</p>
						<a className="btn n" href="/dienstleistungen/website-erstellen">
							Mehr erfahren
						</a>
					</div>
				</div>
			</div>
		</main>
	);
}

export default Dienstleistungen;
