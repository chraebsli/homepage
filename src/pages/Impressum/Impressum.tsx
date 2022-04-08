import React from "react";
import "./Impressum.css";

function Impressum() {
	return (
		<div className="home impressum">
			<div className="header">
				<p className="title-text">Impressum</p>
			</div>

			<div className="content f col">
				<section>
					<p className="section-title">Betreiber</p>
					<address>
						Nicholas Krebs<br></br>
						Breitebüneweg 5<br></br>
						4539 Rumisberg<br></br>
						CH
					</address>
					<a href="mailto:contact@chraebsli.dev">contact@chraebsli.dev</a>
				</section>
			</div>
		</div>
	);
}

export default Impressum;
