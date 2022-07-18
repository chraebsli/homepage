// import libraries
import React from "react";
import Head from "../components/common/Head";
import Container from "@mui/material/Container";

export default class Imprint extends React.Component {
	pageName = "Impressum";

	render() {
		return (
			<>
				<Head title={this.pageName} />
				<main className={this.pageName.toLowerCase()}>
					<Container>
						<section className={"page-title"}>
							<h1>{this.pageName}</h1>
							<hr />
						</section>

						<article className="page-content">
							<section>
								<h2 className="section-title">Betreiber</h2>
								<p className="section-text text-space">
									Diese Website wurde erstellt und wird Betrieben von:
								</p>
								<address>
									Nicholas Krebs
									<br />
									Breitebüneweg 5
									<br />
									4539 Rumisberg
									<br />
									Bern, CH
								</address>
								<p className="section-text text-space">
									Bitte melden Sie sich bei Fragen oder Anmerkungen an die unten angegebene
									Email-Adresse. <br />
									<a href="mailto:contact@chraebsli.dev">contact@chraebsli.dev</a>
								</p>
							</section>
							<hr />
							<section>
								<h2 className="section-title">Personen</h2>
								<p className="section-text text-space">
									Folgende Personen haben an dieser Website beteiligt:
								</p>
								<ul>
									<li>Design: Nicholas Krebs</li>
									<li>Programmierung: Nicholas Krebs</li>
									<li>Inhalt: Nicholas Krebs</li>
								</ul>
							</section>
						</article>
					</Container>
				</main>
			</>
		);
	}
}
