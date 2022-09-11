import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import Page from "../../../components/common/Page";
import { Line, PageTitle } from "../../../components/Text";

// assets and styles
import "../Services.sass";
import ProjectsList from "../../../components/projects/ProjectsList";
import projectsList from "../../Projects/projects-list";
import ImageCreateWebsite from "../assets/website.jpg";
import SendIcon from "@mui/icons-material/Send";

export default function Website() {
	const pageName = "Website erstellen";
	return (
		<Page pageName={ pageName } className={ "single-service" }>
			<section>
				<PageTitle>{ pageName }</PageTitle>
				<Line bottom={ 2 } />
			</section>

			<article>
				<img
					src={ ImageCreateWebsite }
					alt={ "Illustration Website erstellen" }
					height={ 200 }
					style={ { marginBottom: "2rem" } }
				/>
				<section>
					<Stack spacing={ 3 }>
						<Typography className={ "italic" }>
							Brauchen Sie eine kleine und einfache Website für Ihren Verein, Startup oder für
							einen persönlichen Zweck?
						</Typography>
						<Typography>
							Dann sind Sie hier richtig. Ich erstelle günstig für Sie die perfekte Website für
							Ihren Verein, Startup oder für einen persönlichen Zweck nach Ihren Wünschen.
							<br />
							Das handhaben der Website ist sehr einfach, auch für Sie. Mit dem CMS Grav können
							Sie ohne grosses technisches Verständnis Seiten oder Inhalte wie Text, Bilder,
							Videos, Tabellen, etc. erstellen, bearbeiten und löschen. Dazu gibt es eine
							Seitenstatistik wo Sie die Aufrufe sehen können.
						</Typography>
						<Typography>
							Folgende Features sind inbegriffen:
							<ul>
								<li>professionelle Website nach Ihren Vorstellungen</li>
								<li>Konfiguration der Website</li>
								<li>Domain und Hosting nach Wunsch</li>
								<li>E-Mail Adressen nach Wunsch</li>
							</ul>
						</Typography>
						<Button
							href={ `/contact?service=${ pageName }` }
							variant="contained"
							endIcon={ <SendIcon color={ "secondary" } /> }
							sx={ { width: "20rem" } }>
							Anfrage senden
						</Button>
						<section>
							<Typography>Lassen Sie sich gerne von folgenden Projekten inspirieren:</Typography>
							<ProjectsList space={ 70 } projects={ getMatchingProjects() } />
						</section>
					</Stack>
				</section>
			</article>
		</Page>
	);
}

const getMatchingProjects = () => {
	const projects = [ "fischlehrpfad", "sgrumisberg", "mgrumisberg" ];
	return projectsList.filter(project => projects.includes(project.id));
};
