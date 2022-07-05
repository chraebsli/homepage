// import libraries
import React from "react";
import Head from "../components/Head";
import Container from "@mui/material/Container";

export default class Datenschutz extends React.Component {
	pageName = "Datenschutz";

	render() {
		return (
			<>
				<Head title={this.pageName} />
				<main className={this.pageName.toLowerCase()}>
					<Container>
						<div className={"page-title"}>
							<p>{this.pageName}</p>
						</div>

						<div className="page-content d-flex justify-content-center">
							<section></section>
						</div>
					</Container>
				</main>
			</>
		);
	}
}
