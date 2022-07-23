import ImageFischlehrpfad from "./assets/fischlehrpfad.jpg";
import ImagePersonal from "./assets/personal.jpg";
import ImageSGRumisberg from "./assets/sgrumisberg.jpg";
import ImageMGRumisberg from "./assets/mgrumisberg.jpg";
import Project from "../../models/project";

//TODO: add projects
const projectsList = () => {
	return [
		new Project({
			id: "fischlehrpfad",
			title: "Fischlehrpfad",
			href: "/project/fischlehrpfad",
			image: ImageFischlehrpfad,
			description:
				"Der Fischlehrpfad war mein erstes Projekt. Ich habe es im 2. Lehrjahr mit einem anderen Lehrnenden" +
				" gemeinsam entwickelt. Das Projekt ist eine kleiner Website für einen Fischereiverein, welche mit" +
				" dem CMS Grav entwickelt wurde.",
			content: "",
			buttonText: "Mehr erfahren",
			buttonVariant: "outlined",
		}),
		new Project({
			id: "personal-website",
			title: "eigene Website",
			href: "/project/personal",
			image: ImagePersonal,
			description:
				"Dieses Projekt ist kurz gesagt die Website, die Sie gerade betrachten. Ich habe diese Website selber" +
				" designed und anschliessen programmiert. Dazu habe ich Node.js und React mit Typescript verwendet," +
				" die ich selbständig erlernt habe.",
			content: "",
			buttonText: "Mehr erfahren",
			buttonVariant: "outlined",
		}),
		new Project({
			id: "sgrumisberg",
			title: "SG Rumisberg",
			href: "/project/sgrumisberg",
			image: ImageSGRumisberg,
			description:
				"Meine erste Website für einen privaten Kunden. Es ist ein Verein aus meinem Dorf, der eine " +
				" Website für ihren Schützenverein eröffnen wollte. Ich habe die Website mit dem CMS Grav entwickelt" +
				" und konnte so erste Erfahrungen sammeln.",
			content: "",
			buttonText: "Mehr erfahren",
			buttonVariant: "outlined",
		}),
		new Project({
			id: "mgrumisberg",
			title: "MG Rumisberg",
			href: "/project/mgrumisberg",
			image: ImageMGRumisberg,
			description:
				"Das ist eine Website für die Musikgesellschaft Rumisberg, in der ich aktiv als Musikant bin. Unsere" +
				" alte Website war mühsam zu verwalten und deshalb sollte ich eine neue erstellen. Ich habe mich" +
				" wieder für das CMS Grav entschieden.",
			content: "",
			buttonText: "Mehr erfahren",
			buttonVariant: "outlined",
		}),
	];
};

export default projectsList();
