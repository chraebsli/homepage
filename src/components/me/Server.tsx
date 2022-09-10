import React from "react";
import { Card, Grid } from "@mui/material";
import Progress from "./Progress";

// assets and styles
import { SiAzuredevops, SiCloudflare, SiFirebase, SiHeroku, SiNetlify, SiVercel } from "react-icons/si";
import StorageIcon from "@mui/icons-material/Storage";

export default function Server({ size }: { size: { xs: number; sm: number; md: number } }) {
	return (
		<Grid item xs={ size.xs } sm={ size.sm } md={ size.md }>
			<Card id={ "skills-soft" }>
				<h3>
					<StorageIcon /> server
				</h3>

				<Progress text={ "Cloudflare" } icon={ <SiCloudflare /> } progress={ 80 } />
				<Progress text={ "Heroku" } icon={ <SiHeroku /> } progress={ 80 } />
				<Progress text={ "Netlify" } icon={ <SiNetlify /> } progress={ 70 } />
				<Progress text={ "Vercel" } icon={ <SiVercel /> } progress={ 60 } />
				<Progress text={ "Firebase" } icon={ <SiFirebase /> } progress={ 50 } />
				<Progress text={ "Azure" } icon={ <SiAzuredevops /> } progress={ 50 } />
			</Card>
		</Grid>
	);
}
