import React from "react";
import { Stack, Typography } from "@mui/material";
import Page from "../../components/common/Page";
import { Image, Line, PageTitle, SectionTitle } from "../../components/Text";
import { useTranslation } from "react-i18next";

// assets
import ImageError404 from "./assets/404.jpg";

export default function NotFound404() {
	const { t } = useTranslation("pages");

	return (
		<Page pageName={ "Error 404" }>
			<section>
				<PageTitle>Error 404</PageTitle>
				<Line bottom={ 2 } />
			</section>

			<article className="page-content">
				<Image src={ ImageError404 } alt={ "Illustration Datenbank" } height={ 200 } m />
				<Stack spacing={ 3 }>
					<section>
						<SectionTitle>{ t("error.404.title") }</SectionTitle>
						<Typography>
							{ t("error.404.description") }
						</Typography>
					</section>
				</Stack>
			</article>
		</Page>
	);
}
