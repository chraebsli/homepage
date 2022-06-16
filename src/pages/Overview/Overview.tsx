// import libraries
import React from "react";
import { Container } from "react-bootstrap";

// import assets and css
import "./Overview.css";
import HomeIcon from "./assets/Home.svg";
import DiensteIcon from "./assets/Dienste.svg";
import PCBauenIcon from "./assets/PCBauen.svg";
import WebsiteErstellenIcon from "./assets/WebsiteErstellen.svg";
import KontaktIcon from "./assets/Kontakt.svg";
import UberIcon from "./assets/Uber.svg";
import UbersichtIcon from "./assets/Ubersicht.svg";
import ImpressumIcon from "./assets/Impressum.svg";
import DatenschutzIcon from "./assets/Datenschutz.svg";

// render the page overview
const Overview = () => (
	<main className={ "overview" }>
		{/* TODO: fix display content */ }
		<Container>
			<div className={ "page-title" }>
				<p>Übersicht</p>
			</div>

			<div className="page-content">
				<section>
					<div className="sites-cont f col">
						<a href="./" className="site-link f row">
							<img src={ HomeIcon } alt="home icon" width="30" height="30" />
							Startseite
						</a>
						<a href="./dienstleistungen" className="site-link f row">
							<img src={ DiensteIcon } alt="dienstleistungen icon" width="30" height="30" />
							Dienstleistungen
						</a>
						<div className="site-subcont f col">
							<a href="./Services/pc-bauen" className="site-link f row">
								<img src={ PCBauenIcon } alt="pc bauen icon" width="30" height="30" />
								PC bauen
							</a>
							<a href="./Services/website-erstellen" className="site-link f row">
								<img src={ WebsiteErstellenIcon } alt="website erstellen icon" width="30" height="30" />
								Website erstellen
							</a>
						</div>
						<a href="./kontakt" className="site-link f row">
							<img src={ KontaktIcon } alt="kontakt icon" width="30" height="30" />
							Kontakt
						</a>
						<a href="./uber" className="site-link f row">
							<img src={ UberIcon } alt="uber icon" width="30" height="30" />
							Über
						</a>
						<a href="./Overview.tsx" className="site-link f row">
							<img src={ UbersichtIcon } alt="ubersicht icon" width="30" height="30" />
							Übersicht
						</a>
						<a href="./impressum" className="site-link f row">
							<img src={ ImpressumIcon } alt="impressum icon" width="30" height="30" />
							Impressum
						</a>
						<a href="./datenschutz" className="site-link f row">
							<img src={ DatenschutzIcon } alt="datenschutz icon" width="30" height="30" />
							Datenschutz
						</a>
					</div>
				</section>
			</div>
		</Container>
	</main>
);

export default Overview;
