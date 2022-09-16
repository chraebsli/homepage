import React from "react";
import { Box } from "@mui/material";

export default function SocialMediaItem({
	href, icon, name, user,
}: { href: string; icon: React.ReactNode; name: string; user: string; }) {
	return (
		<Box className="social-media-item">
			<a href={ href } target="_blank" rel="noreferrer">
				<Box className="social-media-item-icon" sx={ { color: "text.primary" } }>
					{ icon }
				</Box>
				<Box className="social-media-item-text" sx={ { color: "text.primary" } }>
					{ name }: <br />
					{ user }
				</Box>
			</a>
		</Box>
	);
}

