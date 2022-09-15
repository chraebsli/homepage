import React from "react";
import { Button, Container, Stack, Typography } from "@mui/material";
import Head from "../../../components/common/Head";
import { Image, Line, PageTitle } from "../../../components/Text";
import { Picture } from "../../../components/Picture";

// assets and styles
import "../Services.sass";
import ProjectsList from "../../../components/projects/ProjectsList";
import projectsList from "../../Projects/projects-list";
import SendIcon from "@mui/icons-material/Send";

export default function Website() {
	const pageName = "Website erstellen";
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
						<Picture
							path={ "services/website" } name={ "website" }
							sizes={ [ 720, 480 ] }>
							<Image
								src={ "/media/services/website/website-720-min.jpg" }
								alt={ "Illustration Website" } height={ 200 } m />
						</Picture>
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
				</Container>
			</main>
		</>
	);
}

const getMatchingProjects = () => {
	const projects = [ "fischlehrpfad", "sgrumisberg", "mgrumisberg" ];
	return projectsList.filter(project => projects.includes(project.id));
};
