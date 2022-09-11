import { useTranslation } from "react-i18next";
import ImageFischlehrpfad from "./assets/fischlehrpfad.jpg";
import ImagePersonal from "./assets/personal.jpg";
import ImageSGRumisberg from "./assets/sgrumisberg.jpg";
import ImageMGRumisberg from "./assets/mgrumisberg.jpg";
import ImageHomeDasboard from "./assets/home-dashboard.jpg";
import Project from "../../models/project";

export default function projectsList(): Project[] {
	const { t } = useTranslation("common");

	return [
		new Project({
			id: "fischlehrpfad",
			title: t("projects.fischlehrpfad.title"),
			href: "/project/fischlehrpfad",
			tags: t("projects.fischlehrpfad.tags", { returnObjects: true }),
			image: ImageFischlehrpfad,
			description: t("projects.fischlehrpfad.description"),
			wakaTimeBadge: "https://wakatime.com/badge/github/chraebslii/Fischlehrpfad-Burgdorf",
		}),

		new Project({
			id: "personal-website",
			title: t("projects.personal.title"),
			href: "/project/personal",
			tags: t("projects.personal.tags", { returnObjects: true }),
			image: ImagePersonal,
			description: t("projects.personal.description"),
			wakaTimeBadge: "https://wakatime.com/badge/github/chraebslii/homepage",
		}),

		new Project({
			id: "sgrumisberg",
			title: t("projects.sgrumisberg.title"),
			href: "/project/sgrumisberg",
			tags: t("projects.sgrumisberg.tags", { returnObjects: true }),
			image: ImageSGRumisberg,
			description: t("projects.sgrumisberg.description"),
			wakaTimeBadge: "https://wakatime.com/badge/github/chraebslii/sgrumisberg.ch",
		}),

		new Project({
			id: t("projects.mgrumisberg.title"),
			title: "MG Rumisberg",
			href: "/project/mgrumisberg",
			tags: t("projects.mgrumisberg.tags", { returnObjects: true }),
			image: ImageMGRumisberg,
			description: t("projects.mgrumisberg.description"),
			wakaTimeBadge: "https://wakatime.com/badge/github/chraebslii/mgrumisberg.ch",
		}),

		new Project({
			id: "home-dashboard",
			title: t("projects.homeDashboard.title"),
			href: "/project/home-dashboard",
			tags: t("projects.homeDashboard.tags", { returnObjects: true }),
			image: ImageHomeDasboard,
			description: t("projects.homeDashboard.description"),
			wakaTimeBadge: "https://wakatime.com/badge/github/chraebslii/home-dashboard",
		}),
	];
}
