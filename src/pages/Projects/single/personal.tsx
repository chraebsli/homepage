import React from "react";
import { Stack, Typography } from "@mui/material";
import Page from "../../../components/common/Page";
import { Line, PageTitle, SectionTitle } from "../../../components/Text";

// assets and styles
import "../Projects.sass";
import ToolImage from "../../../components/projects/ToolImage";
import WakaTimeBadge from "../../../components/projects/WakaTimeBadge";
import projectsList from "../projects-list";

export default function Personal() {
	const pageName = "Persönliche Website";
	const project = projectsList().find(project => project.id === "personal-website");
	return (
		<Page pageName={ pageName } className={ "single-project" }>
			<section>
				<PageTitle>{ pageName }</PageTitle>
				<WakaTimeBadge url={ project?.wakaTimeBadge } />
				<Line bottom={ 2 } />
			</section>

			<article className="page-content">
				<Stack spacing={ 3 }>
					<section>
						<SectionTitle>Beschreibung</SectionTitle>
						<Typography>
							Ich wollte schon längere Zeit eine eigene Website haben, die ich ohne CMS entwickelt
							habe. So kann ich zusätzlich lernen, was mich interessiert und bin frei, wie ich es
							umsetzten möchte. Ich habe mehrmals angefangen aber immer wieder aufgehört, weil ich
							keine Zeit mehr hatte. Schlussendlich konnte ich mich überreden und war motiviert,
							mit der JavaScript Bibliothek React die Website zu erstellen.
						</Typography>
					</section>
					<section>
						<SectionTitle>Inhalt</SectionTitle>
						<Typography>
							Auf meiner Website biete ich Dienstleistungen an, um in meiner Freizeit zu arbeiten
							und mich weiterzubilden. Zusätzlich möchte ich Geld verdienen, da ich in meiner
							Ausbildung kein Lohn erhalte. Ich möchte auch meine vergangenen Projekte zeigen, die
							ich erstellt habe und so meine Erfahrung zeigen.
						</Typography>
					</section>
					<section>
						<SectionTitle>Vorgehen</SectionTitle>
						<Typography>
							Da ich mich in der Programmiersprache JavaScript/ TypeScript weiterbilden will, habe
							ich angefangen mit React die Website zu entwickeln. Ich werde an dieser Website
							öfters Verbesserungen vornehmen, da ich immer wieder neue Ideen habe.
						</Typography>
					</section>
					<section>
						<SectionTitle>Fazit</SectionTitle>
						<Typography>
							Es macht sehr Spass und ich habe viel Motivation, an dieser Website zu arbeiten. Vor
							allem weil ich sehr viel Zeit und Aufwand hatte, um die Technologien zu lernen und
							zu verwenden. Ich will ohne Planung an diesem Projekt arbeiten, da ich so machen
							kann was ich möchte und weniger Stress habe, mich möglichst an die Planung zu
							halten.
						</Typography>
					</section>
					<section>
						<SectionTitle>Tools</SectionTitle>
						<div className={ "project-tools" } data-count={ 4 }>
							<ToolImage name={ "React" } />
							<ToolImage name={ "Node.JS" } />
							<ToolImage name={ "TypeScript" } />
							<ToolImage name={ "MUI" } />
						</div>
					</section>
				</Stack>
			</article>
		</Page>
	);
}
