import React from "react";
import { Stack, Typography } from "@mui/material";
import Head from "../../../components/common/Head";
import { Line, PageTitle, SectionTitle } from "../../../components/Text";

// assets and styles
import "../Projects.sass";
import ToolImage from "../../../components/projects/ToolImage";
import WakaTimeBadge from "../../../components/projects/WakaTimeBadge";
import projectsList from "../projects-list";

export default function Fischlehrpfad() {
	const pageName = "Fischlehrpfad";
	const urlName = "fischlehrpfad.ch";
	const url = `https://${ urlName }`;
	const project = projectsList.find(project => project.id === "fischlehrpfad");
	return (
		<>
			<Head title={ pageName } />
			<main className={ "single-project" }>
				<section>
					<PageTitle>{ pageName }</PageTitle>
					<WakaTimeBadge url={ project?.wakaTimeBadge } />
					<Line bottom={ 2 } />
				</section>

				<article className="page-content">
					<Stack spacing={ 3 }>
						<section>
							<SectionTitle>Beschreibung</SectionTitle>
							<Typography>
								Der Fischlehrpfad war mein erstes grösseres Projekt, das ich entwickelt habe. Im 2.
								Lehrjahr meiner Ausbildung habe ich mit einem Kollegen das Projekt für den
								Fischereiverein an der Emme in Burgdorf geplant und anschliessend entwickelt. Der
								Verein wollte einen Lernpfad über Fische und andere Tierarten in der Emme erstellen,
								bei dem Schulen und Familien etwas über die verschiedenen Tierarten lernen können.
							</Typography>
						</section>
						<section>
							<SectionTitle>Inhalt</SectionTitle>
							<Typography>
								Der Besucher kann einen QR-Code an einem Posten einscannen und wird auf die
								jeweilige Seite weitergeleitet. Auf dieser Seite befinden sich Inhalte wie Text,
								Bilder, Videos, Audios bei denen man etwas lernt. Es hat aber auch interaktive
								Elemente, wie zB ein Slider, ein Quiz und andere, bei dem man dann das gelernte
								überprüfen kann.
							</Typography>
						</section>
						<section>
							<SectionTitle>Vorgehen</SectionTitle>
							<Typography>
								Zuerst haben wird das Projekt mit einem GANTT Diagramm geplant. Danach haben wir
								verschiedene Mockups erstellt und gemeinsam mit dem Kunden ein passendes Design
								ausgewählt. Anschliessend erstellten wir mit dem CMS Grav in knapp 6 Monaten eine
								Website erstellt. Anfangs hatten wir Schwierigkeiten, da das CMS komplett neu für
								uns war unf wir die ganzen Grundlagen gleichzeitig mit den Programmiersprachen PHP
								und Twig zuerst erlernen mussten.
							</Typography>
						</section>
						<section>
							<SectionTitle>Fazit</SectionTitle>
							<Typography>
								Schlussendlich konnten wir das Projekt erfolgreich abschliessen und bekamen viele
								positive Rückmeldungen. Rückblickend war es ziemlich stressig eine Website zu
								erstellen mit einem Tool das man nicht kennt, aber es hat uns Spass gemacht und wir
								haben viele Fähigkeiten gelernt oder weiterentwickelt.
							</Typography>
						</section>
						<section>
							<SectionTitle>Tools</SectionTitle>
							<div className={ "project-tools" } data-count={ 6 }>
								<ToolImage name={ "Grav" } />
								<ToolImage name={ "PHP" } />
								<ToolImage name={ "Twig" } />
								<ToolImage name={ "HTML5" } />
								<ToolImage name={ "CSS3" } />
								<ToolImage name={ "JavaScript" } />
							</div>
						</section>
						<section>
							<SectionTitle>
								Website - <a href={ url }>{ urlName }</a>
							</SectionTitle>
							<div className={ "iframe-container" }>
								<iframe
									src={ url }
									width={ 1280 }
									height={ 720 }
									title={ "Fischlehrpfad Burgdorf" }
									loading={ "lazy" }
								/>
							</div>
						</section>
					</Stack>
				</article>
			</main>
		</>
	);
}
