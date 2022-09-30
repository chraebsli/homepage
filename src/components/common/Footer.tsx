import React from "react";
import { Box, Link, Stack, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";

const links = [
	{ key: "imprint", href: "/imprint" },
	{ key: "contact", href: "/contact" },
	{ key: "privacy", href: "/privacy" },
];

export default function Footer() {
	const { t } = useTranslation("components");
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
										{ t(`footer.links.${ link.key }`) }
									</Link>
									<Typography key={ index + 100 }>{ index < links.length - 1 && "|" }</Typography>
								</>
							)) }
						</Stack>
						<Typography component={ "span" } sx={ { color: "secondary.main" } }>
							&copy; { new Date().getFullYear() } { t("footer.copyright") }
						</Typography>
					</Stack>
				</nav>
			</footer>
		</Box>
	);
}
