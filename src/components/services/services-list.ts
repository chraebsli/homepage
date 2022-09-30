import { useTranslation } from "next-i18next";
import Service from "../../models/service";

export default function servicesList(): Service[] {
	const { t } = useTranslation("common");
	return [
		new Service(
			"support",
			t("services.itSupport.title"),
			"/service/support",
			t("services.itSupport.features", { returnObjects: true }),
			{
				teaser: t("services.itSupport.card.teaser"),
				description: t("services.itSupport.card.description"),
			},
			{
				teaser: t("services.itSupport.page.teaser"),
				description: t("services.itSupport.page.description"),
			},
		),
		new Service(
			"website",
			t("services.website.title"),
			"/service/website",
			t("services.website.features", { returnObjects: true }),
			{
				teaser: t("services.website.card.teaser"),
				description: t("services.website.card.description"),
			},
			{
				teaser: t("services.website.page.teaser"),
				description: t("services.website.page.description"),
			},
		),
		new Service(
			"webapp",
			t("services.webapp.title"),
			"/service/webapp",
			t("services.webapp.features", { returnObjects: true }),
			{
				teaser: t("services.webapp.card.teaser"),
				description: t("services.webapp.card.description"),
			},
			{
				teaser: t("services.webapp.page.teaser"),
				description: t("services.webapp.page.description"),
			},
		),
		new Service(
			"database",
			t("services.database.title"),
			"/service/database",
			t("services.database.features", { returnObjects: true }),
			{
				teaser: t("services.database.card.teaser"),
				description: t("services.database.card.description"),
			},
			{
				teaser: t("services.database.page.teaser"),
				description: t("services.database.page.description"),
			},
		),
	];
}