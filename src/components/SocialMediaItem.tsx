// import libraries
import React from "react";

// render component
class SocialMediaItem extends React.Component<{
	href: string;
	icon: React.ReactNode;
	name: string;
	user: string;
}> {
	static defaultProps = {};

	render() {
		const { href, icon, name, user } = this.props;

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
}

export default SocialMediaItem;
