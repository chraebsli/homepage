import React from "react";
import { Stack } from "@mui/material";

export default function FormElement({ children, pos }: { children: React.ReactNode; pos?: "left" | "right" }) {
	return (
		<Stack
			spacing={ 2 }
			sx={ {
				width: "100%",
				paddingRight: { sm: pos === "left" ? ".5rem" : 0, xs: 0 },
				paddingLeft: { sm: pos === "right" ? ".5rem" : 0, xs: 0 },
				paddingBottom: { xs: pos === "left" ? "1rem" : 0, sm: 0 },
			} }>
			{ children }
		</Stack>
	);
} 