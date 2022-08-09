import React from "react";

export default function Progress({
	text,
	icon,
	progress,
	max = 100,
}: {
	text: string;
	icon: any;
	progress: number;
	max?: number;
}) {
	return (
		<div>
			<span className={"progress-text"}>
				{icon} {text}
			</span>
			<progress className={"progress"} value={progress} max={max} />
		</div>
	);
}