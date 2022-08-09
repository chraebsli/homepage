import React from "react";
import { Container } from "react-bootstrap";
import Head from "../../components/common/Head";
import ServicesList from "../../components/services/ServicesList";
import ProjectsList from "../../components/projects/ProjectsList";
import SocialMediaList from "../../components/SocialMediaList";

// assets and css
import "./Home.css";

export default class Home extends React.Component {
	pageName = "Home";

	render() {
		return (
			<>
				<Head title={this.pageName} />
				<main className={this.pageName.toLowerCase()}>
					<Container>
						<article>
							<section id={"welcome"}>
								<h1>Willkommen bei chraebsli IT-Services!</h1>
								<p>
									<span id={"welcome-teaser"}>- IT-Dienstleistungen jeglicher Art -</span>
									<br />
									Ich biete diverse IT Dienstleistungen an, um neben meiner schulischen Lehre als
									Informatiker etwas Geld zu verdienen.
								</p>
							</section>
							<hr />
							<section>
								<h2>Dienstleistungen</h2>
								<p>Ich biete folgende Dienstleistungen an:</p>
								<ServicesList space={70} />
							</section>
							<hr />
							<section>
								<h2>Projekte</h2>
								<p>An folgenden Projekte bin ich beteiligt:</p>
								<ProjectsList space={70} />
							</section>
							<hr />
							<section>
								<h2>Social Media</h2>
								<p>Ich bin auf folgenden Social Media Platformen:</p>
								<SocialMediaList />
							</section>
						</article>
					</Container>
				</main>
			</>
		);
	}
}
