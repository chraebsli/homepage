import ImageCreateWebsite from "./assets/create-website.jpg";
import ImageBuildPC from "./assets/build-pc.jpg";

{/* TODO: add more services */ }
const servicesList = () => {
	return [
		{
			id:"create-website",
			title: "Website erstellen",
			href: "/services/website-erstellen",
			image: ImageCreateWebsite,
			teaser: "Benötigen Sie eine Website für Ihre Produkte oder Dienstleistungen?",
			description: "Ich erstelle für Sie die Website, die Ihre Bedürfnisse erfüllen. Auf ihren Wunsch kann ich zusätzlich das Hosting und die Domain mit allem konfigurieren.",
			features: [
				"professionelle Website",
				"Domain",
				"Hosting",
			],
			buttonText: "Mehr erfahren",
			buttonVariant: "outlined",
		},
		{
			id:"build-pc",
			title: "PC bauen",
			href: "/services/pc-bauen",
			image: ImageBuildPC,
			teaser: "Ich baue oder erweitere für Sie einen PC, wie Sie benötigen.",
			description: "",
			features: [
				"Beratung",
			],
			buttonText: "Mehr erfahren",
			buttonVariant: "outlined",
		},
	];

};

export default servicesList();