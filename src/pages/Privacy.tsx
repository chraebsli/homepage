import React from "react";
import Page from "../components/common/Page";
import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";
import { Line, PageTitle, SectionTitle } from "../components/Text";

export default function Privacy() {
	const { t } = useTranslation("pages");
	return (
		<Page pageName={ "Privacy" }>
			<section>
				<PageTitle>{ t("privacy.title") }</PageTitle>
				<Line bottom={ 2 } />
			</section>

			<article>
				<section>
					<SectionTitle>{ t("privacy.copyright") }</SectionTitle>
					<Typography>
						{ t("privacy.copyrightText") }
					</Typography>
				</section>
				<Line />
				<section>
					<SectionTitle>{ t("privacy.privacy") }</SectionTitle>
					<Typography dangerouslySetInnerHTML={
						{ __html: t("privacy.privacyTexts", { returnObjects: true }) }
					} />
				</section>
				<Line />
				<section>
					<SectionTitle>{ t("privacy.applicableLaw") }</SectionTitle>
					<Typography>{ t("privacy.applicableLawText") }</Typography>
				</section>
			</article>
		</Page>
	);
}
