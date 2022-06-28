// import libraries
import React from "react";
import { Container } from "react-bootstrap";

// render the page contact
const Contact = () => (
	<main className={"contact"}>
		<Container>
			<div className={"page-title"}>
				<p>Über mich</p>
			</div>

			<div className="page-content d-flex justify-content-center">
				<section>
					<p className="section-title">Kontaktieren Sie mich</p>
					<p className="section-text">
						Wenn Sie Fragen oder Anmerkungen haben, wenden Sie sich bitte an{" "}
						<a href="mailto:contact@chraebsli.dev">contact@chraebsli.dev</a>. Ich beantworte gerne Ihre
						Fragen und freue mich über Feedback jeglicher Art.
					</p>
				</section>

				{/* TODO: add contact form */}
			</div>
		</Container>
	</main>
);

export default Contact;
