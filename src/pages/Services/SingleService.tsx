import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";
import Page from "../../components/common/Page";
import { Image, Line, PageTitle } from "../../components/Text";
import { Picture } from "../../components/Picture";
import SendIcon from "@mui/icons-material/Send";
import servicesList from "../../components/services/services-list";
import NotFound404 from "../Error/404";

// assets and styles
import "./Services.sass";

export default function SingleService() {
	const { t } = useTranslation("common");

	const pages = useLocation().pathname.split("/");
	const page = pages[pages.length - 1];

	const services = servicesList();
	const possibleServices = services.find(service => service.id === page);

	if (!possibleServices) return <NotFound404 />;
	const { id, title, features, page: { description, teaser } } = possibleServices;

	return (
		<Page page={ `services.${ id }` } className={ "single-service" }>
			<section>
				<PageTitle>{ title }</PageTitle>
				<Line bottom={ 2 } />
			</section>

			<article>
				<Picture
					path={ `services/${ id }` } name={ id }
					sizes={ [ 720, 480 ] }>
					<Image
						src={ `/media/services/${ id }/${ id }-720-min.jpg` }
						alt={ `Illustration ${ title }` } height={ 300 } m />
				</Picture>
				<section>
					<Stack spacing={ 3 }>
						<Typography className={ "italic" }> { teaser } </Typography>
						<Typography> { description } </Typography>
						<Typography>
							{ t("services.includedFeatures") }
							<ul>
								{ features.map((feature, i) => (
									<li key={ i }>{ feature }</li>
								)) }
							</ul>
						</Typography>
						<Button
							href={ `/contact?service=${ title }` }
							rel={ "canonical" }
							variant="contained"
							endIcon={ <SendIcon color={ "secondary" } /> }
							sx={ { width: "20rem" } }>
							Anfrage senden
						</Button>
					</Stack>
				</section>
			</article>
		</Page>
	);
}
