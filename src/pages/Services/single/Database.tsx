import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import Page from "../../../components/common/Page";
import { Image, Line, PageTitle } from "../../../components/Text";
import { Picture } from "../../../components/Picture";
import SendIcon from "@mui/icons-material/Send";

// assets and styles
import "../Services.sass";

export default function Database() {
	const pageName = "Datenbank";
	return (
		<Page pageName={ pageName } className={ "single-service" }>
			<section>
				<PageTitle>{ pageName }</PageTitle>
				<Line bottom={ 2 } />
			</section>

			<article>
				<Picture
					path={ "services/database" } name={ "database" }
					sizes={ [ 720, 480 ] }>
					<Image
						src={ "/media/services/database/database-720-min.jpg" }
						alt={ "Illustration Datenbank" } height={ 480 } m />
				</Picture>
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
		</Page>
	);
}
