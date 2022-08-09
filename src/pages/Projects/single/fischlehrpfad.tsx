import React from "react";
import { Container, Stack } from "@mui/material";
import Head from "../../../components/common/Head";

// assets and css
import "../Projects.css";
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
				<Head title={this.pageName}></Head>
				<main className={"single-project"}>
					<Container>
						<section className={"page-title"}>
							<h2>{this.pageName}</h2>
							<WakaTimeBadge url={this.project!.wakatimeBadge} />
						</section>

						<article className="page-content">
							<Stack spacing={3}>
								<section>
									<h3>Beschreibung</h3>
									<p>
										Der Fischlehrpfad war mein erstes grösseres Projekt, das ich entwickelt habe. Im
										2. Lehrjahr meiner Informatikausbildung bekam ich den Auftrag, eine Website mit
										einem Kollegen zu erstellen. Die Website sei für einen Verein, der ein Lernpfad
										an der Emme in Burgdorf erstellen möchte. Auf diesem Lernpfad können dann
										Familien oder Schulen entlanglaufen und etwas über die Gewässer und Fische zu
										lernen.
									</p>
								</section>
								<section>
									<h3>Inhalt</h3>
									<p>
										Der Besucher soll dann einen QR-Code an einem Posten einscannen können und auf
										die jeweilige Seite weitergeleitet werden. Auf dieser Seite befinden sich dann
										verschiedene grundlegende Elemente wie Text, Bilder, Videos, Audios. Es soll
										aber auch mehr interaktive Elemente geben, wie zB ein Slider, ein Quiz und
										andere.
									</p>
								</section>
								<section>
									<h3>Vorgehen</h3>
									<p>
										Wir haben dann mit dem CMS Grav in knapp 6 Monaten eine Website erstellt. Dazu
										gehörte auch das ganze planen, sowie auch das erstellen von Mockups. Anfangs
										hatten wir beide Schwierigkeiten, da das CMS komplett neu für uns war wir die
										ganzen Grundlagen gleichzeitig lernen mussten sowie die Programmiersprache PHP
										und Twig.
									</p>
								</section>
								<section>
									<h3>Fazit</h3>
									<p>
										Schlussendlich hat alles funktioniert und das Projekt war ein Erfolg.
										Rückblickend war es ziemlich stressig eine Website zu erstellen mit einem Tool
										das man nicht kennt, aber es hat mir Spass gemacht und habe viele Fähigkeiten
										gelernt.
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
										<ToolImage name={"TypeScript"} />
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
											loading={"lazy"}></iframe>
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
