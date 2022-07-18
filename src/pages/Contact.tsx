// import libraries
import React from "react";
import Head from "../components/common/Head";
import Container from "@mui/material/Container";

export default class Contact extends React.Component {
	pageName = "Kontakt";

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
								<h2 className="section-title">Kontaktangaben</h2>
								<p>
									Bei Fragen oder Anregungen können Sie gerne per Mail due unten stehende Adresse
									kontaktieren. Im Normalfall werde ich mich innerhalb von 2-4 Tagen bei ihnen melden.
									<br />
									Natürlich dürfen Sie mir auch eine Rückmeldung und Verbesserungsvorschläge für diese
									Website geben.
								</p>
								<p>
									E-Mail Adresse:
									<br />
									<a href="mailto:contact@chraebsli.dev">contact@chraebsli.dev</a>.
								</p>
							</section>

							{/* TODO: add contact form */}
						</article>
					</Container>
				</main>
			</>
		);
	}
}
