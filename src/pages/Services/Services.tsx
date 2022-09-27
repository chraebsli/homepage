import React from "react";
import Page from "../../components/common/Page";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/pagination";
import { Line, PageTitle } from "../../components/Text";

// assets and styles
import "./Services.sass";
import ServicesList from "../../components/services/ServicesList";

export default function Services() {
	const { t } = useTranslation("common");

	return (
		<Page page={ "services" }>
			<section>
				<PageTitle>{ t("services.title") }</PageTitle>
				<Line bottom={ 2 } />
			</section>
			<article>
				<ServicesList />
			</article>
		</Page>
	);
}
