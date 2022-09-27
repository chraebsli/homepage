import React from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

export default function Meta({ page }: { page: string }) {
	const { t } = useTranslation("meta");
	const title = t(`${ page }.title`);
	const description = t(`${ page }.description`);

	return (
		<Helmet>
			<title>{ `${ title } | chraebsli IT-Services` }</title>
			<meta name="description" content={ description } />
		</Helmet>
	);
}
