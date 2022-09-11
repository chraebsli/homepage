import React from "react";
import Page from "../../components/common/Page";
import "swiper/css";
import "swiper/css/pagination";
import { Line, PageTitle } from "../../components/Text";
import { useTranslation } from "react-i18next";

// assets and styles
import "./Projects.sass";
import ProjectsList from "../../components/projects/ProjectsList";

export default function Projects() {
	const { t } = useTranslation();
	return (
		<Page pageName={ "Projects" }>
			<section>
				<PageTitle>{ t("projects.title") }</PageTitle>
				<Line bottom={ 2 } />
			</section>

			<article className="page-content">
				<ProjectsList />
			</article>
		</Page>
	);
}
