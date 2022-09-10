import React from "react";
import { Container, Stack, Typography } from "@mui/material";
import Head from "../../../components/common/Head";
import { Line, PageTitle } from "../../../components/Text";

// assets and styles
import "../Services.sass";
import ProjectsList from "../../../components/projects/ProjectsList";
import projectsList from "../../Projects/projects-list";
import ImageCreateWebsite from "../assets/website.jpg";

export default function Website() {
	const pageName = "Website erstellen";
	return (
		<>
			<Head title={pageName} />
			<main className={"single-service"}>
				<Container>
					<section>
						<PageTitle>{pageName}</PageTitle>
						<Line bottom={2} />
					</section>

					<article>
						<img
							src={ImageCreateWebsite}
							alt={"Illustration Website erstellen"}
							height={200}
							style={{ marginBottom: "2rem" }}
						/>
						<Stack spacing={3}>
							<section>
								<Typography className={"italic"}>
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
							</section>
							<section>
								<Typography>Lassen Sie sich gerne von folgenden Projekten inspirieren:</Typography>
								<ProjectsList space={70} projects={getMatchingProjects()} />
							</section>
						</Stack>
					</article>
				</Container>
			</main>
		</>
	);
}

const getMatchingProjects = () => {
	const projects = ["fischlehrpfad", "sgrumisberg", "mgrumisberg"];
	return projectsList.filter(project => projects.includes(project.id));
};
