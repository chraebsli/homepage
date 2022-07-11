import React from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Helmet } from "react-helmet";

class Head extends React.PureComponent<{
	title: string;
}> {
	protected separator = " | ";
	protected siteName = "chraebsli IT-Services";

	render() {
		return (
			<Helmet>
				<title>{this.renderTitle()}</title>
			</Helmet>
		);
	}

	renderTitle = () => {
		const { title } = this.props;
		return title + this.separator + this.siteName;
	};
}

export default Head;
