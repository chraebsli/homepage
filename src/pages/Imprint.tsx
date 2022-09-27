import React from "react";
import Page from "../components/common/Page";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Line, PageTitle, SectionTitle } from "../components/Text";

export default function Imprint() {
	const { t } = useTranslation("pages");
	return (
		<Page page={ "imprint" }>
			<section>
				<PageTitle>{ t("imprint.title") }</PageTitle>
				<Line bottom={ 2 } />
			</section>

			<article>
				<section>
					<SectionTitle>{ t("imprint.operator") }</SectionTitle>
					<Typography>{ t("imprint.operatorText") }</Typography>
					<address>
						Nicholas Krebs
						<br />
						Breitebüneweg 5
						<br />
						4539 Rumisberg
						<br />
						Bern, CH
					</address>
					<Typography>
						{ t("imprint.contactMe") }
						<br />
						<a href="mailto:contact@chraebsli.dev">contact@chraebsli.dev</a>
					</Typography>
				</section>
				<Line />
				<section>
					<SectionTitle>{ t("imprint.involved") }</SectionTitle>
					<Typography>{ t("imprint.involvedText") }</Typography>
					<ul>
						<li>{ t("imprint.roles.design") }: Nicholas Krebs</li>
						<li>{ t("imprint.roles.development") }: Nicholas Krebs</li>
						<li>{ t("imprint.roles.content") }: Nicholas Krebs</li>
					</ul>
				</section>
				<Line />
				<section>
					<SectionTitle>{ t("imprint.resources") }</SectionTitle>
					<Typography>
						{ t("imprint.resourcesText") }
					</Typography>
					<ul>
						<li>
							{ t("imprint.links.illustrations") }: <a href="https://www.freepik.com">vectorjuice /
							Freepik</a>
						</li>
						<li>
							{ t("imprint.links.icons") }: <a href="https://mui.com/">Material UI</a>
						</li>
					</ul>
				</section>
			</article>
		</Page>
	);
}
