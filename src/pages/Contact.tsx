// import libraries
import React from "react";
import Head from "../components/common/Head";
import Container from "@mui/material/Container";

// import assets and css
import "../components/form/FormSubmissionHandler.js";
import { Alert, Button, TextField } from "@mui/material";

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
									<a href="mailto:contact@chraebsli.dev">contact@chraebsli.dev</a>
								</p>
							</section>

							<section>
								<h2 className="section-title">Kontaktformular</h2>
								<form
									className={"gform"}
									action={
										"https://script.google.com/macros/s/AKfycbxsFNgFMrAlwt2GqXvSRYdJxuUJp4-_K47dmWaGmEprpfc45K8e6jWdlc5PUwrq43Jw6A/exec"
									}>
									<div className={"form-data"}>
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
											Danke. Ich habe Ihre Nachricht bekommen und ich werde mich in nächster Zeit
											bei Ihnen melden.
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
