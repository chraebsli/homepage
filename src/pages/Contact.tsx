import React, { useEffect } from "react";
import Head from "../components/common/Head";
import servicesList from "./Services/services-list";
import { Alert, Autocomplete, Button, Container, TextField, Typography } from "@mui/material";
import { Line, PageTitle, SectionTitle } from "../components/Text";

// assets and styles
import "../components/form/FormSubmissionHandler.js";
import FormGroup from "../components/form/FormGroup";
import FormElement from "../components/form/FormElement";

export default function Contact() {
	const pageName = "Kontakt";
	const service = { name: new URLSearchParams(window.location.search).get("service") };
	const services = servicesList.map(service => {
		return { name: service.title };
	});

	useEffect(() => {
		document.getElementById("service")?.setAttribute("name", "service");
	});

	return (
		<>
			<Head title={pageName} />
			<main>
				<Container>
					<section>
						<PageTitle>{pageName}</PageTitle>
						<Line bottom={2} />
					</section>

					<article>
						<section>
							<SectionTitle>Kontaktangaben</SectionTitle>
							<Typography>
								Bei Fragen oder Anregungen können Sie gerne per Mail due unten stehende Adresse
								kontaktieren. Im Normalfall werde ich mich innerhalb von 2-4 Tagen bei ihnen melden.
								<br />
								Natürlich dürfen Sie mir auch eine Rückmeldung und Verbesserungsvorschläge für diese
								Website geben.
							</Typography>
							<Typography>
								E-Mail Adresse:
								<br />
								<a href="mailto:contact@nicholas-krebs.ch">contact@nicholas-krebs.ch</a>
							</Typography>
						</section>

						<section>
							<form
								className={"gform"}
								action={
									"https://script.google.com/macros/s/AKfycbyGX_jTNlOlP0eU2nAqu5dhgh9bJxqw4goiI8j0sHYmdKi6o2QXLd0ejo8aPexM5O1Egw/exec"
								}
								method={"POST"}>
								<div>
									<Typography sx={{ marginBottom: "2rem" }}>
										oder kontaktieren Sie mich mit diesem Formular:
									</Typography>
									<FormGroup>
										<FormElement pos={"left"}>
											<TextField
												name={"firstname"}
												id={"firstname"}
												variant={"outlined"}
												label={"Vorname"}
												fullWidth
											/>
										</FormElement>
										<FormElement pos={"right"}>
											<TextField
												required
												name={"lastname"}
												id={"lastname"}
												variant={"outlined"}
												label={"Nachname"}
												fullWidth
											/>
										</FormElement>
									</FormGroup>
									<FormGroup>
										<FormElement>
											<TextField
												required
												name={"email"}
												id={"email"}
												variant={"outlined"}
												label={"E-Mail Adresse"}
												type={"email"}
												fullWidth
											/>
										</FormElement>
									</FormGroup>
									<FormGroup>
										<FormElement>
											<Autocomplete
												freeSolo
												aria-required
												options={services.map(service => service.name)}
												getOptionLabel={option => option}
												id={"service"}
												value={service.name ? service.name : ""}
												includeInputInList
												renderInput={params => (
													<TextField
														{...params}
														label={"Dienstleistung"}
														variant={"outlined"}
													/>
												)}
												fullWidth
											/>
										</FormElement>
									</FormGroup>
									<FormGroup>
										<FormElement>
											<TextField
												required
												name={"message"}
												id={"message"}
												variant={"outlined"}
												label={"Nachricht"}
												fullWidth
												multiline
												rows={5}
											/>
										</FormElement>
									</FormGroup>
									<div>
										<Typography>* Pflichtfeld</Typography>
									</div>
									<FormGroup>
										<FormElement>
											<Button variant="contained" type={"submit"}>
												Absenden
											</Button>
										</FormElement>
									</FormGroup>
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
