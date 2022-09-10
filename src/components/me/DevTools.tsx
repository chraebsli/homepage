import React from "react";
import { Card, Grid } from "@mui/material";
import Progress from "./Progress";

// assets and styles
import { SiGit, SiGithub, SiJirasoftware, SiPhpstorm, SiVisualstudiocode, SiWebstorm } from "react-icons/si";
import ConstructionIcon from "@mui/icons-material/Construction";

export default function DevTools({ size }: { size: { xs: number; sm: number; md: number } }) {
	return (
		<Grid item xs={ size.xs } sm={ size.sm } md={ size.md }>
			<Card id={ "skills-soft" }>
				<h3>
					<ConstructionIcon /> dev tools
				</h3>

				<Progress text={ "Git" } icon={ <SiGit /> } progress={ 70 } />
				<Progress text={ "Github" } icon={ <SiGithub /> } progress={ 90 } />
				<Progress text={ "VS Code" } icon={ <SiVisualstudiocode /> } progress={ 80 } />
				<Progress text={ "Webstorm" } icon={ <SiWebstorm /> } progress={ 70 } />
				<Progress text={ "PHPstorm" } icon={ <SiPhpstorm /> } progress={ 70 } />
				<Progress text={ "Jira" } icon={ <SiJirasoftware /> } progress={ 80 } />
			</Card>
		</Grid>
	);
}
