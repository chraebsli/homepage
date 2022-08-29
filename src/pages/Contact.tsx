import React from "react";
import Head from "../components/common/Head";
import { Alert, Button, Container, TextField } from "@mui/material";

// assets and sass
import "../components/form/FormSubmissionHandler.js";

export default class Contact extends React.Component {
	pageName = "Kontakt";

	render() {
		return (
			<>
				<Head title={this.pageName} />
				<main className={this.pageName.toLowerCase()}>
					<Container>
						<section className={"page-title"}>
							<h1>{this.pageName}</h1>
							<hr />
						</section>

						<article className="page-content">
							<section>
								<h2 className="section-title">Kontaktangaben</h2>
								<p>
									Bei Fragen oder Anregungen können Sie gerne per Mail due unten stehende Adresse
									kontaktieren. Im Normalfall werde ich mich innerhalb von 2-4 Tagen bei ihnen melden.
									<br />
									Natürlich dürfen Sie mir auch eine Rückmeldung und Verbesserungsvorschläge für diese
									Website geben.
								</p>
								<p>
									E-Mail Adresse:
									<br />
									<a href="mailto:contact@nicholas-krebs.ch">contact@nicholas-krebs.ch</a>
								</p>
							</section>

							<section>
								<form
									className={"gform"}
									action={
										"https://script.google.com/macros/s/AKfycbyGX_jTNlOlP0eU2nAqu5dhgh9bJxqw4goiI8j0sHYmdKi6o2QXLd0ejo8aPexM5O1Egw/exec"
									}
									method={"POST"}>
									<div className={"form-data"}>
										<p>oder kontaktieren Sie mich mit diesem Formular:</p>
										<div className={"form-group"}>
											<div className={"form-element form-element-multi"}>
												<TextField
													name={"firstname"}
													id={"firstname"}
													variant={"outlined"}
													label={"Vorname"}
													className={"full-width"}
												/>
											</div>
											<div className={"form-element form-element-multi"}>
												<TextField
													required={true}
													name={"lastname"}
													id={"lastname"}
													variant={"outlined"}
													label={"Nachname"}
													className={"full-width"}
												/>
											</div>
										</div>
										<div className={"form-group"}>
											<div className={"form-element"}>
												<TextField
													required={true}
													name={"email"}
													id={"email"}
													variant={"outlined"}
													label={"E-Mail Adresse"}
													type={"email"}
													className={"full-width"}
												/>
											</div>
										</div>
										<div className={"form-group"}>
											<div className={"form-element"}>
												<TextField
													required={true}
													name={"message"}
													id={"message"}
													variant={"outlined"}
													label={"Nachricht"}
													className={"full-width"}
													multiline
													rows={5}
												/>
											</div>
										</div>
										<div>
											<p>* Pflichtfeld</p>
										</div>
										<div className={"form-group"}>
											<div className={"form-element"}>
												<Button variant="contained" type={"submit"}>
													Absenden
												</Button>
											</div>
										</div>
									</div>
									<div className={"after-submit"}>
										<Alert severity="success">
											Danke für Ihre Nachricht. Ich werde mich in Kürze bei Ihnen melden.
										</Alert>
									</div>
								</form>
							</section>
						</article>
					</Container>
				</main>
			</>
		);
	}
}
