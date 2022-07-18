// import libraries
import React from "react";
import { Container } from "react-bootstrap";
import Head from "../../components/common/Head";
import ServicesList from "../../components/ServicesList";
import ProjectsList from "../../components/ProjectsList";

// import css
import "./Home.css";

// render the page home
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
									<span id={"welcome-teaser"}>- Dienstleistungen jeglicher Art -</span>
									<br />
									Ich biete verschiedene IT Dienstleistungen für jedermann an, um neben meiner Lehre
									als Informatiker etwas zu verdienen.
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
								<p>An folgenden Projekte war ich beteiligt:</p>
								<ProjectsList space={70} />
							</section>
						</article>
					</Container>
				</main>
			</>
		);
	}
}
