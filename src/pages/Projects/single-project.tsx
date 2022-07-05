// import libraries
import React from "react";
import Head from "../../components/Head";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia } from "@mui/material";
import { useParams } from "react-router-dom";

// import assets and css
import "./Projects.css";
import Project from "../../models/project";
import projectsList from "./projects-list";

// render the page projects
const SingleProject = () => {
	const name = useParams().project;
	const project = projectsList.find(s => s.id === name) as Project;
	const pageName = project.title;

	return (
		<>
			<Head title={pageName} />
			<main className={"projects"}>
				<Container>
					<div className={"page-title"}>
						<p>{project.title}</p>
					</div>

					<div className="page-content c-flex justify-content-center">
						<GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }} />
						<React.Fragment>
							<Container maxWidth="md" component="main">
								<Grid container spacing={5} alignItems="flex-end">
									<Grid item key={project.title} xs={12} sm={6} md={6}>
										<Card>
											<CardMedia
												component={"img"}
												height={"200"}
												image={project.image}
												alt={"image"}
											/>

											<CardHeader
												title={project.title}
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
														className="project-description"
														variant="body1"
														color="text.primary">
														{project.description}
													</Typography>
												</Box>
												<ul>
													{project.content.map(line => (
														<Typography component="li" variant="subtitle1" key={line}>
															{line}
														</Typography>
													))}
												</ul>
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
								</Grid>
							</Container>
						</React.Fragment>
					</div>
				</Container>
			</main>
		</>
	);
};

export default SingleProject;
