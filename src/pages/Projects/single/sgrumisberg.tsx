import React from "react";
import { Stack, Typography } from "@mui/material";
import Page from "../../../components/common/Page";
import { Line, PageTitle, SectionTitle } from "../../../components/Text";

// assets and styles
import "../Projects.sass";
import ToolImage from "../../../components/projects/ToolImage";
import WakaTimeBadge from "../../../components/projects/WakaTimeBadge";
import projectsList from "../projects-list";

export default function SGRumisberg() {
	const pageName = "SG Rumisberg";
	const urlName = "sgrumisberg.ch";
	const url = `https://${ urlName }`;
	const project = projectsList().find(project => project.id === "sgrumisberg");
	return (
		<Page pageName={ pageName } className={ "single-project" }>
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
							Diese Website ist die erste Website, die ich für einen privaten Kunden entwickelt
							habe. Der Kunde ist ein Verein aus meinem Dorf, der eine neue Website möchte. Sie
							wollen ihren Verein vorstellen und Bilder von Events teilen.
						</Typography>
					</section>
					<section>
						<SectionTitle>Inhalt</SectionTitle>
						<Typography>
							Die Website simpel gestaltet, da auch ältere Mitglieder auf der Seite zurecht kommen
							und die Inhalte einfach finden können. Die verschiedenen Seiten enthalten Inhalte
							von Events, Bilder, Ranglisten, etc. Auf ein paar Seiten gibt es auch Inhalte über
							den Verein und wie man ein Mitglied werden kann.
						</Typography>
					</section>
					<section>
						<SectionTitle>Vorgehen</SectionTitle>
						<Typography>
							Ich habe diese Website mit dem CMS Grav entwickelt. Durch meine Arbeit am
							Projekt{ " " }
							<a href={ "/project/fischlehrpfad" }>Fischlehrpfad</a> konnte ich das Grunddesign
							und
							einzelne Elemente aus dem Projekt verwenden und konnte so Aufwand und Zeit zu
							sparen.
						</Typography>
					</section>
					<section>
						<SectionTitle>Fazit</SectionTitle>
						<Typography>
							Es war ein bisschen stressig, da ich zurzeit am Ende des 2. Lehrjahr gewesen bin und
							für viele Prüfungen lernen musste. Ich finde aber, dass es sich gelohnt weil ich
							jetzt mehr Erfahrung im Projektmanagement und den Umgang mit Kunden sowie dem CMS
							Grav habe.
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
								title={ "Schützengesellschaft Rumisberg" }
								loading={ "lazy" }
							/>
						</div>
					</section>
				</Stack>
			</article>
		</Page>
	);
}

