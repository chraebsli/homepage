// import libraries
import React from "react";

// import assets and css
import "./Kontakt.css";

// render the page kontakt
const Kontakt = () => (
	<main className="contact">
		<div className="header">
			<p className="title-text">Kontakt</p>
		</div>

		<div className="content f col">
			<section>
				<p className="section-title">Kontaktieren Sie mich</p>
				<p className="section-text">
					Wenn Sie Fragen oder Anmerkungen haben, wenden Sie sich bitte an{ " " }
					<a href="mailto:contact@chraebsli.dev">contact@chraebsli.dev</a>. Ich beantworte gerne Ihre Fragen
					und freue mich über Feedback jeglicher Art.
				</p>
			</section>
		</div>
	</main>
);

export default Kontakt;
