import Project from "../../models/project";

const projectsList = () => {
	return [
		new Project(
			"fischlehrpfad",
			"Fischlehrpfad",
			"/project/fischlehrpfad",
			[ "web", "client", "deployed" ],
			"Der Fischlehrpfad war mein erstes Projekt. Ich habe es im 2. Lehrjahr mit einem Kollegen" +
			" entwickelt. Das Projekt ist eine kleine Website für einen Fischereiverein. Sie wurde mit" +
			" dem CMS Grav entwickelt.",
			"Mehr erfahren",
			"outlined",
			"https://wakatime.com/badge/github/chraebslii/Fischlehrpfad-Burgdorf",
		),
		new Project(
			"personal-website",
			"eigene Website",
			"/project/personal",
			[ "web", "personal", "development" ],
			"Dieses Projekt ist die Website auf der sie sich befinden. Ich habe diese Website selber" +
			" designed und anschliessen programmiert. Dazu habe ich TypeScript mit React verwendet," +
			" die ich währenddessen erlernt habe.",
			"Mehr erfahren",
			"outlined",
			"https://wakatime.com/badge/github/chraebsli/homepage",
		),
		new Project(
			"sgrumisberg",
			"SG Rumisberg",
			"/project/sgrumisberg",
			[ "web", "client", "deployed" ],
			"Die erste Website für einen privaten Kunden. Sie ist für ein Verein aus meinem Dorf, der eine " +
			" Website für ihren Schützenverein eröffnen wollte. Ich habe die Website mit dem CMS Grav entwickelt" +
			" und konnte viele Erfahrungen sammeln.",
			"Mehr erfahren",
			"outlined",
			"https://wakatime.com/badge/github/chraebslii/sgrumisberg.ch",
		),
		new Project(
			"mgrumisberg",
			"MG Rumisberg",
			"/project/mgrumisberg",
			[ "web", "client", "development" ],
			"Das ist eine Website für die Musikgesellschaft Rumisberg, in der ich aktiv als Musikant bin. Unsere" +
			" alte Website war mühsam zu verwalten und deshalb sollte ich eine neue erstellen. Ich habe mich" +
			" wieder für das CMS Grav entschieden.",
			"Mehr erfahren",
			"outlined",
			"https://wakatime.com/badge/github/chraebslii/mgrumisberg.ch",
		),
		new Project(
			"home-dashboard",
			"Home Dashboard",
			"/project/home-dashboard",
			[ "web", "personal", "development" ],
			"Dieses Projekt ist ein Dashboard für mein Smart Home. Die Daten werden mit einer API von Next.js" +
			" verarbeitet und anschliessend mit TypeScript React bereitgestellt. Es gibt Elemente für Zeit," +
			" Wetter und Kalender. Weitere kommen.",
			"Mehr erfahren",
			"outlined",
			"https://wakatime.com/badge/github/chraebslii/home-dashboard",
		),
	];
};

export default projectsList();
