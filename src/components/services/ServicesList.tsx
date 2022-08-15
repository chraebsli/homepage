import React from "react";
import { Card } from "react-bootstrap";
import { Autoplay, Mousewheel, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {
	Box,
	Button,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	Grid,
	Skeleton,
	Typography,
} from "@mui/material";

// assets and sass
import servicesList from "../../pages/Services/services-list";
import Service from "@models/service";

export default function ServicesList({ loading = false, space = 30 }: { loading?: boolean; space?: number }) {
	const services: Service[] = servicesList;

	return (
		<Swiper
			slidesPerView={"auto"}
			spaceBetween={space}
			loop={true}
			pagination={{
				clickable: true,
			}}
			navigation={true}
			mousewheel={true}
			autoplay={{
				delay: 10000,
				disableOnInteraction: false,
			}}
			modules={[Mousewheel, Autoplay, Pagination, Navigation]}
			className="services-carousel">
			{services.map(service => (
				// eslint-disable-next-line react/jsx-key
				<SwiperSlide>
					<Grid item key={service.title} xs={12} sm={9} md={6}>
						<Card>
							{loading ? (
								<Skeleton animation="wave" variant="rectangular" height={200} />
							) : (
								<CardMedia
									component={"img"}
									height={"200"}
									image={service.image}
									alt={`Illustration ${service.title}`}
								/>
							)}

							<CardHeader title={service.title} titleTypographyProps={{ align: "center" }} />
							<CardContent>
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										justifyContent: "flex-start",
										alignItems: "baseline",
										mb: 2,
									}}>
									<Typography
										component="p"
										className="service-teaser"
										variant="body1"
										color="text.primary">
										{service.teaser}
									</Typography>
									<Typography
										component="p"
										className="service-description"
										variant="body1"
										color="text.primary">
										{service.description}
									</Typography>
								</Box>
								<ul>
									{service.features.map(line => (
										<Typography component="li" variant="subtitle1" key={line}>
											{line}
										</Typography>
									))}
								</ul>
							</CardContent>
							<CardActions>
								<Button
									fullWidth
									variant={service.buttonVariant as "outlined" | "contained"}
									href={service.href}>
									{service.buttonText}
								</Button>
							</CardActions>
						</Card>
					</Grid>
				</SwiperSlide>
			))}
		</Swiper>
	);
}