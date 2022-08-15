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
							<WakaTimeBadge url={this.project!.wakatimeBadge} />
						</section>

						<article className="page-content">
							<Stack spacing={3}>
								<section>
									<h3>Beschreibung</h3>
									<p>
										Ich wollte schon längere Zeit eine eigene Website haben, die ich selber
										entwickelt habe. Somit kann ich lernen, was mich interessiert und bin frei, was
										ich wie umsetzten möchte. So habe ich mehrmals angefangen aber nicht wieder
										weitergemacht, da ich irgendwann keine Zeit mehr hatte.
									</p>
								</section>
								<section>
									<h3>Inhalt</h3>
									<p>
										Auf meiner Website möchte ich Dienstleistungen anbieten, um in meiner Freizeit
										zu arbeiten und zu lernen. Zusätzlich kann ich noch ein bisschen Geld verdienen.
										Ich möchte auch meine vergangenen Projekte zeigen, die ich entwickelt habe und
										um meine Kenntnisse zu zeigen
									</p>
								</section>
								<section>
									<h3>Vorgehen</h3>
									<p>
										Da ich mich in den Programmiersprache NodeJS, React und TypeScript weiterbilden
										will, habe ich angefangen mit React die Website zu entwickeln. Für kleinere
										Sachen habe ich auch noch Express verwendet. Ich werde an dieser Website öfters
										updaten, wenn ich neue Ideen habe.
									</p>
								</section>
								<section>
									<h3>Fazit</h3>
									<p>
										Es macht sehr Spass und ich habe viel Motivation, an diesem Projekt zu arbeiten.
										Vor allem weil ich sehr viel Zeit und Aufwand hatte, um die Technologien zu
										lernen und zu verwenden. Jedoch gehe ich ohne Planung vor und mache, auf was ich
										gerade Lust habe, was die Produktivität beeinträchtigt. Jedoch habe ich mich auf
										diese Weise entschieden, da ich so freier bin.
									</p>
								</section>
								<section>
									<h3>Tools</h3>
									<div className={"project-tools"} data-count={6}>
										<ToolImage name={"Node.JS"} />
										<ToolImage name={"Express"} />
										<ToolImage name={"React"} />
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
