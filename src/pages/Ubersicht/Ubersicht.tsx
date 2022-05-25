import React from "react";
import "./Ubersicht.css";

// icons
import HomeIcon from "./assets/Home.svg";
import DiensteIcon from "./assets/Dienste.svg";
import PCBauenIcon from "./assets/PCBauen.svg";
import WebsiteErstellenIcon from "./assets/WebsiteErstellen.svg";
import KontaktIcon from "./assets/Kontakt.svg";
import UberIcon from "./assets/Uber.svg";
import UbersichtIcon from "./assets/Ubersicht.svg";
import ImpressumIcon from "./assets/Impressum.svg";
import DatenschutzIcon from "./assets/Datenschutz.svg";

function Ubersicht() {
	return (
		<main className="ubersicht">
			<div className="header">
				<p className="title-text">Übersicht</p>
			</div>

			<div className="content f col">
				<section>
					<p className="section-title">Übersicht der Seiten</p>
					<div className="sites-cont f col">
						<a href="./" className="site-link f row">
							<img src={HomeIcon} alt="home icon" width="30" height="30" />
							Startseite
						</a>
						<a href="./dienstleistungen" className="site-link f row">
							<img src={DiensteIcon} alt="dienstleistungen icon" width="30" height="30" />
							Dienstleistungen
						</a>
						<div className="site-subcont f col">
							<a href="./dienstleistungen/pc-bauen" className="site-link f row">
								<img src={PCBauenIcon} alt="pc bauen icon" width="30" height="30" />
								PC bauen
							</a>
							<a href="./dienstleistungen/website-erstellen" className="site-link f row">
								<img src={WebsiteErstellenIcon} alt="website erstellen icon" width="30" height="30" />
								Website erstellen
							</a>
						</div>
						<a href="./kontakt" className="site-link f row">
							<img src={KontaktIcon} alt="kontakt icon" width="30" height="30" />
							Kontakt
						</a>
						<a href="./uber" className="site-link f row">
							<img src={UberIcon} alt="uber icon" width="30" height="30" />
							Über
						</a>
						<a href="./ubersicht" className="site-link f row">
							<img src={UbersichtIcon} alt="ubersicht icon" width="30" height="30" />
							Übersicht
						</a>
						<a href="./impressum" className="site-link f row">
							<img src={ImpressumIcon} alt="impressum icon" width="30" height="30" />
							Impressum
						</a>
						<a href="./datenschutz" className="site-link f row">
							<img src={DatenschutzIcon} alt="datenschutz icon" width="30" height="30" />
							Datenschutz
						</a>
					</div>
				</section>
			</div>
		</main>
	);
}

export default Ubersicht;
