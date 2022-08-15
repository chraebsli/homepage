import React from "react";

export default function WakaTimeBadge({ url }: { url: string }) {
	return (
		<a href={url}>
			<img src={`${url}.svg`} alt="wakatime badge" />
		</a>
	);
}