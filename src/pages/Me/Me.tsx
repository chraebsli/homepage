import React from "react";
import { Card, Grid, Stack, Typography, useTheme } from "@mui/material";
import Page from "../../components/common/Page";
import ProjectsList from "../../components/projects/ProjectsList";
import Frontend from "../../components/me/Frontend";
import Backend from "../../components/me/Backend";
import DevTools from "../../components/me/DevTools";
import General from "../../components/me/General";

// assets and styles
import "./Me.sass";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import WebIcon from "@mui/icons-material/Web";
import PollIcon from "@mui/icons-material/Poll";

export default function Me() {
	const scheme = useTheme().palette.mode;
	const wakaTimeStats = {
		activity: {
			light: "e7bc95fa-f16d-45da-bae8-2320d8191b65",
			dark: "c00be785-7e1e-4e58-bb64-2193669eadfb",
		},
		languages: {
			light: "661154cf-54c3-4aea-ab11-2530d09ad145",
			dark: "ae7c9e87-454d-4942-8133-b8c11c34274d",
		},
	};

	return (
		<Page pageName={ "Me" }>
			<article>
				<Stack spacing={ 3 }>
					<Card id={ "me" } sx={ { padding: "2rem" } }>
						<h2>
							<PersonIcon /> Über mich
						</h2>
						<Typography>
							Mein Name ist Nicholas Krebs und ich bin ein Informatiklehrling Fachrichtung
							Betriebsinformatik im 3. Lehrjahr in der{ " " }
							<a href="https://www.tfbern.ch/">Technischen Fachschule</a> in Bern. Ich
							interessiere mich sehr für die Informatik und am meisten für die{ " " }
							<b>Webentwicklung</b>, in der ich mich dieses Jahr auch spezialisieren werde.
							<br />
							In meiner Freizeit investiere ich meine Zeit gerne in das Weiterbilden von
							JavaScript/ TypeScript und anderen Programmiersprachen für Web und Bibliotheken wie
							React. Früher habe ich kleinere Projekte erstellt, um mit praktischen Aufgaben
							lernen zu können. Das waren aber nur Projekte wie Tic-Tac-Toe. Nun möchte ich aber
							grössere Projekte <b>neben meiner Ausbildung</b> zu entwickeln für mich oder für
							Kunden.
							<br />
							Ich habe bereits für 2 Vereine aus meiner Umgebung eine Website entwickelt oder bin
							aktiv in der Entwicklung. Mehr dazu bei den <a href={ "#projects" }>Projekten</a>
						</Typography>
					</Card>
					<Card id={ "skills" } sx={ { padding: "2rem" } }>
						<h2>
							<SchoolIcon /> Skills
						</h2>
						<Typography>
							Hier sind einzelne Skills, die ich in meiner Freizeit oder bei der Ausbildung
							erlernt und weiterentwickelt habe.
						</Typography>
						<Grid container spacing={ 3 } sx={ { padding: "1rem 0" } }>
							<Frontend size={ { xs: 12, sm: 6 } } />
							<Backend size={ { xs: 12, sm: 6 } } />
							<DevTools size={ { xs: 12, sm: 6 } } />
							<General size={ { xs: 12, sm: 6 } } />
						</Grid>
					</Card>
					<Card id={ "projects" } sx={ { padding: "2rem" } }>
						<h2>
							<WebIcon /> Projekte
						</h2>
						<Typography>Projekte, die ich realisiert habe:</Typography>
						<ProjectsList />
					</Card>
					<Card id={ "stats" } sx={ { padding: "2rem" } }>
						<h2>
							<PollIcon /> Statistiken
						</h2>
						<Typography>
							WakaTime Statistiken zu Programmiersprachen und Aktivität in den letzten 30 Tagen
						</Typography>
						<Stack direction={ { xs: "column", md: "row" } } spacing={ 3 }>
							<figure>
								<embed src={ `https://wakatime.com/share/@chraebsli/${ wakaTimeStats.activity[scheme] }.svg` } />
							</figure>
							<figure>
								<embed src={ `https://wakatime.com/share/@chraebsli/${ wakaTimeStats.languages[scheme] }.svg` } />
							</figure>
						</Stack>
					</Card>
				</Stack>
			</article>
		</Page>
	);
}
