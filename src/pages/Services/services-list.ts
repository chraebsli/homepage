import { useTranslation } from "react-i18next";
import ImageWebsite from "./assets/website.jpg";
import ImageSupport from "./assets/support.jpg";
import ImageWebapp from "./assets/webapp.jpg";
import ImageDatabase from "./assets/database.jpg";
import Service from "../../models/service";

export default function servicesList(): Service[] {
	const { t } = useTranslation("common");
	return [
		new Service({
			id: "support",
			title: t("services.itSupport.title"),
			href: "/service/support",
			image: ImageSupport,
			teaser: t("services.itSupport.teaser"),
			description: t("services.itSupport.description"),
			features: t("services.itSupport.features", { returnObjects: true }),
		}),

		new Service({
			id: "website",
			title: t("services.website.title"),
			href: "/service/website",
			image: ImageWebsite,
			teaser: t("services.website.teaser"),
			description: t("services.website.description"),
			features: t("services.website.features", { returnObjects: true }),
		}),

		new Service({
			id: "webapp",
			title: t("services.webapp.title"),
			href: "/service/webapp",
			image: ImageWebapp,
			teaser: t("services.webapp.teaser"),
			description: t("services.webapp.description"),
			features: t("services.webapp.features", { returnObjects: true }),
		}),

		new Service({
			id: "database",
			title: t("services.database.title"),
			href: "/service/database",
			image: ImageDatabase,
			teaser: t("services.database.teaser"),
			description: t("services.database.description"),
			features: t("services.database.features", { returnObjects: true }),
		}),
	];
}
