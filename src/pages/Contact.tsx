import React, { useEffect } from "react";
import Page from "../components/common/Page";
import servicesList from "../components/services/services-list";
import { Alert, Autocomplete, Button, TextField, Typography } from "@mui/material";
import { Line, PageTitle } from "../components/Text";
import { useTranslation } from "react-i18next";
import { FormElements, FormGroup } from "../components/form/FormElements";
import SendIcon from "@mui/icons-material/Send";
import { loaded } from "../components/form/FormSubmissionHandler";

export default function Contact() {
	const { t } = useTranslation("pages");
	const pageName = t("contact.title");
	const service = { name: new URLSearchParams(window.location.search).get("service") };
	const services = servicesList().map(service => {
		return { name: service.title };
	});

	useEffect(() => {
		loaded();
		document.getElementById("service")?.setAttribute("name", "service");
	}, []);

	return (
		<Page pageName={ pageName }>
			<section>
				<PageTitle>{ pageName }</PageTitle>
				<Line bottom={ 2 } />
			</section>

			<article>
				<section>
					<Typography dangerouslySetInnerHTML={
						{ __html: t("contact.contactMe", { interpolation: { escapeValue: false } }) } }
					/>
					<Typography>
						{ t("contact.emailAddress") }
						<br />
						<a href="mailto:contact@nicholas-krebs.ch">contact@nicholas-krebs.ch</a>
					</Typography>
				</section>

				<section>
					<Typography sx={ { marginBottom: "2rem" } }>
						{ t("contact.or") }
					</Typography>
					<form
						className={ "gform" }
						action={
							"https://script.google.com/macros/s/AKfycbyGX_jTNlOlP0eU2nAqu5dhgh9bJxqw4goiI8j0sHYmdKi6o2QXLd0ejo8aPexM5O1Egw/exec"
						}
						method={ "POST" }>
						<div>
							<FormGroup>
								<FormElements pos={ "left" }>
									<TextField
										name={ "firstname" }
										id={ "firstname" }
										variant={ "outlined" }
										label={ t("contact.form.firstName") }
										fullWidth
									/>
								</FormElements>
								<FormElements pos={ "right" }>
									<TextField
										required
										name={ "lastname" }
										id={ "lastname" }
										variant={ "outlined" }
										label={ t("contact.form.lastName") }
										fullWidth
									/>
								</FormElements>
							</FormGroup>
							<FormGroup>
								<FormElements>
									<TextField
										required
										name={ "email" }
										id={ "email" }
										variant={ "outlined" }
										label={ t("contact.form.email") }
										type={ "email" }
										fullWidth
									/>
								</FormElements>
							</FormGroup>
							<FormGroup>
								<FormElements>
									<Autocomplete
										freeSolo
										aria-required
										options={ services.map(service => service.name) }
										getOptionLabel={ option => option }
										id={ "service" }
										value={ service.name ? service.name : "" }
										includeInputInList
										renderInput={ params => (
											<TextField
												{ ...params }
												label={ t("contact.form.service") }
												variant={ "outlined" }
											/>
										) }
										fullWidth
									/>
								</FormElements>
							</FormGroup>
							<FormGroup>
								<FormElements>
									<TextField
										required
										name={ "message" }
										id={ "message" }
										variant={ "outlined" }
										label={ t("contact.form.message") }
										fullWidth
										multiline
										rows={ 5 }
									/>
								</FormElements>
							</FormGroup>
							<div>
								<Typography>{ t("contact.form.required") }</Typography>
							</div>
							<FormGroup>
								<FormElements>
									<Button
										variant={ "contained" }
										type={ "submit" }
										size={ "large" }
										endIcon={ <SendIcon color={ "secondary" } /> }>
										{ t("contact.form.send") }
									</Button>
								</FormElements>
							</FormGroup>
						</div>
						<div className={ "after-submit" }>
							<Alert severity="success">
								{ t("contact.form.success") }
							</Alert>
						</div>
					</form>
				</section>
			</article>
		</Page>
	);
}
