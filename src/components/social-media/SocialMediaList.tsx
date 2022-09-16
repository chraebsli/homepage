import React from "react";
import { Stack } from "@mui/material";
import SocialMedia from "@models/socialMedia";
import SocialMediaItem from "./SocialMediaItem";

// assets and styles
import "./SocialMedia.sass";
import socialMediaList from "./social-media-list";

export default function SocialMediaList({ items = socialMediaList }: { items?: SocialMedia[] }) {
	return (
		<Stack
			className="social-media-container"
			gap={ 8 }
			direction={ "row" }
			alignItems={ "center" }
			justifyContent={ "center" }
			marginY={ 10 }>
			{ items?.map(item => (
				<SocialMediaItem
					href={ item.href }
					icon={ item.icon }
					name={ item.name }
					user={ item.user }
					key={ item.name } />
			)) }
		</Stack>
	);
}
