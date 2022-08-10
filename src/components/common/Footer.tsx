import React from "react";
import { Box, Link, Stack, Typography } from "@mui/material";

const links = [
	{ href: "/imprint", label: "Impressum" },
	{ href: "/contact", label: "Kontakt" },
	{ href: "/privacy", label: "Datenschutz" },
];

export default function Footer() {
	return (
		<>
			<div className={"footer-space"}></div>
			<Box
				sx={{
					bottom: 0,
					position: "absolute",
					width: "100%",
					padding: "0",
					backgroundColor: "primary.main",
				}}>
				<footer>
					<nav>
						<Stack
							direction={"column"}
							sx={{
								textAlign: "center",
								color: "text.secondary",
							}}>
							<Stack
								gap={2}
								direction={"row"}
								sx={{
									display: "flex",
									justifyContent: "center",
								}}>
								{links.map((link, index) => (
									<>
										<Link
											href={link.href}
											sx={{
												color: "text.secondary",
											}}>
											{link.label}
										</Link>
										{index < links.length - 1 && "|"}
									</>
								))}
							</Stack>
							<Typography
								component={"span"}
								sx={{
									color: "text.secondary",
								}}>
								&copy; {new Date().getFullYear()} chraebsli IT-Services
							</Typography>
						</Stack>
					</nav>
				</footer>
			</Box>
		</>
	);
}
