import { useTranslation } from "react-i18next";
import Service from "../../models/service";

export default function servicesList(): Service[] {
	const { t } = useTranslation("common");
	return [
		new Service(
			"support",
			t("services.itSupport.title"),
			"/service/support",
			t("services.itSupport.teaser"),
			t("services.itSupport.description"),
			t("services.itSupport.features", { returnObjects: true }),
		),
		new Service(
			"website",
			t("services.website.title"),
			"/service/website",
			t("services.website.teaser"),
			t("services.website.description"),
			t("services.website.features", { returnObjects: true }),
		),
		new Service(
			"webapp",
			t("services.webapp.title"),
			"/service/webapp",
			t("services.webapp.teaser"),
			t("services.webapp.description"),
			t("services.webapp.features", { returnObjects: true }),
		),
		new Service(
			"database",
			t("services.database.title"),
			"/service/database",
			t("services.database.teaser"),
			t("services.database.description"),
			t("services.database.features", { returnObjects: true }),
		),
	];
}
