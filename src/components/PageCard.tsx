import React from "react";
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";

export default function PageCard({
	cardTitle,
	image,
	imageHeight = "300",
	content = "",
	buttonVariant = "outlined",
	buttonHref,
	buttonText,
}: {
	cardTitle: string;
	image: string;
	imageHeight?: string;
	content?: string;
	buttonVariant?: string;
	buttonHref: string;
	buttonText: string;
}) {
	return (
		<Card>
			<CardMedia component={"img"} height={imageHeight} image={image} alt={"image"} />

			<CardHeader title={cardTitle} titleTypographyProps={{ align: "center" }} />

			<CardContent>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						mb: 0,
					}}>
					<Typography component="h5" variant="h5" color="text.primary">
						{content}
					</Typography>
				</Box>
			</CardContent>

			<CardActions>
				<Button fullWidth variant={buttonVariant as "outlined" | "contained"} href={buttonHref}>
					{buttonText}
				</Button>
			</CardActions>
		</Card>
	);
}
