import React from "react";
import { Stack, Typography } from "@mui/material";
import Page from "../../../components/common/Page";
import { Line, PageTitle, SectionTitle } from "../../../components/Text";

// assets and styles
import "../Projects.sass";
import ToolImage from "../../../components/projects/ToolImage";
import WakaTimeBadge from "../../../components/projects/WakaTimeBadge";
import projectsList from "../projects-list";

export default function MGRumisberg() {
	const pageName = "MG Rumisberg";
	const urlName = "mgrumisberg.chraebsli.dev";
	const url = `https://${ urlName }`;
	const project = projectsList().find(project => project.id === "mgrumisberg");
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
							Diese Website ist für die Musikgesellschaft Rumisberg, in der ich seit mehreren
							Jahren Mitglied bin. Unsere alte Website war schwierig zu verwalten und ändern. Aus
							diesem Grund sollte ich eine neue Website erstellen, die einfach zu verwalten
							ist.{ " " }
							<br />
							Dieses Projekt ist in Entwicklung.
						</Typography>
					</section>
					<section>
						<SectionTitle>Inhalt</SectionTitle>
						<Typography>
							Auf der Website sollen Daten für unsere Auftritte gelistet und wir möchten unseren
							Verein vorstellen. Es soll aber auch eine Art blogging Beiträge geben, bei denen wir
							Aktuelles aus dem Verein öffentlich teilen wollen. Dazu gehört zB das Teilen von
							Erfolgen und Veränderungen.
						</Typography>
					</section>
					<section>
						<SectionTitle>Vorgehen</SectionTitle>
						<Typography>
							Die Website wird mit dem CMS Grav erstellen, da ich bereits viel Erfahrung mit
							diesem CMS gemacht habe und auch gutes Feedback von den Benutzern erhalten habe. Das
							Design wurde bereits festgelegt und ich arbeite im Moment am Inhalt der Website.
						</Typography>
					</section>
					<section>
						<SectionTitle>Fazit</SectionTitle>
						<Typography>
							Bis jetzt läuft alles wie geplant und ich freue mich, als jüngstes Mitglied nun auch
							einen Beitrag zu meinem Verein leisten zu können, sobald die Website fertig ist.
						</Typography>
					</section>
					<section>
						<SectionTitle>Tools</SectionTitle>
						<div className={ "project-tools" } data-count={ 6 }>
							<ToolImage name={ "Grav" } />
							<ToolImage name={ "PHP" } />
							<ToolImage name={ "Twig" } />
							<ToolImage name={ "HTML5" } />
							<ToolImage name={ "CSS3" } />
							<ToolImage name={ "JavaScript" } />
						</div>
					</section>
				</Stack>
			</article>
		</Page>
	);
}
