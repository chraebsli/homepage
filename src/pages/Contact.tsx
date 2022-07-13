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
						<div className={"page-title"}>
							<p>{this.pageName}</p>
						</div>

						<div className="page-content d-flex justify-content-center">
							<section>
								<p className="section-title">Kontaktieren Sie mich</p>
								<p className="section-text">
									Wenn Sie Fragen oder Anmerkungen haben, wenden Sie sich bitte an{" "}
									<a href="mailto:contact@chraebsli.dev">contact@chraebsli.dev</a>. Ich beantworte
									gerne Ihre Fragen und freue mich über Feedback jeglicher Art.
								</p>
							</section>

							{/* TODO: add contact form */}
						</div>
					</Container>
				</main>
			</>
		);
	}
}
