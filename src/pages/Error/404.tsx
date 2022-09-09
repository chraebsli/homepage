import React from "react";
import { Container, Stack } from "@mui/material";
import Head from "../../components/common/Head";

// assets and sass
import "./Error.sass";
import ImageError404 from "./assets/404.jpg";

export default class NotFound404 extends React.Component {
	pageName = "Error 404";

	render() {
		return (
			<>
				<Head title={this.pageName} />
				<main className={"page-content"}>
					<Container>
						<section className={"page-title"}>
							<h2>{this.pageName}</h2>
						</section>

						<article className="page-content">
							<img src={ImageError404} alt={"Illustration Datenbank"} height={200} />
							<Stack spacing={3}>
								<section>
									<h2>Error 404: Die Seite existiert nicht.</h2>
								</section>
							</Stack>
						</article>
					</Container>
				</main>
			</>
		);
	}
}
