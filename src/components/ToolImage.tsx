// import libraries
import React from "react";

// render component
class ToolImage extends React.Component<{
	name: string;
}> {
	static defaultProps = {};

	render() {
		const { name } = this.props;

		return (
			<img src={"https://img.shields.io/badge/" + name + "-black?style=for-the-badge&logo=" + name} alt={name} />
		);
	}
}

export default ToolImage;