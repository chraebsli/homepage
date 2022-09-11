import React from "react";
import { Box, Link, Stack, Typography } from "@mui/material";

const links = [
	{ href: "/imprint", label: "Impressum" },
	{ href: "/contact", label: "Kontakt" },
	{ href: "/privacy", label: "Datenschutz" },
];

export default function Footer() {
	return (
		<Box
			sx={ {
				bottom: 0,
				position: "absolute",
				width: "100%",
				padding: "1rem",
				backgroundColor: "primary.main",
			} }>
			<footer>
				<nav>
					<Stack direction={ "column" } sx={ { textAlign: "center", color: "secondary.main" } }>
						<Stack gap={ 2 } direction={ "row" } sx={ { display: "flex", justifyContent: "center" } }>
							{ links.map((link, index) => (
								<>
									<Link href={ link.href } sx={ { color: "secondary.main" } } key={ index }>
										{ link.label }
									</Link>
									<Typography key={ index + 100 }>{ index < links.length - 1 && "|" }</Typography>
								</>
							)) }
						</Stack>
						<Typography component={ "span" } sx={ { color: "secondary.main" } }>
							&copy; { new Date().getFullYear() } chraebsli IT-Services
						</Typography>
					</Stack>
				</nav>
			</footer>
		</Box>
	);
}
