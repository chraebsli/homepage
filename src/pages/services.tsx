import React from "react";
import Page from "../components/common/Page";
import { useTranslation } from "next-i18next";
import "swiper/css";
import "swiper/css/pagination";
import { Line, PageTitle } from "../components/Text";
import ServicesList from "../components/services/ServicesList";

export default function Services() {
	const { t } = useTranslation("common");

	return (
		<Page page={ "services" }>
			<section>
				<PageTitle>{ t("service.title") }</PageTitle>
				<Line bottom={ 2 } />
			</section>
			<article>
				<ServicesList />
			</article>
		</Page>
	);
}
