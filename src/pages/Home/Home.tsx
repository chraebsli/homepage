import React from "react";
import { Container, Typography } from "@mui/material";
import Head from "../../components/common/Head";
import ServicesList from "../../components/services/ServicesList";
import ProjectsList from "../../components/projects/ProjectsList";
import SocialMediaList from "../../components/SocialMediaList";

// assets and sass
import "./Home.sass";
import Hr from "../../components/text/hr";

export default class Home extends React.Component {
	pageName = "Home";

	render() {
		return (
			<>
				<Head title={this.pageName} />
				<main className={this.pageName.toLowerCase()}>
					<Container>
						<article>
							<section id={"welcome"} style={{ marginTop: "10rem" }}>
								<Typography variant={"h3"} component={"h1"} sx={{ color: "primary.main" }}>
									Willkommen bei chraebsli IT-Services!
								</Typography>
								<Typography
									component={"p"}
									variant={"body1"}
									sx={{
										maxWidth: "50rem",
										fontSize: "1.5rem",
									}}>
									<Typography component={"span"} variant={"h5"} sx={{ fontStyle: "italic" }}>
										- IT-Dienstleistungen jeglicher Art -
									</Typography>
									<br />
									Ich biete verschiedene IT Dienstleistungen an, um neben meiner schulischen Lehre als
									Informatiker etwas Geld zu verdienen.
								</Typography>
							</section>
							<Hr />
							<section>
								<Typography component={"h2"} variant={"h4"}>
									Dienstleistungen
								</Typography>
								<p>Ich biete folgende Dienstleistungen an:</p>
								<ServicesList space={70} />
							</section>
							<Hr />
							<section>
								<Typography component={"h2"} variant={"h4"}>
									Projekte
								</Typography>
								<p>Diese Projekte habe ich realisiert:</p>
								<ProjectsList space={70} />
							</section>
							<Hr />
							<section>
								<Typography component={"h2"} variant={"h4"}>
									Social Media
								</Typography>
								<p>Ich bin auf folgenden Social Media Plattformen:</p>
								<SocialMediaList />
							</section>
						</article>
					</Container>
				</main>
			</>
		);
	}
}
