import ImageFischlehrpfad from "./assets/fischlehrpfad.jpg";
import ImagePersonal from "./assets/personal.jpg";
import ImageSGRumisberg from "./assets/sgrumisberg.jpg";
import ImageMGRumisberg from "./assets/mgrumisberg.jpg";
import ImageHomeDasboard from "./assets/home-dashboard.jpg";
import Project from "../../models/project";

const projectsList = () => {
	return [
		new Project({
			id: "fischlehrpfad",
			title: "Fischlehrpfad",
			href: "/project/fischlehrpfad",
			tags: ["web", "client", "deployed"],
			image: ImageFischlehrpfad,
			description:
				"Der Fischlehrpfad war mein erstes Projekt. Ich habe es im 2. Lehrjahr mit einem Kollegen" +
				" entwickelt. Das Projekt ist eine kleine Website für einen Fischereiverein. Sie wurde mit" +
				" dem CMS Grav entwickelt.",
			buttonText: "Mehr erfahren",
			buttonVariant: "outlined",
			wakaTimeBadge: "https://wakatime.com/badge/github/chraebslii/Fischlehrpfad-Burgdorf",
		}),
		new Project({
			id: "personal-website",
			title: "eigene Website",
			href: "/project/personal",
			tags: ["web", "personal", "development"],
			image: ImagePersonal,
			description:
				"Dieses Projekt ist die Website auf der sie sich befinden. Ich habe diese Website selber" +
				" designed und anschliessen programmiert. Dazu habe ich TypeScript mit React verwendet," +
				" die ich währenddessen erlernt habe.",
			buttonText: "Mehr erfahren",
			buttonVariant: "outlined",
			wakaTimeBadge: "https://wakatime.com/badge/github/chraebsli/homepage",
		}),
		new Project({
			id: "sgrumisberg",
			title: "SG Rumisberg",
			href: "/project/sgrumisberg",
			tags: ["web", "client", "deployed"],
			image: ImageSGRumisberg,
			description:
				"Die erste Website für einen privaten Kunden. Sie ist für ein Verein aus meinem Dorf, der eine " +
				" Website für ihren Schützenverein eröffnen wollte. Ich habe die Website mit dem CMS Grav entwickelt" +
				" und konnte viele Erfahrungen sammeln.",
			buttonText: "Mehr erfahren",
			buttonVariant: "outlined",
			wakaTimeBadge: "https://wakatime.com/badge/github/chraebslii/sgrumisberg.ch",
		}),
		new Project({
			id: "mgrumisberg",
			title: "MG Rumisberg",
			href: "/project/mgrumisberg",
			tags: ["web", "client", "development"],
			image: ImageMGRumisberg,
			description:
				"Das ist eine Website für die Musikgesellschaft Rumisberg, in der ich aktiv als Musikant bin. Unsere" +
				" alte Website war mühsam zu verwalten und deshalb sollte ich eine neue erstellen. Ich habe mich" +
				" wieder für das CMS Grav entschieden.",
			buttonText: "Mehr erfahren",
			buttonVariant: "outlined",
			wakaTimeBadge: "https://wakatime.com/badge/github/chraebslii/mgrumisberg.ch",
		}),
		new Project({
			id: "home-dashboard",
			title: "Home Dashboard",
			href: "/project/home-dashboard",
			tags: ["web", "personal", "development"],
			image: ImageHomeDasboard,
			description:
				"Dieses Projekt ist ein Dashboard für mein Smart Home. Die Daten werden mit einer API von Next.js" +
				" verarbeitet und anschliessend mit TypeScript React bereitgestellt. Es gibt Elemente für Zeit," +
				" Wetter und Kalender. Weitere kommen.",
			buttonText: "Mehr erfahren",
			buttonVariant: "outlined",
			wakaTimeBadge: "https://wakatime.com/badge/github/chraebslii/home-dashboard",
		}),
	];
};

export default projectsList();
