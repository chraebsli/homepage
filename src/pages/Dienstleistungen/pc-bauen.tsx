import React, { useEffect } from "react";
import { useParams } from "react-router";

function PCBauen() {
	let { postSlug } = useParams();

	useEffect(() => {
		// Fetch post using the postSlug
	}, [postSlug]);

	return (
		<div className="home">
			<div className="dienst-full">
				<p className="dienst-title">PC bauen</p>
				<p className="dienst-teaser">
					Sie benötigen einen neuen Desktop PC oder möchten diesen erweitern? Dann sind Sie hier richtig.
				</p>
				<p className="dienst-description">
					fmsuel yacgrvou yhyv aujdky noqfku rzftiw mlahms nltbqprh fmsuel yacgrvou yhyv aujdky noqfku rzftiw mlahms
					nltbqprh fmsuel yacgrvou yhyv aujdky noqfku rzftiw mlahms nltbqprh fmsuel yacgrvou yhyv aujdky noqfku rzftiw
					mlahms nltbqprh
				</p>
			</div>
		</div>
	);
}

export default PCBauen;
