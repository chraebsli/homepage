// import libraries
import React from "react";
import { Card } from "react-bootstrap";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Progress from "../../components/Progress";
import Head from "../../components/Head";

// import assets and css
import "./Me.css";
import PersonIcon from "@mui/icons-material/Person";
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
import { GiProgression } from "react-icons/gi";
import { FaLaptopCode, FaTools } from "react-icons/fa";
import { RiCodeSSlashFill } from "react-icons/ri";

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
											<PersonIcon /> about me{" "}
										</h2>
									</Card.Title>
									<Card.Text>
										<p>
											Mein Name ist Nicholas Krebs und ich bin ein Informatik Lehrling im 2.
											Lehrjahr in der <a href="https://www.tfbern.ch/">Technischen Fachschule</a>{" "}
											in Bern. Ich interessiere mich sehr für Informatik und vorallem für die
											Webentwicklung. Ich programmiere gerne Webseiten sowie auch Webapps. Mehr
											dazu in den <a href={"#references"}>Referenzen</a>
										</p>
									</Card.Text>
								</Card.Body>
							</Card>
							<Card className={"skills-card"} id={"skills"}>
								<Card.Body>
									<Card.Title>
										<h2>
											<GiProgression /> skills
										</h2>
									</Card.Title>
									<Stack direction={"row"} spacing={3}>
										<Card className={"skills-techs-card"} id={"skills-techs"}>
											<Card.Body>
												<Card.Title>
													<h2>
														<RiCodeSSlashFill /> languages
													</h2>
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
													<h2>
														<FaTools /> tools
													</h2>
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
							<Card className={"references-card"} id={"references"}>
								<Card.Body>
									<Card.Title>
										<h2>
											<FaLaptopCode /> references{" "}
										</h2>
									</Card.Title>
									<Card.Text>
										<div>
											<ul>
												<li className={"project-text"}>
													<a href={"/project/portfolio"}>Portfolio</a>
												</li>
												<li className={"project-text"}>
													<a href={"/project/fischlehrpfad.ch"}>fischlehrpfad.ch</a>
												</li>
												<li className={"project-text"}>
													<a href={"/project/sgrumisberg.ch"}>sgrumisberg.ch</a>
												</li>
												<li className={"project-text"}>
													<a href={"/project/mgrumisberg.ch"}>mgrumisberg.ch</a>
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
