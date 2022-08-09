// import libraries
import React from "react";
import Head from "../../../components/common/Head";
import Container from "@mui/material/Container";
import { Stack } from "@mui/material";

// import assets and css
import "../Projects.css";
import ToolImage from "../../../components/ToolImage";
import WakaTimeBadge from "../../../components/WakaTimeBadge";
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
										Diese Website ist die erste Website, die ich für einen privaten Kunden
										entwickelt habe. Der Kunde ist ein Verein aus meinem Dorf, der eine neue Website
										möchte, jedoch kaum Geld zur Verfügung hat. Deshalb habe ich die Website gratis
										erstellt, es das erste Projekt für einen Kunden ist, bei dem ich auf mich
										alleine gestellt bin und so auch etwas für mich lernen kann.
									</p>
								</section>
								<section>
									<h3>Inhalt</h3>
									<p>
										Die Website soll einfach und simpel sein und ist für die Vereinsmitglieder
										vorgesehen, damit sie die aktuellen Daten und andere Informationen und Daten
										teilen können. Es soll aber auch eine Seite haben, um neue Mitglieder anwerben
										zu können.
									</p>
								</section>
								<section>
									<h3>Vorgehen</h3>
									<p>
										Ich habe diese Website mit dem CMS Grav entwickelt. Durch meine Arbeit am
										Projekt <a href={"/project/fischlehrpfad"}>Fischlehrpfad</a> konnte ich gewisse
										Funktionen und Einstellungen aber auch Daten aus diesem Projekt kopieren und so
										Aufwand und Zeit zu sparen.
									</p>
								</section>
								<section>
									<h3>Fazit</h3>
									<p>
										Es war ein bisschen stressig, da ich mich am Ende des 2. Lehrjahr gewesen bin
										und für viele Prüfungen lernen musste. Ich finde aber es hat sich gelohnt weil
										ich jetzt mehr Erfahrung im Projektmanagement und dem CMS Grav habe.
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
											title={"Schützengesellschaft Rumisberg"}
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
