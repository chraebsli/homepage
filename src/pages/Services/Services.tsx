// import libraries
import React from "react";
import Head from "../../components/common/Head";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia } from "@mui/material";
import { Autoplay, Mousewheel, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// import assets and css
import "./Services.css";
import servicesList from "./services-list";

export default class Services extends React.Component {
	pageName = "Services";
	services = servicesList;

	render() {
		return (
			<>
				<Head title={this.pageName} />
				<main className={this.pageName.toLowerCase()}>
					<Container>
						<div className={"page-title"}>
							<p>Dienstleistungen</p>
						</div>

						<div className="page-content c-flex justify-content-center">
							<GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }} />
							<React.Fragment>
								<Container maxWidth="md" component="main">
									<Swiper
										slidesPerView={"auto"}
										spaceBetween={30}
										loop={true}
										pagination={{
											clickable: true,
										}}
										navigation={true}
										mousewheel={true}
										autoplay={{
											delay: 5000,
											disableOnInteraction: false,
										}}
										modules={[Mousewheel, Autoplay, Pagination, Navigation]}
										className="services-carousel">
										{this.services.map(service => (
											// eslint-disable-next-line react/jsx-key
											<SwiperSlide>
												<Grid item key={service.title} xs={12} sm={9} md={6}>
													<Card>
														<CardMedia
															component={"img"}
															height={"200"}
															image={service.image}
															alt={"image"}
														/>

														<CardHeader
															title={service.title}
															titleTypographyProps={{ align: "center" }}
														/>
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
																	<Typography
																		component="li"
																		variant="subtitle1"
																		key={line}>
																		{line}
																	</Typography>
																))}
															</ul>
														</CardContent>
														<CardActions>
															<Button
																fullWidth
																variant={
																	service.buttonVariant as "outlined" | "contained"
																}
																href={service.href}>
																{service.buttonText}
															</Button>
														</CardActions>
													</Card>
												</Grid>
											</SwiperSlide>
										))}
									</Swiper>
								</Container>
							</React.Fragment>
						</div>
					</Container>
				</main>
			</>
		);
	}
}
