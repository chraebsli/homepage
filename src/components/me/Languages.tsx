import React from "react";
import Progress from "./Progress";
import { Box, Card, Grid, Typography } from "@mui/material";

// assets and styles
import { SiCss3, SiHtml5, SiJavascript, SiMysql, SiNodedotjs, SiPhp, SiReact, SiTypescript } from "react-icons/si";
import CodeIcon from "@mui/icons-material/Code";

export default function Languages({ size }: { size: { xs: number; sm: number; md: number } }) {
	return (
		<Grid item xs={size.xs} sm={size.sm} md={size.md}>
			<Card id={"skills-techs"}>
				<h3>
					<CodeIcon /> languages
				</h3>

				<Box>
					<Typography component={"span"}>
						<SiHtml5 /> HTML /
						<SiCss3 /> CSS
					</Typography>
					<progress className={"progress"} value={"90"} max={"100"} />
				</Box>
				<Box>
					<Typography component={"span"}>
						<SiJavascript /> JS /
						<SiTypescript /> TS
					</Typography>
					<progress className={"progress"} value={"80"} max={"100"} />
				</Box>
				<Progress text={"React"} icon={<SiReact />} progress={70} />
				<Progress text={"NodeJS"} icon={<SiNodedotjs />} progress={60} />
				<Progress text={"PHP"} icon={<SiPhp />} progress={50} />
				<Progress text={"MySQL"} icon={<SiMysql />} progress={80} />
			</Card>
		</Grid>
	);
}
