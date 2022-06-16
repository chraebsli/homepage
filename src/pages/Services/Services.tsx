// import libraries
import React from "react";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import {
	Box,
	Button,
	Card,
	CardMedia,
	CardHeader,
	CardContent,
	CardActions,
} from "@mui/material";
//import { Outlet } from "react-router-dom";
// import assets and css
import "./Services.css";
import servicesList from "./services-list";

const services = servicesList

// render the page services
const Services = () => (
	<main className={ "services" }>
		<Container>
			<div className={ "page-title" }>
				<p>Dienstleistungen</p>
			</div>

			<div className="page-content c-flex justify-content-center">
				<GlobalStyles styles={ { ul: { margin: 0, padding: 0, listStyle: "none" } } } />
				<React.Fragment>
					<Container maxWidth="md" component="main">
						<Grid container spacing={ 5 } alignItems="flex-end">
							{ services.map( ( tier ) => (
								<Grid
									item
									key={ tier.title }
									xs={ 12 }
									sm={ 6 }
									md={ 6 }
								>
									<Card>
										<CardMedia
											component={ "img" }
											height={ "200" }
											image={ tier.image }
											alt={ "image" }
										/>

										<CardHeader
											title={ tier.title }
											titleTypographyProps={ { align: "center" } }
										/>
										<CardContent>
											<Box
												sx={ {
													display: "flex",
													flexDirection: "column",
													justifyContent: "flex-start",
													alignItems: "baseline",
													mb: 2,
												} }
											>
												<Typography component="p"
												            className="service-teaser"
												            variant="body1"
												            color="text.primary">
													{ tier.teaser }
												</Typography>
												<Typography component="p"
												            className="service-description"
												            variant="body1"
												            color="text.primary">
													{ tier.description }
												</Typography>
											</Box>
											<ul>
												{ tier.features.map( ( line ) => (
													<Typography
														component="li"
														variant="subtitle1"
														//align="center"
														key={ line }
													>
														{ line }
													</Typography>
												) ) }
											</ul>
										</CardContent>
										<CardActions>
											<Button
												fullWidth
												variant={ tier.buttonVariant as "outlined" | "contained" }
												href={tier.href}

											>
												{ tier.buttonText }
											</Button>
										</CardActions>
									</Card>
								</Grid>
							) ) }
						</Grid>
					</Container>
				</React.Fragment>
			</div>
		</Container>
	</main>
);

export default Services;
