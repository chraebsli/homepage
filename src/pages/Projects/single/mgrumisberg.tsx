import React from "react";
import { Container, Stack } from "@mui/material";
import Head from "../../../components/common/Head";

// assets and sass
import "../Projects.sass";
import ToolImage from "../../../components/projects/ToolImage";
import WakaTimeBadge from "../../../components/projects/WakaTimeBadge";
import projectsList from "../projects-list";

export default class MGRumisberg extends React.Component<{
	loading?: boolean;
}> {
	static defaultProps = {
		loading: false,
	};
	pageName = "MG Rumisberg";
	urlName = "mgrumisberg.chraebsli.dev";
	url = `https://${this.urlName}`;
	project = projectsList.find(project => project.id === "mgrumisberg");

	render() {
		return (
			<>
				<Head title={this.pageName} />
				<main className={"single-project"}>
					<Container>
						<section className={"page-title"}>
							<h2>{this.pageName}</h2>
							<WakaTimeBadge url={this.project?.wakaTimeBadge} />
						</section>

						<article className="page-content">
							<Stack spacing={3}>
								<section>
									<h3>Beschreibung</h3>
									<p>
										Diese Website ist für die Musikgesellschaft Rumisberg, in der ich seit mehreren
										Jahren Mitglied bin. Unsere alte Website war schwierig zu verwalten und ändern.
										Aus diesem Grund sollte ich eine neue Website erstellen, die einfach zu
										verwalten ist. <br />
										Dieses Projekt ist in Entwicklung.
									</p>
								</section>
								<section>
									<h3>Inhalt</h3>
									<p>
										Auf der Website sollen Daten für unsere Auftritte gelistet und wir möchten
										unseren Verein vorstellen. Es soll aber auch eine Art blogging Beiträge geben,
										bei denen wir Aktuelles aus dem Verein öffentlich teilen wollen. Dazu gehört zB
										das Teilen von Erfolgen und Veränderungen.
									</p>
								</section>
								<section>
									<h3>Vorgehen</h3>
									<p>
										Die Website wird mit dem CMS Grav erstellen, da ich bereits viel Erfahrung mit
										diesem CMS gemacht habe und auch gutes Feedback von den Benutzern erhalten habe.
										Das Design wurde bereits festgelegt und ich arbeite im Moment am Inhalt der
										Website.
									</p>
								</section>
								<section>
									<h3>Fazit</h3>
									<p>
										Bis jetzt läuft alles wie geplant und ich freue mich, als jüngstes Mitglied nun
										auch einen Beitrag zu meinem Verein leisten zu können, sobald die Website fertig
										ist.
									</p>
								</section>
								<section>
									<h3>Tools</h3>
									<div className={"project-tools"} data-count={6}>
										<ToolImage name={"Grav"} />
										<ToolImage name={"PHP"} />
										<ToolImage name={"Twig"} />
										<ToolImage name={"HTML5"} />
										<ToolImage name={"CSS3"} />
										<ToolImage name={"JavaScript"} />
									</div>
								</section>
							</Stack>
						</article>
					</Container>
				</main>
			</>
		);
	}
}
