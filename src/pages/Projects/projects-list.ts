import ImageITSupport from "./assets/it-support.jpg";
import Project from "../../models/project";

//TODO: add projects
const servicesList = () => {
	return [
		new Project({
			id: "fischlehrpfad",
			title: "Fischlehrpfad",
			href: "/project/fischlehrpfad",
			image: ImageITSupport,
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
			href: "/project/personal-website",
			image: ImageITSupport,
			description:
				"Dieses Projekt ist kurz gesagt die Website, die Sie gerade betrachten. Ich habe diese selber" +
				" designed und programmiert. Dazu habe ich Node.js und React mit Typescript verwendet.",
			content: "",
			buttonText: "Mehr erfahren",
			buttonVariant: "contained",
		}),
		new Project({
			id: "sgrumisberg",
			title: "Website SG Rumisberg",
			href: "/project/sgrumisberg",
			image: ImageITSupport,
			description:
				"Ein Verein aus meinem Dorf wollte eine neue Website für ihren Schützenverein eröffnen. Ich habe die" +
				" Website mit dem CMS Grav entwickelt.",
			content: "",
			buttonText: "Mehr erfahren",
			buttonVariant: "outlined",
		}),
	];
};

export default servicesList();
