// import libraries
import React from "react";
import Head from "../components/Head";
import Container from "@mui/material/Container";

export default class Impressum extends React.Component {
	pageName = "Impressum";

	render() {
		return (
			<>
				<Head title={this.pageName} />
				<main className={this.pageName.toLowerCase()}>
					<Container>
						<div className={"page-title"}>
							<p>{this.pageName}</p>
						</div>

						<div className="page-content">
							<section>
								<p className="section-title">Betreiber</p>
								<p className="section-text text-space">
									Diese Website wurde erstellt und wird Betrieben von
								</p>
								<address>
									Nicholas Krebs<br></br>
									Breitebüneweg 5<br></br>
									4539 Rumisberg<br></br>
									Bern, CH
								</address>
								<a href="mailto:contact@chraebsli.dev">contact@chraebsli.dev</a>
								<p className="section-text text-space">
									Bitte melden Sie sich bei Fragen oder Anmerkungen an die oben angegebene
									Email-Adresse.
								</p>
							</section>
						</div>
					</Container>
				</main>
			</>
		);
	}
}
