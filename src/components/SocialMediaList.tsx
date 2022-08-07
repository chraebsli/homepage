// import libraries
import React from "react";
import { Stack } from "@mui/material";

// import assets
import "../pages/SocialMedia/SocialMedia.css";
import socialMediaList from "../pages/SocialMedia/social-media-list";
import SocialMedia from "../models/socialMedia";
import SocialMediaItem from "./SocialMediaItem";

// render component
class ProjectsList extends React.Component<{
	loading?: boolean;
	items?: SocialMedia[];
}> {
	static defaultProps = {
		loading: false,
		items: socialMediaList,
	};

	render() {
		const { loading, items } = this.props;
		return (
			<Stack
				className="social-media-container"
				gap={8}
				direction={"row"}
				alignItems={"center"}
				justifyContent={"center"}
				marginY={10}>
				{items?.map(item => (
					// eslint-disable-next-line react/jsx-key
					<SocialMediaItem href={item.href} icon={item.icon} name={item.name} user={item.user} />
				))}
			</Stack>
		);
	}
}

export default ProjectsList;
