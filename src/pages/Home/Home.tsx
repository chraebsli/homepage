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
						<section id={"welcome"}>
							<h1>Willkommen bei chraebsli IT-Services!</h1>
							<p>
								Dienstleistungen jeglicher Art.
								<br />
								Ich biete verschiedene IT Dienstleistungen für jedermann an, um neben meiner Lehre als
								Informatiker etwas zu verdienen.
							</p>
						</section>
						<hr />
						<section>
							<h2>Meine Dienstleistungen</h2>
							<p>Ich biete folgende Dienstleistungen an</p>
							<div>
								<ServicesList space={70} />
							</div>
						</section>
						<hr />
						<section>
							<h2>Meine Projekte</h2>
							<p>An folgenden Projekte war ich beteiligt</p>
							<div>
								<ProjectsList space={70} />
							</div>
						</section>

						<div className="page-content d-flex justify-content-center"></div>
					</Container>
				</main>
			</>
		);
	}
}
