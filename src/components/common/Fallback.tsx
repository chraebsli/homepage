import React from "react";

class Fallback extends React.Component {
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

export default Fallback;
