import React from "react";

export default class Fallback extends React.Component {
	render() {
		return (
			<>
				<div className={"fallback"}>
					<div className={"text"}>
						<span>loading</span>
					</div>
				</div>
			</>
		);
	}
}
