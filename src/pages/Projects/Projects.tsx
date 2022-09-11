import React from "react";
import Head from "../../components/common/Head";
import "swiper/css";
import "swiper/css/pagination";
import { Line, PageTitle } from "../../components/Text";

// assets and styles
import "./Projects.sass";
import ProjectsList from "../../components/projects/ProjectsList";

export default function Projects() {
	const pageName = "Projects";

	return (
		<>
			<Head title={ pageName } />
			<main className={ pageName.toLowerCase() }>
				<section>
					<PageTitle>Projekte</PageTitle>
					<Line bottom={ 2 } />
				</section>

				<article className="page-content">
					<ProjectsList />
				</article>
			</main>
		</>
	);
}
