import React from "react";
import { Card } from "react-bootstrap";
import { Container, Stack } from "@mui/material";
import Head from "../../components/common/Head";
import ProjectsList from "../../components/projects/ProjectsList";
import Languages from "../../components/me/Languages";
import DevTools from "../../components/me/DevTools";

// assets and sass
import "./Me.sass";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import WebIcon from "@mui/icons-material/Web";
import PollIcon from "@mui/icons-material/Poll";
import projectsList from "../Projects/projects-list";
import Server from "../../components/me/Server";

export default class Me extends React.Component {
	pageName = "Me";
	projects = projectsList;

	render() {
		return (
			<>
				<Head title={this.pageName} />
				<main className={this.pageName.toLowerCase()}>
					<Container>
						<article>
							<Stack spacing={3}>
								<Card className={"me-card"} id={"me"}>
									<Card.Body>
										<Card.Title>
											<h2>
												<PersonIcon /> über mich
											</h2>
										</Card.Title>
										<Card.Text>
											<p>
												Mein Name ist Nicholas Krebs und ich bin ein Informatiklehrling
												Fachrichtung Betriebsinformatik im 3. Lehrjahr in der{" "}
												<a href="https://www.tfbern.ch/">Technischen Fachschule</a> in Bern. Ich
												interessiere mich sehr für die Informatik und am meisten für die{" "}
												<b>Webentwicklung</b>, in der ich mich dieses Jahr auch spezialisieren
												werde.
												<br />
												In meiner Freizeit investiere ich meine Zeit gerne in das Weiterbilden
												von JavaScript/ TypeScript und anderen Programmiersprachen für Web und
												Bibliotheken wie React. Früher habe ich kleinere Projekte erstellt, um
												mit praktischen Aufgaben lernen zu können. Das waren aber nur Projekte
												wie Tic-Tac-Toe. Nun möchte ich aber grössere Projekte{" "}
												<b>neben meiner Ausbildung</b> zu entwickeln für mich oder für Kunden.
												<br />
												Ich habe bereits für 2 Vereine aus meiner Umgebung eine Website
												entwickelt oder bin aktiv in der Entwicklung. Mehr dazu bei den{" "}
												<a href={"#projects"}>Projekten</a>
											</p>
										</Card.Text>
									</Card.Body>
								</Card>
								<Card className={"skills-card"} id={"skills"}>
									<Card.Body>
										<Card.Title>
											<h2>
												<SchoolIcon /> skills
											</h2>
										</Card.Title>
										<Card.Text>
											<p>
												Hier sind einzelne Skills, die ich in meiner Freizeit oder bei der
												Ausbildung erlernt und weiterentwickelt habe.
											</p>
										</Card.Text>
										<Stack
											className={"card-container"}
											direction={{ xs: "column", md: "row" }}
											spacing={3}>
											<Languages />
											<DevTools />
											<Server />
										</Stack>
									</Card.Body>
								</Card>
								<Card className={"projects-card"} id={"projects"}>
									<Card.Body>
										<Card.Title>
											<h2>
												<WebIcon /> projekte
											</h2>
										</Card.Title>
										<Card.Text>
											<p>Projekte, die ich realisiert habe:</p>
										</Card.Text>
										<ProjectsList />
									</Card.Body>
								</Card>
								<Card className={"stats"} id={"stats"}>
									<Card.Body>
										<Card.Title>
											<h2>
												<PollIcon /> Statistiken
											</h2>
										</Card.Title>
										<Card.Text>
											<p>
												WakaTime Statistiken zu Programmiersprachen und Aktivität in den letzten
												30 Tagen{" "}
											</p>
										</Card.Text>
										<Stack
											className={"card-container"}
											direction={{ xs: "column", md: "row" }}
											spacing={3}>
											<figure>
												<embed src="https://wakatime.com/share/@chraebsli/e7bc95fa-f16d-45da-bae8-2320d8191b65.svg" />
											</figure>
											<figure>
												<embed src="https://wakatime.com/share/@chraebsli/661154cf-54c3-4aea-ab11-2530d09ad145.svg" />
											</figure>
										</Stack>
									</Card.Body>
								</Card>
							</Stack>
						</article>
					</Container>
				</main>
			</>
		);
	}
}
