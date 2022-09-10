import React from "react";
import { Button, Container, Stack, Typography } from "@mui/material";
import Head from "../../../components/common/Head";
import { Line, PageTitle } from "../../../components/Text";
import SendIcon from "@mui/icons-material/Send";

// assets and styles
import "../Services.sass";
import ImageDatabase from "../assets/database.jpg";

export default function Database() {
	const pageName = "Datenbank";
	return (
		<>
			<Head title={ pageName } />
			<main className={ "single-service" }>
				<Container>
					<section>
						<PageTitle>{ pageName }</PageTitle>
						<Line bottom={ 2 } />
					</section>

					<article>
						<img
							src={ ImageDatabase }
							alt={ "Illustration Datenbank" }
							height={ 200 }
							style={ { marginBottom: "2rem" } }
						/>
						<section>
							<Stack spacing={ 3 }>
								<Typography className={ "italic" }>
									Möchten Sie eine Datenbank erstellen oder von einer anderen alle Daten in eine neue
									übernehmen?
								</Typography>
								<Typography>
									Ich erstelle für Sie eine neue Datenbank oder übernehme Daten von einer anderen
									Datenbank in eine neue, egal ob SQL oder NoSQL. Dabei können Sie selbst entscheiden,
									welche Datenbank Sie verwenden möchten. Es spielt keine Rolle, welche Art von Daten
									Sie speichern möchten, ob Dokumente oder zum Beispiel ein Login-System.
								</Typography>
								<Typography>
									Folgende Features sind inbegriffen:
									<ul>
										<li>vollständiges Datenbanksystem</li>
										<li>überlegte Struktur</li>
										<li>einfach zu verwalten</li>
										<li>schnelle Abfragen</li>
									</ul>
								</Typography>
								<Button
									href={ `/contact?service=${ pageName }` }
									variant="contained"
									endIcon={ <SendIcon color={ "secondary" } /> }
									sx={ { width: "20rem" } }>
									Anfrage senden
								</Button>
							</Stack>
						</section>
					</article>
				</Container>
			</main>
		</>
	);
}
