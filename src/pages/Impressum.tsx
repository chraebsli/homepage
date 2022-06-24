// import libraries
import { Container } from "react-bootstrap";
import React from "react";

// render the page impressum
const Impressum = () => (
	<main className={ "impressum" }>
		<Container>
			<div className={ "page-title" }>
				<p>Impressum</p>
			</div>

			<div className="page-content">
				<section>
					<p className="section-title">Betreiber</p>
					<p className="section-text text-space">Diese Website wurde erstellt und wird Betrieben von:</p>
					<address>
						Nicholas Krebs<br></br>
						Breitebüneweg 5<br></br>
						4539 Rumisberg<br></br>
						CH
					</address>
					<a href="mailto:contact@chraebsli.dev">contact@chraebsli.dev</a>
					<p className="section-text text-space">Bitte melden SIe sich bei Fragen oder Anmerkungen</p>
				</section>
			</div>
		</Container>
	</main>
);

export default Impressum;
