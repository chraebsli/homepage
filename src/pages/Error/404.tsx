import React from "react";
import { Container, Stack, Typography } from "@mui/material";
import Head from "../../components/common/Head";
import { Image, Line, PageTitle, SectionTitle } from "../../components/Text";
import { Picture } from "../../components/Picture";

// assets

export default function NotFound404() {
	const pageName = "Error 404";
	return (
		<>
			<Head title={ pageName } />
			<main className={ "page-content" }>
				<Container>
					<section>
						<PageTitle>{ pageName }</PageTitle>
						<Line bottom={ 2 } />
					</section>

					<article className="page-content">
						<Picture path={ "404" } name={ "404" } sizes={ [ 720, 480 ] }>
							<Image
								src={ "/media/404/404-min.jpg" } alt={ "Illustration Error 404" } height={ 200 } m r />
						</Picture>
						<Stack spacing={ 3 }>
							<section>
								<SectionTitle>Error 404: Die Seite existiert nicht.</SectionTitle>
								<Typography>
									Es tut uns leid, aber die Seite, die Sie aufgerufen haben, existiert nicht.
								</Typography>
							</section>
						</Stack>
					</article>
				</Container>
			</main>
		</>
	);
}
