import React from "react";
import Head from "./Head";

export default function Page({
	pageName, className, children,
}: { pageName: string, className?: string, children: React.ReactNode }) {
	return (
		<>
			<Head title={ pageName } />
			<main className={ `${ pageName.toLowerCase() } ${ className }` }>
				{ children }
			</main>
		</>
	);
}