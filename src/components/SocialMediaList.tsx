import React from "react";
import { Stack } from "@mui/material";

// assets and styles
import "../pages/SocialMedia/SocialMedia.sass";
import socialMediaList from "../pages/SocialMedia/social-media-list";
import SocialMedia from "../models/socialMedia";
import SocialMediaItem from "./SocialMediaItem";

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
