import React from "react";
import { Container, Stack } from "@mui/material";
import Head from "../../../components/common/Head";

// assets and sass
import "../Services.sass";
import ImageITSupport from "../assets/it-support.jpg";

export default class ITSupport extends React.Component<{
	loading?: boolean;
}> {
	static defaultProps = {
		loading: false,
	};
	pageName = "IT Support";

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
							<img src={ImageITSupport} alt={"Illustration Website erstellen"} height={200} />
							<Stack spacing={3}>
								<section>
									<p className={"italic"}>
										Brauchen Sie Hilfe bezüglich Computer oder Smartphones und wissen nicht mehr
										weiter?
									</p>
									<p>
										Kommen Sie nicht mehr weiter mit Ihrem Computer oder ihrem Smartphone? Zum
										Beispiel beim Installieren von Apps auf einem neuen Gerät oder dessen
										Konfiguration oder Verwendung? Oder haben Fragen bezüglich Sicherheit und
										Datenschutz oder anderer Themen der Computerwelt?
										<br />
										Ich helfe Ihnen gerne weiter und möchte Sie dabei unterstützen, damit Sie in
										Zukunft weniger Fragen und Probleme bezüglich Ihres Computers oder Ihres
										Smartphones haben.
									</p>
									<p>
										Folgende Features sind inbegriffen:
										<ul>
											<li>professioneller Support</li>
											<li>schnelle Hilfe über Chat/ Anruf</li>
											<li>remote/ vor Ort Hilfestellung</li>
											<li>Weiterbildung und Aufklärung</li>
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
