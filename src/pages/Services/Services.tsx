// import libraries
import React from "react";
import Page from "../../components/common/Page";
import "swiper/css";
import "swiper/css/pagination";
import { Line, PageTitle } from "../../components/Text";

// assets and styles
import "./Services.sass";
import ServicesList from "../../components/services/ServicesList";

export default function Services() {
	const pageName = "Services";

	return (
		<Page pageName={ pageName }>
			<section>
				<PageTitle>Dienstleistungen</PageTitle>
				<Line bottom={ 2 } />
			</section>
			<article>
				<ServicesList />
			</article>
		</Page>
	);
}
