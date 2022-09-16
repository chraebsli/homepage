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
				description: t("projects.fischlehrpfad.card.description"),
				tags: t("projects.fischlehrpfad.card.tags", { returnObjects: true }),
			},
			{
				wakaTimeBadge: "https://wakatime.com/badge/github/chraebslii/Fischlehrpfad-Burgdorf",
				textDescription: t("projects.fischlehrpfad.page.textDescription"),
				textContent: t("projects.fischlehrpfad.page.textContent"),
				titleProceed: t("projects.fischlehrpfad.page.textProceed"),
				titleConclusion: t("projects.fischlehrpfad.page.textConclusion"),
				tools: [ "Grav", "PHP", "Twig", "HTML5", "CSS3", "JavaScript" ],
				website: "fischlehrpfad.ch",
			},
		),
		new Project(
			"personal",
			t("projects.personal.title"),
			"/project/personal",
			{
				description: t("projects.personal.card.description"),
				tags: t("projects.personal.card.tags", { returnObjects: true }),
			},
			{
				wakaTimeBadge: "https://wakatime.com/badge/github/chraebslii/homepage",
				textDescription: t("projects.personal.page.textDescription"),
				textContent: t("projects.personal.page.textContent"),
				titleProceed: t("projects.personal.page.textProceed"),
				titleConclusion: t("projects.personal.page.textConclusion"),
				tools: [ "React", "Node.JS", "TypeScript", "MUI" ],
			},
		),
		new Project(
			"sgrumisberg",
			t("projects.sgrumisberg.title"),
			"/project/sgrumisberg",
			{
				description: t("projects.sgrumisberg.card.description"),
				tags: t("projects.sgrumisberg.card.tags", { returnObjects: true }),
			},
			{
				wakaTimeBadge: "https://wakatime.com/badge/github/chraebslii/sgrumisberg.ch",
				textDescription: t("projects.sgrumisberg.page.textDescription"),
				textContent: t("projects.sgrumisberg.page.textContent"),
				titleProceed: t("projects.sgrumisberg.page.textProceed"),
				titleConclusion: t("projects.sgrumisberg.page.textConclusion"),
				tools: [ "Grav", "PHP", "Twig", "HTML5", "CSS3", "JavaScript" ],
				website: "sgrumisberg.ch",
			},
		),
		new Project(
			"mgrumisberg",
			t("projects.mgrumisberg.title"),
			"/project/mgrumisberg",
			{
				description: t("projects.mgrumisberg.card.description"),
				tags: t("projects.mgrumisberg.card.tags", { returnObjects: true }),
			},
			{
				wakaTimeBadge: "https://wakatime.com/badge/github/chraebslii/mgrumisberg.ch",
				textDescription: t("projects.mgrumisberg.page.textDescription"),
				textContent: t("projects.mgrumisberg.page.textContent"),
				titleProceed: t("projects.mgrumisberg.page.textProceed"),
				titleConclusion: t("projects.mgrumisberg.page.textConclusion"),
				tools: [ "Grav", "PHP", "Twig", "HTML5", "CSS3", "JavaScript" ],
			},
		),
		new Project(
			"home-dashboard",
			t("projects.homeDashboard.title"),
			"/project/home-dashboard",
			{
				description: t("projects.homeDashboard.card.description"),
				tags: t("projects.homeDashboard.card.tags", { returnObjects: true }),
			},
			{
				wakaTimeBadge: "https://wakatime.com/badge/github/chraebslii/home-dashboard",
				textDescription: t("projects.homeDashboard.page.textDescription"),
				textContent: t("projects.homeDashboard.page.textContent"),
				titleProceed: t("projects.homeDashboard.page.textProceed"),
				titleConclusion: t("projects.homeDashboard.page.textConclusion"),
				tools: [ "React", "Node.JS", "Next.JS", "TypeScript", "MUI" ],
			},
		),
	];
}
