import React from "react";
import { Card } from "react-bootstrap";
import { Container, Stack } from "@mui/material";
import Head from "../../components/common/Head";
import ProjectsList from "../../components/projects/ProjectsList";
import Languages from "../../components/me/Languages";
import DevTools from "../../components/me/DevTools";

// assets and css
import "./Me.css";
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
												Mein Name ist Nicholas Krebs und ich bin ein Informatik Lehrling
												Fachrichtung Betriebsinformatik im 3. Lehrjahr in der{" "}
												<a href="https://www.tfbern.ch/">Technischen Fachschule</a> in Bern. Ich
												interessiere mich sehr für die Informatik und am meisten für die{" "}
												<b>Webentwicklung</b>, in der ich mich dieses Jahr auch spezialisieren
												werde.
												<br />
												In meiner Freizeit investiere ich meine Zeit gerne in das Lernen oder
												Weiterbilden neuer Programmiersprachen. Früher habe ich kleinere
												Projekte erstellt um praktische lernen zu können. Nun möchte ich aber
												anfangen, mittel grosse Projekte <b>neben meiner Arbeit</b>{" "}
												selbstständig zu entwickeln. Ein Beispiel dafür ist diese Website, da
												ich sie ganz alleine gestalten und anschliessend programmiert habe.
												<br />
												Aber auch für Vereine aus meiner Umgebung habe ich bereits eine Website
												entwickelt oder bin in der Planung, eine zu entwickeln. Mehr dazu bei
												den <a href={"#projects"}>Projekten</a>
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
												Hier sind einzelne Skills, die ich in meiner Freizeit oder meiner Arbeit
												erlernt und weiterentwickelt habe.
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
											<p>
												Projekte, an denen ich von der Arbeit aus beteiligt war oder die in
												meiner Freizeit entwickelt habe.
											</p>
										</Card.Text>
										<ProjectsList />
									</Card.Body>
								</Card>
								<Card className={"stats"} id={"stats"}>
									<Card.Body>
										<Card.Title>
											<h2>
												<PollIcon /> stats
											</h2>
										</Card.Title>
										<Card.Text>
											<p>Statistiken</p>
										</Card.Text>
										<Stack
											className={"card-container"}
											direction={{ xs: "column", md: "row" }}
											spacing={3}>
											<figure>
												<embed src="https://wakatime.com/share/@chraebsli/e7bc95fa-f16d-45da-bae8-2320d8191b65.svg"></embed>
											</figure>
											<figure>
												<embed src="https://wakatime.com/share/@chraebsli/ec37c5b1-ba15-4ac0-b6d6-4b93866d58cc.svg"></embed>
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
