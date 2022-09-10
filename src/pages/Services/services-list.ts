import ImageWebsite from "./assets/website.jpg";
import ImageSupport from "./assets/support.jpg";
import ImageWebapp from "./assets/webapp.jpg";
import ImageDatabase from "./assets/database.jpg";
import Service from "../../models/service";

const servicesList = () => {
	return [
		new Service({
			id: "support",
			title: "IT Support",
			href: "/service/support",
			image: ImageSupport,
			teaser: "Brauchen Sie Hilfe bezüglich Computer oder Smartphones und wissen nicht mehr weiter?",
			description:
				"Kommen Sie nicht mehr weiter bei Apps von Ihrem Computer oder ihrem Smartphone oder Fragen zu" +
				" Sicherheit und Datenschutz?",
			features: [
				"professioneller Support",
				"schnelle Hilfe über Chat/ Anruf",
				"remote/ vor Ort Hilfestellung",
				"Weiterbildung und Aufklärung",
			],
			buttonText: "Mehr erfahren",
			buttonVariant: "outlined",
		}),

		new Service({
			id: "website",
			title: "Website erstellen",
			href: "/service/website",
			image: ImageWebsite,
			teaser: "Brauchen Sie eine Website für Ihren Verein, Startup oder für einen persönlichen Zweck?",
			description:
				"Ich erstelle günstig für Sie die perfekte Website für Ihren Verein, Startup oder für einen " +
				"persönlichen Zweck nach Ihren Wünschen.",
			features: [ "professionelle Website", "Konfiguration", "Domain & Hosting", "E-Mail Adressen" ],
			buttonText: "Mehr erfahren",
			buttonVariant: "outlined",
		}),

		new Service({
			id: "webapp",
			title: "Webapplikation erstellen",
			href: "/service/webapp",
			image: ImageWebapp,
			teaser: "Benötigen Sie eine Webapp für zum Beispiel bei ihrem Startup Arbeitszeiten zu erfassen?",
			description:
				"Ich entwickle für Sie die perfekte Webapplikation für Ihr Startup oder für einen persönlichen" +
				" Zweck mit Login und anderen Funktionen.",
			features: [ "moderne Webapplikation", "einfach zu bedienen", "einfach erweiterbar", "sichere Daten" ],
			buttonText: "Mehr erfahren",
			buttonVariant: "outlined",
		}),

		new Service({
			id: "database",
			title: "Datenbank",
			href: "/service/database",
			image: ImageDatabase,
			teaser: "Möchten Sie eine Datenbank erstellen oder von einer anderen Date übernehmen?",
			description:
				"Ich erstelle für Sie eine neue Datenbank oder übernehme Daten von einer anderen Datenbank in eine" +
				" neue, egal ob SQL oder NoSQL.",
			features: [
				"vollständiges Datenbanksystem",
				"überlegte Struktur",
				"einfach zu verwalten",
				"schnelle Abfragen",
			],
			buttonText: "Mehr erfahren",
			buttonVariant: "outlined",
		}),
	];
};

export default servicesList();
