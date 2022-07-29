// import libraries
import React from "react";
import { Card } from "react-bootstrap";
import { Autoplay, Mousewheel, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Grid from "@mui/material/Grid";
import { Box, Button, CardActions, CardContent, CardHeader, CardMedia, Skeleton } from "@mui/material";
import Typography from "@mui/material/Typography";

// import assets
import projectsList from "../pages/Projects/projects-list";
import Project from "../models/project";
import Tag from "./Tag";

// render component
class ProjectsList extends React.Component<{
	loading?: boolean;
	space?: number;
	projects?: Project[];
}> {
	static defaultProps = {
		loading: false,
		space: 30,
		projects: projectsList,
	};

	render(){
		const { loading, space, projects } = this.props;
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
				{ projects?.map( project => (
					// eslint-disable-next-line react/jsx-key
					<SwiperSlide>
						<Grid item key={ project.title } xs={ 12 } sm={ 9 } md={ 6 }>
							<Card>
								{ loading ? (
									<Skeleton animation="wave" variant="rectangular" height={ 200 } />
								) : (
									<CardMedia component={ "img" }
									           height={ "200" }
									           image={ project.image }
									           alt={ "image" } />
								) }

								<CardHeader title={ project.title } titleTypographyProps={ { align: "center" } } />
								<CardContent>
									<div>
										{ project.tags?.map( tag => (
											// eslint-disable-next-line react/jsx-key
											<Tag name={ tag } />
										) ) }
									</div>
									<Box
										sx={ {
											display: "flex",
											flexDirection: "column",
											justifyContent: "flex-start",
											alignItems: "baseline",
											mb: 2,
										} }>
										<Typography
											component="p"
											className="project-description"
											variant="body1"
											color="text.primary">
											{ project.description }
										</Typography>
									</Box>
								</CardContent>
								<CardActions>
									<Button
										fullWidth
										variant={ project.buttonVariant as "outlined" | "contained" }
										href={ project.href }>
										{ project.buttonText }
									</Button>
								</CardActions>
							</Card>
						</Grid>
					</SwiperSlide>
				) ) }
			</Swiper>
		);
	}
}

export default ProjectsList;
