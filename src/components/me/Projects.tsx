// import libraries
import React from "react";
import { Card } from "react-bootstrap";
import { Autoplay, Mousewheel, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Grid from "@mui/material/Grid";
import { Box, Button, CardActions, CardContent, CardHeader, CardMedia } from "@mui/material";
import Typography from "@mui/material/Typography";

// import assets
import projectsList from "../../pages/Projects/projects-list";
import Project from "../../models/project";

// render component
class Projects extends React.Component {
	private projects: Project[] = projectsList;

	render() {
		return (
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
				{this.projects.map(project => (
					// eslint-disable-next-line react/jsx-key
					<SwiperSlide>
						<Grid item key={project.title} xs={12} sm={9} md={6}>
							<Card>
								<CardMedia component={"img"} height={"200"} image={project.image} alt={"image"} />

								<CardHeader title={project.title} titleTypographyProps={{ align: "center" }} />
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
											className="project-description"
											variant="body1"
											color="text.primary">
											{project.description}
										</Typography>
									</Box>
									<Typography
										component="p"
										className="project-content"
										variant="body1"
										color="text.primary">
										{project.content}
									</Typography>
								</CardContent>
								<CardActions>
									<Button
										fullWidth
										variant={project.buttonVariant as "outlined" | "contained"}
										href={project.href}>
										{project.buttonText}
									</Button>
								</CardActions>
							</Card>
						</Grid>
					</SwiperSlide>
				))}
			</Swiper>
		);
	}
}

export default Projects;
