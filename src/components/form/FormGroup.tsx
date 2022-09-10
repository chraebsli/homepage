import React from "react";
import { Stack } from "@mui/material";

export default function FormGroup({ children }: { children: React.ReactNode }) {
	return (
		<Stack
			direction={{ xs: "column", sm: "row" }}
			sx={{
				justifyContent: "space-between",
				paddingBottom: "1rem",
			}}>
			{children}
		</Stack>
	);
} 