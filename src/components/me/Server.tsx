import React from "react";
import { Card } from "react-bootstrap";
import Progress from "./Progress";

// assets and css
import { SiAzuredevops, SiCloudflare, SiFirebase, SiHeroku, SiNetlify, SiVercel } from "react-icons/si";
import StorageIcon from "@mui/icons-material/Storage";

export default function Server() {
	return (
		<Card className={"skills-soft-card"} id={"skills-soft"}>
			<Card.Body>
				<Card.Title>
					<h3>
						<StorageIcon /> server
					</h3>
				</Card.Title>
				<Card.Text>
					<Progress text={"Cloudflare"} icon={<SiCloudflare />} progress={80} />
					<Progress text={"Heroku"} icon={<SiHeroku />} progress={80} />
					<Progress text={"Netlify"} icon={<SiNetlify />} progress={70} />
					<Progress text={"Vercel"} icon={<SiVercel />} progress={60} />
					<Progress text={"Firebase"} icon={<SiFirebase />} progress={50} />
					<Progress text={"Azure"} icon={<SiAzuredevops />} progress={50} />
				</Card.Text>
			</Card.Body>
		</Card>
	);
}
