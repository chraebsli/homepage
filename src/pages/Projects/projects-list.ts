import ImageITSupport from "./assets/it-support.jpg";
import Project from "../../models/project";

{
	/* TODO: add projects */
}
const servicesList = () => {
	return [
		new Project({
			id: "portfolio",
			title: "portfolio",
			href: "/project/portfolio",
			image: ImageITSupport,
			description:
				"Dieses Projekt ist diese Website, denn diese Website werde ich ständig weiterentwickeln und" +
				" verbessern. Weiter werde ich auch einige neue Features hinzufügen oder besehende verbessern.",
			content: [""],
			buttonText: "Mehr erfahren",
			buttonVariant: "outlined",
		}),
	];
};

export default servicesList();
