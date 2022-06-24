// import libraries
import React from "react";

// render component
class Progress extends React.Component<{
	text: string,
	icon: any,
	progress: number
	max: number
}> {
	static defaultProps = {
		max: 100,
	};

	render() {
		const {
			text,
			icon,
			progress,
			max,
		} = this.props;

		return (
			<div>
				<span className={ "progress-text" }>{ icon } { text }</span>
				<progress className={ "progress" } value={ progress } max={ max } />
			</div>
		);
	}
}

export default Progress;
