import React from "react";
import { Container, Stack } from "@mui/material";
import Head from "../../../components/common/Head";

// assets and sass
import "../Services.sass";
import ImageDevelopWebapp from "../assets/develop-webapp.jpg";

export default class DevelopWebapp extends React.Component<{
	loading?: boolean;
}> {
	static defaultProps = {
		loading: false,
	};
	pageName = "Webapplikation entwickeln";

	render() {
		return (
			<>
				<Head title={this.pageName}></Head>
				<main className={"single-service"}>
					<Container>
						<section className={"page-title"}>
							<h2>{this.pageName}</h2>
						</section>

						<article className="page-content">
							<img src={ImageDevelopWebapp} alt={"Illustration Webapplikation entwickeln"} height={200} />
							<Stack spacing={3}>
								<section>
									<p className={"italic"}>
										Benötigen Sie eine Webapplikation um zum Beispiel bei ihrem Startup
										Arbeitszeiten oder ähnliches zu erfassen?
									</p>
									<p>
										Ich entwickle für Sie die perfekte Webapplikation um bei Startup oder für einen
										persönlichen Zweck mit einem Login System und vielen weiteren Funktionen, die
										Sie möchten.
										<br />
										Die Webapplikation ist sicher und schnell und hat ein modernes Design nach ihren
										Vorstellungen. Dazu wird sie auch mit einer mobile Version erreichbar sein für
										unterwegs. Wenn Sie später weitere Funktionen wünschen, können diese durch den
										cleveren Aufbau auch durch andere Entwickler erweitert werden.
									</p>
									<p>
										Folgende Features sind inbegriffen:
										<ul>
											<li>moderne Webapplikation</li>
											<li>einfach zu bedienen</li>
											<li>einfach erweiterbar</li>
											<li>sichere Daten</li>
										</ul>
									</p>
								</section>
							</Stack>
						</article>
					</Container>
				</main>
			</>
		);
	}
}
