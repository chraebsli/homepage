import React from "react";
import { Card } from "react-bootstrap";
import Progress from "../Progress";

// assets and css
import { SiCss3, SiHtml5, SiJavascript, SiMysql, SiNodedotjs, SiPhp, SiReact, SiTypescript } from "react-icons/si";
import CodeIcon from "@mui/icons-material/Code";

export default function Languages() {
	return (
		<Card className={"skills-techs-card"} id={"skills-techs"}>
			<Card.Body>
				<Card.Title>
					<h3>
						<CodeIcon /> languages
					</h3>
				</Card.Title>
				<Card.Text>
					<div>
						<span className={"progress-text"}>
							<SiHtml5 />
							HTML / <SiCss3 />
							CSS
						</span>
						<progress className={"progress"} value={"90"} max={"100"} />
					</div>
					<div>
						<span className={"progress-text"}>
							<SiJavascript />
							JS / <SiTypescript />
							TS
						</span>
						<progress className={"progress"} value={"80"} max={"100"} />
					</div>
					<Progress text={"React"} icon={<SiReact />} progress={70} />
					<Progress text={"NodeJS"} icon={<SiNodedotjs />} progress={60} />
					<Progress text={"PHP"} icon={<SiPhp />} progress={50} />
					<Progress text={"MySQL"} icon={<SiMysql />} progress={80} />
				</Card.Text>
			</Card.Body>
		</Card>
	);
}
