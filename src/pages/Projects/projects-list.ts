import { useTranslation } from "react-i18next";
import Project from "../../models/project";

export default function projectsList(): Project[] {
	const { t } = useTranslation("common");

	return [
		new Project(
			"fischlehrpfad",
			t("projects.fischlehrpfad.title"),
			"/project/fischlehrpfad",
			{
				description: t("projects.fischlehrpfad.description"),
				tags: t("projects.fischlehrpfad.tags", { returnObjects: true }),
			},
			{
				wakaTimeBadge: "https://wakatime.com/badge/github/chraebslii/Fischlehrpfad-Burgdorf",
				textDescription: t("projects.fischlehrpfad.page.textDescription"),
				textContent: t("projects.fischlehrpfad.page.textContent"),
				textVorgehen: t("projects.fischlehrpfad.page.textVorgehen"),
				textFazit: t("projects.fischlehrpfad.page.textFazit"),
				tools: [ "Grav", "PHP", "Twig", "HTML5", "CSS3", "JavaScript" ],
				website: "fischlehrpfad.ch",
			},
		),
		new Project(
			"personal",
			t("projects.personal.title"),
			"/project/personal",
			{
				description: t("projects.personal.description"),
				tags: t("projects.personal.tags", { returnObjects: true }),
			},
			{
				wakaTimeBadge: "https://wakatime.com/badge/github/chraebslii/homepage",
				textDescription: t("projects.personal.page.textDescription"),
				textContent: t("projects.personal.page.textContent"),
				textVorgehen: t("projects.personal.page.textVorgehen"),
				textFazit: t("projects.personal.page.textFazit"),
				tools: [ "React", "Node.JS", "TypeScript", "MUI" ],
			},
		),
		new Project(
			"sgrumisberg",
			t("projects.sgrumisberg.title"),
			"/project/sgrumisberg",
			{
				description: t("projects.sgrumisberg.description"),
				tags: t("projects.sgrumisberg.tags", { returnObjects: true }),
			},
			{
				wakaTimeBadge: "https://wakatime.com/badge/github/chraebslii/sgrumisberg.ch",
				textDescription: t("projects.sgrumisberg.page.textDescription"),
				textContent: t("projects.sgrumisberg.page.textContent"),
				textVorgehen: t("projects.sgrumisberg.page.textVorgehen"),
				textFazit: t("projects.sgrumisberg.page.textFazit"),
				tools: [ "Grav", "PHP", "Twig", "HTML5", "CSS3", "JavaScript" ],
				website: "sgrumisberg.ch",
			},
		),
		new Project(
			"mgrumisberg",
			t("projects.mgrumisberg.title"),
			"/project/mgrumisberg",
			{
				description: t("projects.mgrumisberg.description"),
				tags: t("projects.mgrumisberg.tags", { returnObjects: true }),
			},
			{
				wakaTimeBadge: "https://wakatime.com/badge/github/chraebslii/mgrumisberg.ch",
				textDescription: t("projects.mgrumisberg.page.textDescription"),
				textContent: t("projects.mgrumisberg.page.textContent"),
				textVorgehen: t("projects.mgrumisberg.page.textVorgehen"),
				textFazit: t("projects.mgrumisberg.page.textFazit"),
				tools: [ "Grav", "PHP", "Twig", "HTML5", "CSS3", "JavaScript" ],
			},
		),
		new Project(
			"home-dashboard",
			t("projects.homeDashboard.title"),
			"/project/home-dashboard",
			{
				description: t("projects.homeDashboard.description"),
				tags: t("projects.homeDashboard.tags", { returnObjects: true }),
			},
			{
				wakaTimeBadge: "https://wakatime.com/badge/github/chraebslii/home-dashboard",
				textDescription: t("projects.homeDashboard.page.textDescription"),
				textContent: t("projects.homeDashboard.page.textContent"),
				textVorgehen: t("projects.homeDashboard.page.textVorgehen"),
				textFazit: t("projects.homeDashboard.page.textFazit"),
				tools: [ "React", "Node.JS", "Next.JS", "TypeScript", "MUI" ],
			},
		),
	];
}
