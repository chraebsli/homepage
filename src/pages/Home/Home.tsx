import React from "react";
import { Typography } from "@mui/material";
import Head from "../../components/common/Head";
import ServicesList from "../../components/services/ServicesList";
import ProjectsList from "../../components/projects/ProjectsList";
import SocialMediaList from "../../components/SocialMediaList";
import { Line, SectionTitle } from "../../components/Text";

// assets and styles
import "./Home.sass";

export default function Home() {
	const pageName = "Home";
	return (
		<>
			<Head title={ pageName } />
			<main className={ pageName.toLowerCase() }>
				<article>
					<section id={ "welcome" } style={ { marginTop: "10rem" } }>
						<Typography variant={ "h3" } component={ "h1" } sx={ { color: "primary.main" } }>
							Willkommen bei chraebsli IT-Services!
						</Typography>
						<Typography
							sx={ {
								maxWidth: "50rem",
								fontSize: "1.5rem",
							} }>
							<Typography component={ "span" } variant={ "h5" } sx={ { fontStyle: "italic" } }>
								- IT-Dienstleistungen jeglicher Art -
							</Typography>
							<br />
							Ich biete verschiedene IT Dienstleistungen an, um neben meiner schulischen Lehre als
							Informatiker etwas Geld zu verdienen.
						</Typography>
					</section>
					<Line top={ 5 } bottom={ 5 } />
					<section>
						<SectionTitle>Dienstleistungen</SectionTitle>
						<Typography>Ich biete folgende Dienstleistungen an:</Typography>
						<ServicesList space={ 70 } />
					</section>
					<Line top={ 5 } bottom={ 5 } />
					<section>
						<SectionTitle>Projekte</SectionTitle>
						<Typography>Diese Projekte habe ich realisiert:</Typography>
						<ProjectsList space={ 70 } />
					</section>
					<Line top={ 5 } bottom={ 5 } />
					<section>
						<SectionTitle>Social Media</SectionTitle>
						<Typography>Ich bin auf folgenden Social Media Plattformen:</Typography>
						<SocialMediaList />
					</section>
				</article>
			</main>
		</>
	);
}
