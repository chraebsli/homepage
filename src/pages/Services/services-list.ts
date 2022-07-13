import ImageCreateWebsite from "./assets/create-website.jpg";
import ImageBuildPC from "./assets/build-pc.jpg";
import ImageITSupport from "./assets/it-support.jpg";
import Service from "../../models/service";

{
	/* TODO: add more services */
}
const servicesList = () => {
	return [
		new Service({
			id: "ip-support",
			title: "IT Support",
			href: "/service/it-support",
			image: ImageITSupport,
			teaser: "Brauchen Sie Hilfe bezogen auf etwas mit IT und wissen nicht weiter?",
			description:
				"Keine Sorge, ich werde helfen, das Problem zu lösen. Ich kenne mich mit Plattformen wie" +
				" Windows oder Android gut aus und kenne viele Probleme, die die meisten haben.",
			features: ["schnell", "günstig", ":"],
			buttonText: "Mehr erfahren",
			buttonVariant: "outlined",
		}),

		new Service({
			id: "create-website",
			title: "Website erstellen",
			href: "/service/create-website",
			image: ImageCreateWebsite,
			teaser: "Benötigen Sie eine Website für Ihre Produkte oder Dienstleistungen?",
			description:
				"Ich erstelle für Sie die Website, die Ihre Bedürfnisse erfüllen. Auf ihren Wunsch kann" +
				" ich zusätzlich das Hosting und die Domain mit allem konfigurieren.",
			features: ["professionelle Website", "Domain", "Hosting"],
			buttonText: "Mehr erfahren",
			buttonVariant: "contained",
		}),

		new Service({
			id: "build-pc",
			title: "PC bauen",
			href: "/service/build-pc",
			image: ImageBuildPC,
			teaser: "Möchten Sie einen PC für zu Hause der Ihren Anforderungen entspricht?",
			description:
				"Ich baue oder erweitere für Sie einen PC, mit den Spezifikationen, die für Ihren" +
				" Gebrauch perfekt angepasst sind. So haben Sie einen PC, der optimiert für Sie ist. ",
			features: ["für Sie optimiert", "neuer PC", "Beratung"],
			buttonText: "Mehr erfahren",
			buttonVariant: "outlined",
		}),
	];
};

export default servicesList();
