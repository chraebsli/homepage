import React from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Helmet } from "react-helmet";

export default function Head({ title }: { title: string }) {
	return (
		<Helmet>
			<title>{ `${ title } | chraebsli IT-Services` }</title>
		</Helmet>
	);
}
