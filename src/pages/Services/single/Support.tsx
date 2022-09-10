import React from "react";
import { Button, Container, Stack, Typography } from "@mui/material";
import Head from "../../../components/common/Head";
import { Line, PageTitle } from "../../../components/Text";

// assets and styles
import "../Services.sass";
import ImageITSupport from "../assets/support.jpg";
import SendIcon from "@mui/icons-material/Send";

export default function Support() {
	const pageName = "IT Support";
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
							src={ ImageITSupport }
							alt={ "Illustration Support" }
							height={ 200 }
							style={ { marginBottom: "2rem" } }
						/>
						<section>
							<Stack spacing={ 3 }>
								<Typography className={ "italic" }>
									Brauchen Sie Hilfe bezüglich Computer oder Smartphones und wissen nicht mehr weiter?
								</Typography>
								<Typography>
									Kommen Sie nicht mehr weiter mit Ihrem Computer oder ihrem Smartphone? Zum Beispiel
									beim Installieren von Apps auf einem neuen Gerät oder dessen Konfiguration oder
									Verwendung? Oder haben Fragen bezüglich Sicherheit und Datenschutz oder anderer
									Themen der Computerwelt?
									<br />
									Ich helfe Ihnen gerne weiter und möchte Sie dabei unterstützen, damit Sie in Zukunft
									weniger Fragen und Probleme bezüglich Ihres Computers oder Ihres Smartphones haben.
								</Typography>
								<Typography>
									Folgende Features sind inbegriffen:
									<ul>
										<li>professioneller Support</li>
										<li>schnelle Hilfe über Chat/ Anruf</li>
										<li>remote/ vor Ort Hilfestellung</li>
										<li>Weiterbildung und Aufklärung</li>
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
