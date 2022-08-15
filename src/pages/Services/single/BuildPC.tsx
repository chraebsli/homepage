import React from "react";
import { Container, Stack } from "@mui/material";
import Head from "../../../components/common/Head";

// assets and sass
import "../Services.sass";
import ImageBuildPC from "../assets/build-pc.jpg";

export default class BuildPC extends React.Component<{
	loading?: boolean;
}> {
	static defaultProps = {
		loading: false,
	};
	pageName = "PC bauen";

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
							<img src={ImageBuildPC} alt={"Illustration PC bauen"} height={200} />
							<Stack spacing={3}>
								<section>
									<p className={"italic"}>
										Möchten Sie einen neuen PC oder Laptop für zu Hause der Ihren Anfordern
										entspricht?
									</p>
									<p>
										Ich helfe Ihnen gerne bei der Auswahl eines neuen PCs oder Laptops optimal für
										Ihren Gebrauch im Alltag ist oder baue einen PC nach ihren Vorstellungen vom
										Aussehen und seiner Konfiguration.
										<br />
										Es gibt sehr viele Laptops und PCs, die aber von den Spezifikationen nicht
										optimiert für Ihren Gebrauch sind. Deshalb kosten Sie viel und meistens
										benötigen Sie Teile der Leistung gar nicht.
									</p>
									<p>
										Folgende Features sind inbegriffen:
										<ul>
											<li>persönliche Beratung</li>
											<li>optimiert für Sie</li>
											<li>günstig</li>
											<li>nach Ihren Wünschen</li>
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
