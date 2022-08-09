import React from "react";
import { Avatar, Chip } from "@mui/material";

export default class Tag extends React.Component<{
	name: string;
}> {
	static defaultProps = {};

	render() {
		const { name } = this.props;
		let color: "secondary" | "default" | "success" | "warning" | "error" | "primary" | "info";
		let avatar: string;
		switch (name) {
		case "done":
			color = "success";
			avatar = "D";
			break;
		case "in-progress":
			color = "warning";
			avatar = "I";
			break;
		case "work":
			color = "error";
			avatar = "W";
			break;
		case "private":
			color = "secondary";
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

		return <Chip variant="outlined" color={color} avatar={<Avatar>{avatar}</Avatar>} label={name.toUpperCase()} />;
	}
}
