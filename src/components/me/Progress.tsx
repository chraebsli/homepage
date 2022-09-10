import React from "react";
import { Box, Typography } from "@mui/material";

export default function Progress({
	text,
	icon,
	progress,
	max = 100,
}: {
	text: string;
	icon: React.ReactNode;
	progress: number;
	max?: number;
}) {
	return (
		<Box>
			<Typography component={ "span" }>
				{ icon } { text }
			</Typography>
			<progress className={ "progress" } value={ progress } max={ max } />
		</Box>
	);
}