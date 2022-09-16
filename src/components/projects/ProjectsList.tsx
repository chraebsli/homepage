import React from "react";
import { Autoplay, Mousewheel, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Button, Card, CardActions, CardContent, CardHeader, Grid, Skeleton, Typography } from "@mui/material";
import Tag from "../projects/Tag";
import { Picture } from "../Picture";
import { Image } from "../Text";
import { useTranslation } from "react-i18next";

// assets and styles
import projectsList from "./projects-list";
import Project from "@models/project";

export default function ProjectsList({
	loading = false,
	space = 30,
	projects = projectsList(),
}: {
	loading?: boolean;
	space?: number;
	projects?: Project[];
}) {
	const { t } = useTranslation("common");
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
			{ projects?.map(project => (
				<SwiperSlide key={ project.id }>
					<Grid item key={ project.title } xs={ 12 } sm={ 9 } md={ 6 }>
						<Card sx={ { p: "1rem" } }>
							{ loading ? (
								<Skeleton animation="wave" variant="rectangular" height={ 200 } />
							) : (
								<Picture
									path={ `projects/${ project.id }` } name={ `${ project.id }` }
									sizes={ [ 1280, 853, 533 ] } r>
									<Image
										src={ `/media/projects/${ project.id }/${ project.id }-853-min.jpg` }
										alt={ `${ t("projects.imageAlt") } ${ project.title }` } height={ 200 } />
								</Picture>
							) }

							<CardHeader title={ project.title } titleTypographyProps={ { align: "center" } } />
							<CardContent>
								<Box>
									{ project.card.tags.map(tag => (
										<Tag name={ tag } key={ tag } />
									)) }
								</Box>
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
										{ project.card.description }
									</Typography>
								</Box>
							</CardContent>
							<CardActions>
								<Button
									fullWidth
									variant={ "outlined" }
									href={ project.href }>
									{ t("projects.learnMore") }
								</Button>
							</CardActions>
						</Card>
					</Grid>
				</SwiperSlide>
			)) }
		</Swiper>
	);
}
