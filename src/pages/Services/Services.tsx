// import libraries
import React from "react";
import Head from "../../components/common/Head";
import "swiper/css";
import "swiper/css/pagination";
import { Line, PageTitle } from "../../components/Text";

// assets and styles
import "./Services.sass";
import ServicesList from "../../components/services/ServicesList";

export default function Services() {
	const pageName = "Services";

	return (
		<>
			<Head title={ pageName } />
			<main>
				<section>
					<PageTitle>Dienstleistungen</PageTitle>
					<Line bottom={ 2 } />
				</section>

				<article>
					<ServicesList />
				</article>
			</main>
		</>
	);
}
