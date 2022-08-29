import React from "react";
import { Container, Stack } from "@mui/material";
import Head from "../../../components/common/Head";

// assets and sass
import "../Projects.sass";
import ToolImage from "../../../components/projects/ToolImage";
import WakaTimeBadge from "../../../components/projects/WakaTimeBadge";
import projectsList from "../projects-list";

export default class HomeDashboard extends React.Component<{
	loading?: boolean;
}> {
	static defaultProps = {
		loading: false,
	};
	pageName = "Home Dashboard";
	project = projectsList.find(project => project.id === "home-dashboard");

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
										Vor etwas längerer Zeit hatte ich im Internet das Projekt{" "}
										<a href={"https://magicmirror.builders/"}>Magic Mirror</a> gesehen. Meine Mutter
										hat dann etwas Geld ausgegeben für einen TouchScreen und einen Raspberry Pi, auf
										dem die Software laufen soll. Den Bildschirm haben wir beim Eingang der Wohnung
										aufgehängt. Da aber viele Features nicht existieren die wir wollten, habe ich
										angefangen, selber so ein Dashboard zu erstellen.
									</p>
								</section>
								<section>
									<h3>Inhalt</h3>
									<p>
										Es soll ein Dashboard sein, welches die wichtigsten Informationen anzeigt. Dazu
										gehören Zeit & Datum, Wetter und die wichtigsten Termine. Außerdem soll die
										digitale Einkaufsliste angezeigt werden. Auch die Lampen wollen wir über dieses
										Dashboard steuern können, die bereits über die Google Home App verbunden sind.
										Weitere Features sind in Planung.
									</p>
								</section>
								<section>
									<h3>Vorgehen</h3>
									<p>
										Das Dashboard läuft mit TypeScript und React. Für das Backend verwende ich
										Next.js, welches Daten von verschiedenen APIs aufbereitet und für das Frontend
										bereitstellt. Vom Design übernehme ich vieles vom Magic Mirror.
									</p>
								</section>
								<section>
									<h3>Fazit</h3>
									<p>
										Das Dashboard ist noch nicht fertig, aber es funktioniert schon sehr gut.
										Features wie Uhr, Wetter und Kalender sind bereits implementiert. Die
										Einkaufsliste und die Steuerung der Lampen sind noch in Arbeit.
									</p>
								</section>
								<section>
									<h3>Tools</h3>
									<div className={"project-tools"} data-count={5}>
										<ToolImage name={"React"} />
										<ToolImage name={"Next.JS"} />
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
