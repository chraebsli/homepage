import React from "react";
import { Container, Stack } from "@mui/material";
import Head from "../../../components/common/Head";

// assets and sass
import "../Projects.sass";
import ToolImage from "../../../components/projects/ToolImage";
import WakaTimeBadge from "../../../components/projects/WakaTimeBadge";
import projectsList from "../projects-list";

export default class Fischlehrpfad extends React.Component<{
	loading?: boolean;
}> {
	static defaultProps = {
		loading: false,
	};
	pageName = "Fischlehrpfad";
	urlName = "fischlehrpfad.ch";
	url = `https://${this.urlName}`;
	project = projectsList.find(project => project.id === "fischlehrpfad");

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
										Der Fischlehrpfad war mein erstes grösseres Projekt, das ich entwickelt habe. Im
										2. Lehrjahr meiner Ausbildung habe ich mit einem Kollegen das Projekt für den
										Fischereiverein an der Emme in Burgdorf geplant und anschliessend entwickelt.
										Der Verein wollte einen Lernpfad über Fische und andere Tierarten in der Emme
										erstellen, bei dem Schulen und Familien etwas über die verschiedenen Tierarten
										lernen können.
									</p>
								</section>
								<section>
									<h3>Inhalt</h3>
									<p>
										Der Besucher kann einen QR-Code an einem Posten einscannen und wird auf die
										jeweilige Seite weitergeleitet. Auf dieser Seite befinden sich Inhalte wie Text,
										Bilder, Videos, Audios bei denen man etwas lernt. Es hat aber auch interaktive
										Elemente, wie zB ein Slider, ein Quiz und andere, bei dem man dann das gelernte
										überprüfen kann.
									</p>
								</section>
								<section>
									<h3>Vorgehen</h3>
									<p>
										Zuerst haben wird das Projekt mit einem GANTT Diagramm geplant. Danach haben wir
										verschiedene Mockups erstellt und gemeinsam mit dem Kunden ein passendes Design
										ausgewählt. Anschliessend erstellten wir mit dem CMS Grav in knapp 6 Monaten
										eine Website erstellt. Anfangs hatten wir Schwierigkeiten, da das CMS komplett
										neu für uns war unf wir die ganzen Grundlagen gleichzeitig mit den
										Programmiersprachen PHP und Twig zuerst erlernen mussten.
									</p>
								</section>
								<section>
									<h3>Fazit</h3>
									<p>
										Schlussendlich konnten wir das Projekt erfolgreich abschliessen und bekamen
										viele positive Rückmeldungen. Rückblickend war es ziemlich stressig eine Website
										zu erstellen mit einem Tool das man nicht kennt, aber es hat uns Spass gemacht
										und wir haben viele Fähigkeiten gelernt oder weiterentwickelt.
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
								<section>
									<h3>
										Website - <a href={this.url}>{this.urlName}</a>
									</h3>
									<div className={"iframe-container"}>
										<iframe
											src={this.url}
											width={1280}
											height={720}
											title={"Fischlehrpfad Burgdorf"}
											loading={"lazy"}
										/>
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
