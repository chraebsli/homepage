import React from "react";
import Head from "../../components/common/Head";
import { Container } from "@mui/material";
import "swiper/css";
import "swiper/css/pagination";

// assets and css
import "./Projects.css";
import projectsList from "../Projects/projects-list";
import ProjectsList from "../../components/projects/ProjectsList";

export default class Projects extends React.Component<{
	loading?: boolean;
}> {
	static defaultProps = {
		loading: false,
	};
	pageName = "Projects";
	projects = projectsList;

	render() {
		return (
			<>
				<Head title={this.pageName}></Head>
				<main className={this.pageName.toLowerCase()}>
					<Container>
						<section className={"page-title"}>
							<p>Projekte</p>
						</section>

						<article className="page-content">
							<ProjectsList />
						</article>
					</Container>
				</main>
			</>
		);
	}
}
