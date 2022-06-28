// import libraries
import React from "react";
import { Container } from "react-bootstrap";
import IconList from "../../components/IconList";

// import assets and css
import "./Overview.css";

// render the page overview
const Overview = () => (
	<main className={"overview"}>
		{/* TODO: fix display content */}
		<Container>
			<div className={"page-title"}>
				<p>Übersicht</p>
			</div>

			<div className="page-content">
				<section>
					<div className="sites-cont f col">
						<IconList />
						{/*
						<ListItem href={ "./" } icon={ HomeIcon } text={ "Startseite" } />
						<ListItem href={ "./dienstleistungen" } icon={ DiensteIcon } text={ "Dienstleistungen" } />
						<div className="site-subcont f col">
							<ListItem href={ "./services/pc-bauen" } icon={ PCBauenIcon } text={ "PC bauen" } />
							<ListItem href={ "./services/website-erstellen" }
							          icon={ WebsiteErstellenIcon }
							          text={ "Website erstellen" } />
						</div>
						<ListItem href={ "./kontakt" } icon={ KontaktIcon } text={ "Kontakt" } />
						<ListItem href={ "./uber" } icon={ UberIcon } text={ "Über" } />
						<ListItem href={ "./overview" } icon={ UbersichtIcon } text={ "Übersicht" } />
						<ListItem href={ "./impressum" } icon={ ImpressumIcon } text={ "Impressum" } />
						<ListItem href={ "./datenschutz" } icon={ DatenschutzIcon } text={ "Datenschutz" } />
						*/}
					</div>
				</section>
			</div>
		</Container>
	</main>
);

export default Overview;
