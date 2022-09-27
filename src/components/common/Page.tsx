import React from "react";
import Meta from "./Meta";

export default function Page({
	page, className, children,
}: { page: string, className?: string, children: React.ReactNode }) {
	return (
		<>
			<Meta page={ page } />
			<main className={ `${ page.toLowerCase() } ${ className }` }>
				{ children }
			</main>
		</>
	);
}