// import libraries
import React from "react";
import { Card } from "react-bootstrap";

// import assets
import { SiCloudflare, SiGithub, SiJirasoftware, SiLinux, SiVisualstudiocode, SiWebstorm } from "react-icons/si";
import ConstructionIcon from "@mui/icons-material/Construction";
import Progress from "../Progress";

// render component
class DevTools extends React.Component {
	render() {
		return (
			<Card className={"skills-soft-card"} id={"skills-soft"}>
				<Card.Body>
					<Card.Title>
						<h3>
							<ConstructionIcon /> dev tools
						</h3>
					</Card.Title>
					<Card.Text>
						<Progress text={"VS Code"} icon={<SiVisualstudiocode />} progress={80} />
						<Progress text={"Webstorm"} icon={<SiWebstorm />} progress={70} />
						<Progress text={"Github"} icon={<SiGithub />} progress={80} />
						<Progress text={"Cloudflare"} icon={<SiCloudflare />} progress={75} />
						<Progress text={"Jira"} icon={<SiJirasoftware />} progress={60} />
						<Progress text={"Linux"} icon={<SiLinux />} progress={50} />
					</Card.Text>
				</Card.Body>
			</Card>
		);
	}
}

export default DevTools;
