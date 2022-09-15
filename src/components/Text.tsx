import React from "react";
import { Typography } from "@mui/material";

export function Line({ top, bottom }: { top?: number; bottom?: number }) {
	return (
		<hr
			style={ {
				marginTop: `${ top }rem` ?? 0,
				marginBottom: `${ bottom }rem` ?? 0,
				border: "2px solid primary.main",
			} }
		/>
	);
}

export function Image({ src, alt, height, m, r }: { src: any; alt: string; height: number; m?: boolean, r?: boolean }) {
	return <img
		className={ r ? "r" : "" }
		src={ src }
		alt={ alt }
		height={ height }
		style={ { marginBottom: m ? "2rem" : 0 } } />;
}

export function PageTitle({ children }: { children: React.ReactNode }) {
	return <Typography variant={ "h3" }>{ children }</Typography>;
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
	return <Typography variant={ "h4" }>{ children }</Typography>;
}
