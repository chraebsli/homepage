import React from "react";
import { Card } from "react-bootstrap";
import Progress from "./Progress";

// assets and sass
import { SiGit, SiGithub, SiJirasoftware, SiPhpstorm, SiVisualstudiocode, SiWebstorm } from "react-icons/si";
import ConstructionIcon from "@mui/icons-material/Construction";

export default function DevTools() {
	return (
		<Card className={"skills-soft-card"} id={"skills-soft"}>
			<Card.Body>
				<Card.Title>
					<h3>
						<ConstructionIcon /> dev tools
					</h3>
				</Card.Title>
				<Card.Text>
					<Progress text={"Git"} icon={<SiGit />} progress={70} />
					<Progress text={"Github"} icon={<SiGithub />} progress={90} />
					<Progress text={"VS Code"} icon={<SiVisualstudiocode />} progress={80} />
					<Progress text={"Webstorm"} icon={<SiWebstorm />} progress={70} />
					<Progress text={"PHPstorm"} icon={<SiPhpstorm />} progress={70} />
					<Progress text={"Jira"} icon={<SiJirasoftware />} progress={80} />
				</Card.Text>
			</Card.Body>
		</Card>
	);
}
