import ImageFischlehrpfad from "./assets/fischlehrpfad.jpg";
import ImagePersonal from "./assets/personal.jpg";
import ImageSGRumisberg from "./assets/sgrumisberg.jpg";
import ImageMGRumisberg from "./assets/mgrumisberg.jpg";
import Project from "../../models/project";

const projectsList = () => {
	return [
		new Project({
			id: "fischlehrpfad",
			title: "Fischlehrpfad",
			href: "/project/fischlehrpfad",
			tags: ["web", "done", "work"],
			image: ImageFischlehrpfad,
			description:
				"Der Fischlehrpfad war mein erstes Projekt. Ich habe es im 2. Lehrjahr mit einem anderen Lehrnenden" +
				" gemeinsam entwickelt. Das Projekt ist eine kleiner Website für einen Fischereiverein, welche mit" +
				" dem CMS Grav entwickelt wurde.",
			buttonText: "Mehr erfahren",
			buttonVariant: "outlined",
			wakatimeBadge: "https://wakatime.com/badge/github/chraebslii/Fischlehrpfad-Burgdorf",
		}),
		new Project({
			id: "personal-website",
			title: "eigene Website",
			href: "/project/personal",
			tags: ["web", "in-progress", "private"],
			image: ImagePersonal,
			description:
				"Dieses Projekt ist kurz gesagt die Website, die Sie gerade betrachten. Ich habe diese Website selber" +
				" designed und anschliessen programmiert. Dazu habe ich Node.js und React mit Typescript verwendet," +
				" die ich selbständig erlernt habe.",
			buttonText: "Mehr erfahren",
			buttonVariant: "outlined",
			wakatimeBadge: "https://wakatime.com/badge/github/chraebsli/homepage",
		}),
		new Project({
			id: "sgrumisberg",
			title: "SG Rumisberg",
			href: "/project/sgrumisberg",
			tags: ["web", "done", "private"],
			image: ImageSGRumisberg,
			description:
				"Meine erste Website für einen privaten Kunden. Es ist ein Verein aus meinem Dorf, der eine " +
				" Website für ihren Schützenverein eröffnen wollte. Ich habe die Website mit dem CMS Grav entwickelt" +
				" und konnte so erste Erfahrungen sammeln.",
			buttonText: "Mehr erfahren",
			buttonVariant: "outlined",
			wakatimeBadge: "https://wakatime.com/badge/github/chraebsli/sgrumisberg.ch",
		}),
		new Project({
			id: "mgrumisberg",
			title: "MG Rumisberg",
			href: "/project/mgrumisberg",
			tags: ["web", "in-progress", "private"],
			image: ImageMGRumisberg,
			description:
				"Das ist eine Website für die Musikgesellschaft Rumisberg, in der ich aktiv als Musikant bin. Unsere" +
				" alte Website war mühsam zu verwalten und deshalb sollte ich eine neue erstellen. Ich habe mich" +
				" wieder für das CMS Grav entschieden.",
			buttonText: "Mehr erfahren",
			buttonVariant: "outlined",
			wakatimeBadge: "https://wakatime.com/badge/github/chraebslii/mgrumisberg.ch",
		}),
	];
};

export default projectsList();
