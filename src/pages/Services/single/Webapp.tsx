import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import Page from "../../../components/common/Page";
import { Line, PageTitle } from "../../../components/Text";

// assets and styles
import "../Services.sass";
import ImageDevelopWebapp from "../assets/webapp.jpg";
import SendIcon from "@mui/icons-material/Send";

export default function Webapp() {
	const pageName = "Webapplikation erstellen";
	return (
		<Page pageName={ pageName } className={ "single-service" }>
			<section>
				<PageTitle>{ pageName }</PageTitle>
				<Line bottom={ 2 } />
			</section>

			<article>
				<img
					src={ ImageDevelopWebapp }
					alt={ "Illustration Webapplikation erstellen" }
					height={ 200 }
					style={ { marginBottom: "2rem" } }
				/>
				<section>
					<Stack spacing={ 3 }>
						<Typography className={ "italic" }>
							Benötigen Sie eine Webapplikation um zum Beispiel bei ihrem Startup Arbeitszeiten
							oder ähnliches zu erfassen?
						</Typography>
						<Typography>
							Ich entwickle für Sie die perfekte Webapplikation um bei Startup oder für einen
							persönlichen Zweck mit einem Login System und vielen weiteren Funktionen, die Sie
							möchten.
							<br />
							Die Webapplikation ist sicher und schnell und hat ein modernes Design nach ihren
							Vorstellungen. Dazu wird sie auch mit einer mobile Version erreichbar sein für
							unterwegs. Wenn Sie später weitere Funktionen wünschen, können diese durch den
							cleveren Aufbau auch durch andere Entwickler erweitert werden.
						</Typography>
						<Typography>
							Folgende Features sind inbegriffen:
							<ul>
								<li>moderne Webapplikation</li>
								<li>einfach zu bedienen</li>
								<li>einfach erweiterbar</li>
								<li>sichere Daten</li>
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
