import { useTranslation } from "react-i18next";
import Project from "../../models/project";

export default function projectsList(): Project[] {
	const { t } = useTranslation("common");

	return [
		new Project(
			"fischlehrpfad",
			t("projects.fischlehrpfad.title"),
			"/project/fischlehrpfad",
			t("projects.fischlehrpfad.tags", { returnObjects: true }),
			t("projects.fischlehrpfad.description"),
			"https://wakatime.com/badge/github/chraebslii/Fischlehrpfad-Burgdorf",
		),
		new Project(
			"personal-website",
			t("projects.personal.title"),
			"/project/personal",
			t("projects.personal.tags", { returnObjects: true }),
			t("projects.personal.description"),
			"https://wakatime.com/badge/github/chraebslii/homepage",
		),
		new Project(
			"sgrumisberg",
			t("projects.sgrumisberg.title"),
			"/project/sgrumisberg",
			t("projects.sgrumisberg.tags", { returnObjects: true }),
			t("projects.sgrumisberg.description"),
			"https://wakatime.com/badge/github/chraebslii/sgrumisberg.ch",
		),
		new Project(
			t("projects.mgrumisberg.title"),
			"MG Rumisberg",
			"/project/mgrumisberg",
			t("projects.mgrumisberg.tags", { returnObjects: true }),
			t("projects.mgrumisberg.description"),
			"https://wakatime.com/badge/github/chraebslii/mgrumisberg.ch",
		),
		new Project(
			"home-dashboard",
			t("projects.homeDashboard.title"),
			"/project/home-dashboard",
			t("projects.homeDashboard.tags", { returnObjects: true }),
			t("projects.homeDashboard.description"),
			"https://wakatime.com/badge/github/chraebslii/home-dashboard",
		),
	];
}
