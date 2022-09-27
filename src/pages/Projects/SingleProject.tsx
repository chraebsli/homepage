import React from "react";
import { useLocation } from "react-router-dom";
import { Stack, Typography } from "@mui/material";
import Page from "../../components/common/Page";
import { Line, PageTitle, SectionTitle } from "../../components/Text";
import NotFound404 from "../Error/404";
import { useTranslation } from "react-i18next";

// assets and styles
import "./Projects.sass";
import ToolImage from "../../components/projects/ToolImage";
import WakaTimeBadge from "../../components/projects/WakaTimeBadge";
import projectsList from "../../components/projects/projects-list";

export default function SingleProject$() {
	const { t } = useTranslation("common");

	const pages = useLocation().pathname.split("/");
	const page = pages[pages.length - 1];

	const projects = projectsList();
	const possibleProjects = projects.find(project => project.id === page);

	if (!possibleProjects) return <NotFound404 />;
	const {
		id, title, page: {
			wakaTimeBadge, textDescription, textContent, titleProceed, titleConclusion, tools, website,
		},
	} = possibleProjects;
	const url = `https://${ website }`;

	return (
		<Page page={ `projects.${ id }` } className={ "single-project" }>
			<section>
				<PageTitle>{ title }</PageTitle>
				<WakaTimeBadge url={ wakaTimeBadge } />
				<Line bottom={ 2 } />
			</section>

			<article className="page-content">
				<Stack spacing={ 3 }>
					<section>
						<SectionTitle> { t("projects.single.titleDescription") } </SectionTitle>
						<Typography> { textDescription } </Typography>
					</section>
					<section>
						<SectionTitle> { t("projects.single.titleContent") } </SectionTitle>
						<Typography> { textContent } </Typography>
					</section>
					<section>
						<SectionTitle> { t("projects.single.titleProceed") } </SectionTitle>
						<Typography> { titleProceed } </Typography>
					</section>
					<section>
						<SectionTitle> { t("projects.single.titleConclusion") } </SectionTitle>
						<Typography> { titleConclusion } </Typography>
					</section>
					<section>
						<SectionTitle> { t("projects.single.titleTools") } </SectionTitle>
						<div className={ "project-tools" } data-count={ 6 }>
							{ tools.map((tool: string, i: number) => <ToolImage key={ i } name={ tool } />) }
						</div>
					</section>
					{ website ? (
						<section>
							<SectionTitle>
								Website - <a href={ url } rel={ "noopener noreferrer" }>{ website }</a>
							</SectionTitle>
							<div className={ "iframe-container" }>
								<iframe
									src={ url }
									width={ 1280 }
									height={ 720 }
									title={ title }
									loading={ "lazy" }
								/>
							</div>
						</section>
					) : null }
				</Stack>
			</article>
		</Page>
	);
}
