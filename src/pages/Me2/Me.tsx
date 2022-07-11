// import libraries
import React from "react";
import { Card } from "react-bootstrap";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Head from "../../components/common/Head";
import Projects from "../../components/me/Projects";
import Languages from "../../components/me/Languages";
import DevTools from "../../components/me/DevTools";

// import assets and css
import "./Me.css";
import projectsList from "../Projects/projects-list";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import WebIcon from "@mui/icons-material/Web";

export default class Me extends React.Component {
	pageName = "Me";
	projects = projectsList;

	render() {
		return (
			<>
				<Head title={this.pageName} />
				<main className={this.pageName.toLowerCase()}>
					<Container>
						<Stack spacing={3}>
							<Card className={"me-card"} id={"me"}>
								<Card.Body>
									<Card.Title>
										<h2>
											<PersonIcon /> about me
										</h2>
									</Card.Title>
									<Card.Text>
										<p>
											Mein Name ist Nicholas Krebs und ich bin ein <b>Informatik Lehrling</b>{" "}
											Fachrichtung Betriebsinformatik im <b>3. Lehrjahr</b> in der{" "}
											<a href="https://www.tfbern.ch/">Technischen Fachschule</a> in Bern. Ich
											interessiere mich sehr für die Informatik und speziell für die{" "}
											<b>Webentwicklung</b> in der Ich dieses Jahr mich spezialisieren werde.
											<br />
											Auch in meiner <b>Freizeit</b> investiere ich meine Zeit gerne in das{" "}
											<b>Lernen oder Weiterbilden</b> neuer Programmiersprachen. Früher habe ich
											kleinere Projekte erstellt um praktische lernen zu können. Nun möchte ich
											aber anfangen, <b>grössere Projekte</b> neben meiner Arbeit zu entwickeln.
											Ein Beispiel ist diese Website, die ich{" "}
											<b>selbstständig gestalten und entwickelt</b> habe.
											<br />
											Aber auch für Vereine aus meiner Umgebung habe ich bereits eine Website
											entwickelt oder entwickle gerade eine. Mehr dazu bei den{" "}
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
											Hier sind einzelne Skills, die ich in meiner Freizeit und bei meiner Arbeit
											erlernt und weiterentwickelt habe.
										</p>
									</Card.Text>
									<Stack direction={"row"} spacing={3}>
										<Languages />
										<DevTools />
									</Stack>
								</Card.Body>
							</Card>
							<Card className={"projects-card"} id={"projects"}>
								<Card.Body>
									<Card.Title>
										<h2>
											<WebIcon /> projects
										</h2>
									</Card.Title>
									<Card.Text>
										<p>
											Projekte, an denen ich von der Arbeit aus beteiligt war oder die in meiner
											Freizeit entwickelt habe.
										</p>
									</Card.Text>
									<Projects />
								</Card.Body>
							</Card>
						</Stack>
					</Container>
				</main>
			</>
		);
	}
}
