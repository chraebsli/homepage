import React from "react";

export default function SocialMediaItem({
	href,
	icon,
	name,
	user,
}: {
	href: string;
	icon: React.ReactNode;
	name: string;
	user: string;
}) {
	return (
		<div className="social-media-item">
			<a href={href} target="_blank" rel="noreferrer">
				<div className="social-media-item-icon">{icon}</div>
				<div className="social-media-item-text">
					{name}: <br />
					{user}
				</div>
			</a>
		</div>
	);
}

