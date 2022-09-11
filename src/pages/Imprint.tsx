import React from "react";
import Head from "../components/common/Head";
import { Typography } from "@mui/material";
import { Line, PageTitle, SectionTitle } from "../components/Text";

export default function Imprint() {
	const pageName = "Imprint";
	return (
		<>
			<Head title={ pageName } />
			<main>
				<section>
					<PageTitle>{ pageName }</PageTitle>
					<Line bottom={ 2 } />
				</section>

				<article>
					<section>
						<SectionTitle>Betreiber</SectionTitle>
						<Typography>Diese Website wurde erstellt und wird Betrieben von:</Typography>
						<address>
							Nicholas Krebs
							<br />
							Breitebüneweg 5
							<br />
							4539 Rumisberg
							<br />
							Bern, CH
						</address>
						<Typography>
							Bitte melden Sie sich bei Fragen oder Anmerkungen an die unten angegebene Email-Adresse.
							<br />
							<a href="mailto:contact@chraebsli.dev">contact@chraebsli.dev</a>
						</Typography>
					</section>
					<Line />
					<section>
						<SectionTitle>Personen</SectionTitle>
						<Typography>Folgende Personen haben an dieser Website beteiligt:</Typography>
						<ul>
							<li>Design: Nicholas Krebs</li>
							<li>Programmierung: Nicholas Krebs</li>
							<li>Inhalt: Nicholas Krebs</li>
						</ul>
					</section>
					<Line />
					<section>
						<SectionTitle>Ressourcen</SectionTitle>
						<Typography>
							Bilder, Grafiken, Videos, und andere Ressourcen wurden von folgenden Quellen verwendet:
						</Typography>
						<ul>
							<li>
								Illustrationen: <a href="https://www.freepik.com">vectorjuice / Freepik</a>
							</li>
							<li>
								Icons: <a href="https://mui.com/">Material UI</a>
							</li>
						</ul>
					</section>
				</article>
			</main>
		</>
	);
}
