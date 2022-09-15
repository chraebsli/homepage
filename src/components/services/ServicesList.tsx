import React from "react";
import { Autoplay, Mousewheel, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Button, Card, CardActions, CardContent, CardHeader, Grid, Skeleton, Typography } from "@mui/material";
import { Picture } from "../Picture";
import { Image } from "../Text";

// assets and styles
import servicesList from "../../pages/Services/services-list";
import Service from "@models/service";

export default function ServicesList({ loading = false, space = 30 }: { loading?: boolean; space?: number }) {
	const services: Service[] = servicesList;

	return (
		<Swiper
			slidesPerView={ "auto" }
			spaceBetween={ space }
			loop={ true }
			pagination={ {
				clickable: true,
			} }
			navigation={ true }
			mousewheel={ true }
			autoplay={ {
				delay: 10000,
				disableOnInteraction: false,
			} }
			modules={ [ Mousewheel, Autoplay, Pagination, Navigation ] }
			className="services-carousel">
			{ services.map(service => (
				<SwiperSlide key={ service.id }>
					<Grid item key={ service.title } xs={ 12 } sm={ 9 } md={ 6 }>
						<Card
							sx={ {
								backgroundColor: "background.default",
							} }>
							{ loading ? (
								<Skeleton animation="wave" variant="rectangular" height={ 200 } />
							) : (
								<Picture
									path={ `services/${ service.id }` } name={ `${ service.id }` }
									sizes={ [ 720, 480 ] } r>
									<Image
										src={ `/media/services/${ service.id }/${ service.id }-min.jpg` }
										alt={ `Illustration ${ service.title }` } height={ 200 } />
								</Picture>
							) }

							<CardHeader title={ service.title } titleTypographyProps={ { align: "center" } } />
							<CardContent>
								<Box
									sx={ {
										display: "flex",
										flexDirection: "column",
										justifyContent: "flex-start",
										alignItems: "baseline",
										mb: 2,
									} }>
									<Typography component="p" className="service-teaser">
										{ service.teaser }
									</Typography>
									<Typography component="p" className="service-description">
										{ service.description }
									</Typography>
								</Box>
								<ul>
									{ service.features.map(line => (
										<Typography component="li" variant="subtitle1" key={ line }>
											{ line }
										</Typography>
									)) }
								</ul>
							</CardContent>
							<CardActions>
								<Button
									fullWidth
									variant={ service.buttonVariant as "outlined" | "contained" }
									href={ service.href }>
									{ service.buttonText }
								</Button>
							</CardActions>
						</Card>
					</Grid>
				</SwiperSlide>
			)) }
		</Swiper>
	);
}
