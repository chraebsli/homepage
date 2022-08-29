import React from "react";
import { Container, Stack } from "@mui/material";
import Head from "../../../components/common/Head";

// assets and sass
import "../Projects.sass";
import ToolImage from "../../../components/projects/ToolImage";
import WakaTimeBadge from "../../../components/projects/WakaTimeBadge";
import projectsList from "../projects-list";

export default class Personal extends React.Component<{
	loading?: boolean;
}> {
	static defaultProps = {
		loading: false,
	};
	pageName = "Persönliche Website";
	urlName = "homepage.dev.chraebsli.dev";
	url = `https://${this.urlName}`;
	project = projectsList.find(project => project.id === "personal-website");

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
										Ich wollte schon längere Zeit eine eigene Website haben, die ich ohne CMS
										entwickelt habe. So kann ich zusätzlich lernen, was mich interessiert und bin
										frei, wie ich es umsetzten möchte. Ich habe mehrmals angefangen aber immer
										wieder aufgehört, weil ich keine Zeit mehr hatte. Schlussendlich konnte ich mich
										überreden und war motiviert, mit der JavaScript Bibliothek React die Website zu
										erstellen.
									</p>
								</section>
								<section>
									<h3>Inhalt</h3>
									<p>
										Auf meiner Website biete ich Dienstleistungen an, um in meiner Freizeit zu
										arbeiten und mich weiterzubilden. Zusätzlich möchte ich Geld verdienen, da ich
										in meiner Ausbildung kein Lohn erhalte. Ich möchte auch meine vergangenen
										Projekte zeigen, die ich erstellt habe und so meine Erfahrung zeigen.
									</p>
								</section>
								<section>
									<h3>Vorgehen</h3>
									<p>
										Da ich mich in der Programmiersprache JavaScript/ TypeScript weiterbilden will,
										habe ich angefangen mit React die Website zu entwickeln. Ich werde an dieser
										Website öfters Verbesserungen vornehmen, da ich immer wieder neue Ideen habe.
									</p>
								</section>
								<section>
									<h3>Fazit</h3>
									<p>
										Es macht sehr Spass und ich habe viel Motivation, an dieser Website zu arbeiten.
										Vor allem weil ich sehr viel Zeit und Aufwand hatte, um die Technologien zu
										lernen und zu verwenden. Ich will ohne Planung an diesem Projekt arbeiten, da
										ich so machen kann was ich möchte und weniger Stress habe, mich möglichst an die
										Planung zu halten.
									</p>
								</section>
								<section>
									<h3>Tools</h3>
									<div className={"project-tools"} data-count={4}>
										<ToolImage name={"React"} />
										<ToolImage name={"Node.JS"} />
										<ToolImage name={"TypeScript"} />
										<ToolImage name={"MUI"} />
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
