// import libraries
import React from "react";
import { Container } from "react-bootstrap";
import Head from "../components/Head";

// render the page home
export default class Home extends React.Component {
	pageName = "Home";

	render() {
		return (
			<>
				<Head title={this.pageName} />
				<main className={this.pageName.toLowerCase()}>
					<Container>
						<div className={"page-title"}>
							<p>{this.pageName}</p>
						</div>

						<div className="page-content d-flex justify-content-center"></div>
					</Container>
				</main>
			</>
		);
	}
}
