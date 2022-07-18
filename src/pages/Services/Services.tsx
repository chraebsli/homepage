// import libraries
import React from "react";
import Head from "../../components/common/Head";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import "swiper/css";
import "swiper/css/pagination";

// import assets and css
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
						<div className={ "page-title" }>
							<p>Dienstleistungen</p>
						</div>

						<div className="page-content c-flex justify-content-center">
							<GlobalStyles styles={ { ul: { margin: 0, padding: 0, listStyle: "none" } } } />
							<React.Fragment>
								<Container maxWidth="md" component="main">
									<ServicesList />
								</Container>
							</React.Fragment>
						</div>
					</Container>
				</main>
			</>
		);
	}
}
