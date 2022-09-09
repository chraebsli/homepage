import React from "react";
import { Container, Stack } from "@mui/material";
import Head from "../../../components/common/Head";

// assets and sass
import "../Services.sass";
import ImageDatabase from "../assets/database.jpg";

export default class Database extends React.Component<{
	loading?: boolean;
}> {
	static defaultProps = {
		loading: false,
	};
	pageName = "Database";

	render() {
		return (
			<>
				<Head title={this.pageName} />
				<main className={"single-service"}>
					<Container>
						<section className={"page-title"}>
							<h2>{this.pageName}</h2>
						</section>

						<article className="page-content">
							<img src={ImageDatabase} alt={"Illustration Datenbank"} height={200} />
							<Stack spacing={3}>
								<section>
									<p className={"italic"}>
										Möchten Sie eine Datenbank erstellen oder von einer anderen alle Daten in eine
										neue übernehmen?
									</p>
									<p>
										Ich erstelle für Sie eine neue Datenbank oder übernehme Daten von einer anderen
										Datenbank in eine neue, egal ob SQL oder NoSQL. Dabei können Sie selbst
										entscheiden, welche Datenbank Sie verwenden möchten. Es spielt keine Rolle,
										welche Art von Daten Sie speichern möchten, ob Dokumente oder zum Beispiel ein
										Login-System.
									</p>
									<p>
										Folgende Features sind inbegriffen:
										<ul>
											<li>vollständiges Datenbanksystem</li>
											<li>überlegte Struktur</li>
											<li>einfach zu verwalten</li>
											<li>schnelle Abfragen</li>
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
