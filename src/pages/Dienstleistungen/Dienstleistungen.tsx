import React from "react";
import { Outlet } from "react-router-dom";
import "./Dienstleistungen.css";

function Dienstleistungen() {
	return (
		<div className="home dienstleistungen">
			<div className="header">
				<p className="title-text">Dienstleistungen</p>
				<p className="title-description">Ich biete folgende Dienstleistungen an:</p>
			</div>

			<div className="content">
				<Outlet />
			</div>
		</div>
	);
}

export default Dienstleistungen;
