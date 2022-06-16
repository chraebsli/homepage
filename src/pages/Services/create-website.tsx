// import libraries
import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, } from "@mui/material";
//import { Outlet } from "react-router-dom";
// import assets and css
import "./Services.css";
import servicesList from "./services-list";
import Service from "../../models/service";

const name = "create-website";
const service = servicesList.find( s => s.id === name ) as Service;

// render the page services
const Services = () => (
	<main className={ "services" }>
		<Container>
			<div className={ "page-title" }>
				<p>{ service.title }</p>
			</div>

			<div className="page-content c-flex justify-content-center">
				<GlobalStyles styles={ { ul: { margin: 0, padding: 0, listStyle: "none" } } } />
				<React.Fragment>
					<Container maxWidth="md" component="main">
						<Grid container spacing={ 5 } alignItems="flex-end">
							<Grid
								item
								key={ service.title }
								xs={ 12 }
								sm={ 6 }
								md={ 6 }
							>
								<Card>
									<CardMedia
										component={ "img" }
										height={ "200" }
										image={ service.image }
										alt={ "image" }
									/>

									<CardHeader
										title={ service.title }
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
												{ service.teaser }
											</Typography>
											<Typography component="p"
											            className="service-description"
											            variant="body1"
											            color="text.primary">
												{ service.description }
											</Typography>
										</Box>
										<ul>
											{ service.features.map( ( line ) => (
												<Typography
													component="li"
													variant="subtitle1"
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
											variant={ service.buttonVariant as "outlined" | "contained" }
											href={ service.href }
										>
											{ service.buttonText }
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
);

export default Services;
