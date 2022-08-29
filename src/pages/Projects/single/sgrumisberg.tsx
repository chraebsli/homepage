import React from "react";
import { Container, Stack } from "@mui/material";
import Head from "../../../components/common/Head";

// assets and sass
import "../Projects.sass";
import ToolImage from "../../../components/projects/ToolImage";
import WakaTimeBadge from "../../../components/projects/WakaTimeBadge";
import projectsList from "../projects-list";

export default class SGRumisberg extends React.Component<{
	loading?: boolean;
}> {
	static defaultProps = {
		loading: false,
	};
	pageName = "SG Rumisberg";
	urlName = "sgrumisberg.ch";
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
										Diese Website ist die erste Website, die ich für einen privaten Kunden
										entwickelt habe. Der Kunde ist ein Verein aus meinem Dorf, der eine neue Website
										möchte. Sie wollen ihren Verein vorstellen und Bilder von Events teilen.
									</p>
								</section>
								<section>
									<h3>Inhalt</h3>
									<p>
										Die Website simpel gestaltet, da auch ältere Mitglieder auf der Seite zurecht
										kommen und die Inhalte einfach finden können. Die verschiedenen Seiten enthalten
										Inhalte von Events, Bilder, Ranglisten, etc. Auf ein paar Seiten gibt es auch
										Inhalte über den Verein und wie man ein Mitglied werden kann.
									</p>
								</section>
								<section>
									<h3>Vorgehen</h3>
									<p>
										Ich habe diese Website mit dem CMS Grav entwickelt. Durch meine Arbeit am
										Projekt <a href={"/project/fischlehrpfad"}>Fischlehrpfad</a> konnte ich das
										Grunddesign und einzelne Elemente aus dem Projekt verwenden und konnte so
										Aufwand und Zeit zu sparen.
									</p>
								</section>
								<section>
									<h3>Fazit</h3>
									<p>
										Es war ein bisschen stressig, da ich zurzeit am Ende des 2. Lehrjahr gewesen bin
										und für viele Prüfungen lernen musste. Ich finde aber, dass es sich gelohnt weil
										ich jetzt mehr Erfahrung im Projektmanagement und den Umgang mit Kunden sowie
										dem CMS Grav habe.
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
											title={"Schützengesellschaft Rumisberg"}
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
