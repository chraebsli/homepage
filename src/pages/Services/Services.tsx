// import libraries
import React from "react";
import Head from "../../components/common/Head";
import { Container } from "@mui/material";
import "swiper/css";
import "swiper/css/pagination";

// assets and css
import "./Services.css";
import servicesList from "./services-list";
import ServicesList from "../../components/ServicesList";

export default class Services extends React.Component<{
	loading?: boolean;
}> {
	static defaultProps = {
		loading: false,
	};
	pageName = "Services";
	services = servicesList;

	render(){
		return (
			<>
				<Head title={ this.pageName }></Head>
				<main className={ this.pageName.toLowerCase() }>
					<Container>
						<section className={ "page-title" }>
							<p>Dienstleistungen</p>
						</section>

						<article className="page-content">
							<ServicesList />
						</article>
					</Container>
				</main>
			</>
		);
	}
}
