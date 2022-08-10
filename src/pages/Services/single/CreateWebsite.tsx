import React from "react";
import { Container, Stack } from "@mui/material";
import Head from "../../../components/common/Head";

// assets and sass
import "../Services.sass";
import ProjectsList from "../../../components/projects/ProjectsList";
import projectsList from "../../Projects/projects-list";
import ImageCreateWebsite from "../assets/create-website.jpg";

export default class CreateWebsite extends React.Component<{
	loading?: boolean;
}> {
	static defaultProps = {
		loading: false,
	};
	pageName = "Website erstellen";

	render() {
		return (
			<>
				<Head title={this.pageName}></Head>
				<main className={"single-service"}>
					<Container>
						<section className={"page-title"}>
							<h2>{this.pageName}</h2>
						</section>

						<article className="page-content">
							<img src={ImageCreateWebsite} alt={"Illustration Website erstellen"} height={200} />
							<Stack spacing={3}>
								<section>
									<p className={"italic"}>
										Brauchen Sie eine kleine und einfache Website für Ihren Verein, Startup oder für
										einen persönlichen Zweck?
									</p>
									<p>
										Dann sind Sie hier richtig. Ich erstelle günstig für Sie die perfekte Website
										für Ihren Verein, Startup oder für einen persönlichen Zweck nach Ihren Wünschen.
										<br />
										Das handhaben der Website ist sehr einfach, auch für Sie. Mit dem CMS Grav
										können Sie ohne grosses technisches Verständnis Seiten oder Inhalte wie Text,
										Bilder, Videos, Tabellen, etc. erstellen, bearbeiten und löschen. Dazu gibt es
										eine Seitenstatistik wo Sie die Aufrufe sehen können.
									</p>
									<p>
										Folgende Features sind inbegriffen:
										<ul>
											<li>professionelle Website nach Ihren Vorstellungen</li>
											<li>Konfiguration der Website</li>
											<li>Domain und Hosting nach Wunsch</li>
											<li>E-Mail Adressen nach Wunsch</li>
										</ul>
									</p>
								</section>
								<section>
									<p>Lassen Sie sich gerne von folgenden Projekten inspirieren:</p>
									<ProjectsList space={70} projects={this.getWebProjects()} />
								</section>
							</Stack>
						</article>
					</Container>
				</main>
			</>
		);
	}

	getWebProjects() {
		const projects = ["fischlehrpfad", "sgrumisberg", "mgrumisberg"];
		return projectsList.filter(project => projects.includes(project.id));
	}
}
