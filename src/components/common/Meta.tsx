import React from "react";
import Head from "next/head";
import { useTranslation } from "next-i18next";

const specialPages = {
	noFollow: [ "projects", "imprint" ],
	noIndex: [ "privacy" ],
};

export default function Meta({ page }: { page: string }) {
	const { t } = useTranslation("meta");
	const title = t(`${ page }.title`);
	const description = t(`${ page }.description`);
	const parentPage = page.split(".")[0];

	const follow = specialPages.noFollow.includes(parentPage) ? "nofollow" : "follow";
	const index = specialPages.noIndex.includes(parentPage) ? "noindex" : "index";
	return (
		<Head>
			<title>{ `${ title } | chraebsli IT-Services` }</title>
			<meta name="description" content={ description } />
			<meta name="robots" content={ `${ follow }, ${ index }` } />
			<meta name="googlebot" content={ `${ follow }, ${ index }` } />
		</Head>
	);
}
