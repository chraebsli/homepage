import React from "react";
import { Avatar, Chip, Typography } from "@mui/material";

export default function Tag({ name }: { name: string }) {
	let color: "secondary" | "default" | "success" | "warning" | "error" | "primary" | "info";
	let avatar: any;
	switch (name) {
	case "deployed":
		color = "success";
		avatar = "D";
		break;
	case "development":
		color = "warning";
		avatar = "I";
		break;
	case "client":
		color = "error";
		avatar = "C";
		break;
	case "personal":
		color = "info";
		avatar = "P";
		break;
	case "web":
		color = "primary";
		avatar = "W";
		break;
	default:
		color = "default";
		avatar = "?";
	}

	return (
		<Chip
			variant="outlined"
			color={ color }
			avatar={ <Avatar>{ avatar }</Avatar> }
			label={
				<Typography variant={ "subtitle2" } color={ "text.primary" }>
					{ " " }
					{ name }{ " " }
				</Typography>
			}
		/>
	);
}
