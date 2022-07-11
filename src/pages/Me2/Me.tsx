// import libraries
import React from "react";
import { Card } from "react-bootstrap";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Progress from "../../components/Progress";
import Head from "../../components/Head";

// import assets and css
import "./Me.css";
import {
	SiCloudflare,
	SiCss3,
	SiGithub,
	SiHtml5,
	SiJavascript,
	SiJirasoftware,
	SiLinux,
	SiMysql,
	SiPhp,
	SiPython,
	SiReact,
	SiTypescript,
	SiVisualstudiocode,
	SiWebstorm,
} from "react-icons/si";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import ConstructionIcon from "@mui/icons-material/Construction";
import WebIcon from "@mui/icons-material/Web";

export default class Me extends React.Component {
	pageName = "Me";

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
										<Card className={"skills-techs-card"} id={"skills-techs"}>
											<Card.Body>
												<Card.Title>
													<h3>
														<CodeIcon /> languages
													</h3>
												</Card.Title>
												<Card.Text>
													<div>
														<span className={"progress-text"}>
															<SiHtml5 />
															HTML / <SiCss3 />
															CSS
														</span>
														<progress className={"progress"} value={"70"} max={"100"} />
													</div>
													<div>
														<span className={"progress-text"}>
															<SiJavascript />
															JS / <SiTypescript />
															TS
														</span>
														<progress className={"progress"} value={"50"} max={"100"} />
													</div>
													<Progress text={"MySQL"} icon={<SiMysql />} progress={80} />
													<Progress text={"React"} icon={<SiReact />} progress={60} />
													<Progress text={"PHP"} icon={<SiPhp />} progress={70} />
													<Progress text={"Python"} icon={<SiPython />} progress={50} />
												</Card.Text>
											</Card.Body>
										</Card>
										<Card className={"skills-soft-card"} id={"skills-soft"}>
											<Card.Body>
												<Card.Title>
													<h3>
														<ConstructionIcon /> dev tools
													</h3>
												</Card.Title>
												<Card.Text>
													<Progress
														text={"VS Code"}
														icon={<SiVisualstudiocode />}
														progress={80}
													/>
													<Progress text={"Webstorm"} icon={<SiWebstorm />} progress={70} />
													<Progress text={"Github"} icon={<SiGithub />} progress={80} />
													<Progress
														text={"Cloudflare"}
														icon={<SiCloudflare />}
														progress={75}
													/>
													<Progress text={"Jira"} icon={<SiJirasoftware />} progress={60} />
													<Progress text={"Linux"} icon={<SiLinux />} progress={50} />
												</Card.Text>
											</Card.Body>
										</Card>
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
											Projekte, an denen ich von der Arbeit asu beteiligt war oder die in meiner
											Freizeit entwickelt habe.
										</p>
									</Card.Text>
									<Card.Text>
										<div>
											<ul>
												<li className={"project-text"}>
													<a href={"/project/personal-website"}>eigene Website</a>
												</li>
												<li className={"project-text"}>
													<a href={"/project/fischlehrpfad"}>Fischlehrpfad</a>
												</li>
												<li className={"project-text"}>
													<a href={"/project/sgrumisberg.ch"}>sgrumisberg.ch</a>
												</li>
											</ul>
										</div>
									</Card.Text>
								</Card.Body>
							</Card>
						</Stack>
					</Container>
				</main>
			</>
		);
	}
}
