import React from "react";

export default class WakaTimeBadge extends React.Component<{
	url: string;
}> {
	static defaultProps = {};

	render() {
		const { url } = this.props;

		return (
			<a href={url}>
				<img src={`${url}.svg`} alt="wakatime badge" />
			</a>
		);
	}
}
