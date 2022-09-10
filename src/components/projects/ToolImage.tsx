import React from "react";

export default function ToolImage({ name }: { name: string }) {
	return <img
		src={ `https://img.shields.io/badge/${ name }-black?style=for-the-badge&logo=${ name }` }
		alt={ name } />;
}
