import React from "react";
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";

export default class PageCard extends React.Component<{
	cardTitle: string;
	image: string;
	imageHeight: string;
	content: string;
	buttonVariant: string;
	buttonHref: string;
	buttonText: string;
}> {
	static defaultProps = {
		imageHeight: "300",
		content: "",
		buttonVariant: "outlined",
	};

	render() {
		const { cardTitle, image, imageHeight, content, buttonVariant, buttonHref, buttonText } = this.props;

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
}
