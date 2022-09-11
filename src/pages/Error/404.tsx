import React from "react";
import { Stack, Typography } from "@mui/material";
import Page from "../../components/common/Page";
import { Image, Line, PageTitle, SectionTitle } from "../../components/Text";

// assets
import ImageError404 from "./assets/404.jpg";

export default function NotFound404() {
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
						<SectionTitle>Error 404: Die Seite existiert nicht.</SectionTitle>
						<Typography>
							Es tut uns leid, aber die Seite, die Sie aufgerufen haben, existiert nicht.
						</Typography>
					</section>
				</Stack>
			</article>
		</Page>
	);
}
