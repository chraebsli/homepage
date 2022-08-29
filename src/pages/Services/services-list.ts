import ImageCreateWebsite from "./assets/create-website.jpg";
import ImageBuildPC from "./assets/build-pc.jpg";
import ImageITSupport from "./assets/it-support.jpg";
import ImageDevelopWebapp from "./assets/develop-webapp.jpg";
import Service from "../../models/service";

const servicesList = () => {
	return [
		new Service({
			id: "it-support",
			title: "IT Support",
			href: "/service/it-support",
			image: ImageITSupport,
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
			id: "create-website",
			title: "Website erstellen",
			href: "/service/create-website",
			image: ImageCreateWebsite,
			teaser: "Brauchen Sie eine Website für Ihren Verein, Startup oder für einen persönlichen Zweck?",
			description:
				"Ich erstelle günstig für Sie die perfekte Website für Ihren Verein, Startup oder für einen " +
				"persönlichen Zweck nach Ihren Wünschen.",
			features: ["professionelle Website", "Konfiguration", "Domain & Hosting", "E-Mail Adressen"],
			buttonText: "Mehr erfahren",
			buttonVariant: "contained",
		}),

		new Service({
			id: "develop-webapp",
			title: "Webapplikation entwickeln",
			href: "/service/develop-webapp",
			image: ImageDevelopWebapp,
			teaser: "Benötigen Sie eine Webapp für zum Beispiel bei ihrem Startup Arbeitszeiten zu erfassen?",
			description:
				"Ich entwickle für Sie die perfekte Webapplikation für Ihr Startup oder für einen persönlichen" +
				" Zweck mit Login und anderen Funktionen.",
			features: ["moderne Webapplikation", "einfach zu bedienen", "einfach erweiterbar", "sichere Daten"],
			buttonText: "Mehr erfahren",
			buttonVariant: "outlined",
		}),

		new Service({
			id: "build-pc",
			title: "PC bauen",
			href: "/service/build-pc",
			image: ImageBuildPC,
			teaser: "Möchten Sie einen neuen PC oder Laptop für zu Hause der Ihren Anfordern entspricht?",
			description:
				"Ich helfe Ihnen bei der Auswahl eines neuen PCs oder Laptops optimal für Ihren Gebrauch oder baue" +
				" einen PC nach ihren Vorstellungen.",
			features: ["persönliche Beratung", "optimiert für Sie", "günstig", "nach Ihren Wünschen"],
			buttonText: "Mehr erfahren",
			buttonVariant: "outlined",
		}),
	];
};

export default servicesList();
