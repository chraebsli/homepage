import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useTranslation } from "react-i18next";
import { Box, Button, Stack, Typography } from "@mui/material";
import CookieIcon from "@mui/icons-material/Cookie";

export default function CookieDisclaimer() {
	const { t } = useTranslation("components");
	const [ cookies, setCookie ] = useCookies([ "cookiesAccepted" ]);
	const [ showDisclaimer, setShowDisclaimer ] = React.useState(false);

	const acceptCookie = () => {
		setCookie("cookiesAccepted", true, { path: "/", maxAge: 60 * 60 * 24 * 7 });
		setShowDisclaimer(false);
	};

	useEffect(() => {
		!cookies.cookiesAccepted
			? setShowDisclaimer(true)
			: (setShowDisclaimer(false),
				setCookie("cookiesAccepted", true, { path: "/", maxAge: 60 * 60 * 24 * 7 }));
	}, [ cookies ]);

	return showDisclaimer ? (
		<Box
			sx={ {
				maxWidth: "20rem",
				zIndex: 1000,
				padding: "1rem",
				position: "fixed",
				bottom: "1rem",
				left: "1rem",
				backgroundColor: "background.default",
				borderRadius: "1rem",
				border: ".2rem solid",
				borderColor: "primary.main",
			} }>
			<Stack spacing={ 1 } direction={ "column" }>
				<CookieIcon sx={ { width: "2rem", height: "2rem" } } />
				<Typography sx={ { lineBreak: "auto" } }>
					{ t("cookieDisclaimer.title") }
				</Typography>
				<Typography component={ "a" } href={ "/privacy" } sx={ { lineBreak: "auto" } }>
					{ t("cookieDisclaimer.learnMore") }
				</Typography>
				<Button variant={ "contained" } color={ "primary" } onClick={ acceptCookie }>
					{ t("cookieDisclaimer.accept") }
				</Button>
			</Stack>
		</Box>
	) : null;
}
