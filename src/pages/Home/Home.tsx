import React from "react";
import { Typography } from "@mui/material";
import Page from "../../components/common/Page";
import ServicesList from "../../components/services/ServicesList";
import ProjectsList from "../../components/projects/ProjectsList";
import SocialMediaList from "../../components/social-media/SocialMediaList";
import { Line, SectionTitle } from "../../components/Text";
import { useTranslation } from "react-i18next";

// assets and styles
import "./Home.sass";

export default function Home() {
	const { t } = useTranslation("pages");

	return (
		<Page page={ "home" }>
			<article>
				<section id={ "welcome" } style={ { marginTop: "10rem" } }>
					<Typography variant={ "h3" } component={ "h1" } sx={ { color: "primary.main" } }>
						{ t("home.welcome") }
					</Typography>
					<Typography
						sx={ {
							maxWidth: "50rem",
							fontSize: "1.5rem",
						} }>
						<Typography component={ "span" } variant={ "h5" } sx={ { fontStyle: "italic" } }>
							{ t("home.subWelcome") }
						</Typography>
						<br />
						{ t("home.description") }
					</Typography>
				</section>
				<Line top={ 5 } bottom={ 5 } />
				<section>
					<SectionTitle> { t("home.sections.servicesTitle") } </SectionTitle>
					<Typography>{ t("home.sections.servicesDescription") }</Typography>
					<ServicesList space={ 70 } />
				</section>
				<Line top={ 5 } bottom={ 5 } />
				<section>
					<SectionTitle>{ t("home.sections.projectsTitle") }</SectionTitle>
					<Typography>{ t("home.sections.projectsDescription") }</Typography>
					<ProjectsList space={ 70 } />
				</section>
				<Line top={ 5 } bottom={ 5 } />
				<section>
					<SectionTitle>{ t("home.sections.socialTitle") }</SectionTitle>
					<Typography>{ t("home.sections.socialDescription") }</Typography>
					<SocialMediaList />
				</section>
			</article>
		</Page>
	);
}
