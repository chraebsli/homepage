// import libraries
import React from "react";
import { Card, Container, Stack } from "react-bootstrap";

// import assets and css
import "./Me.css";
import PersonIcon from "@mui/icons-material/Person";
import DataArrayIcon from "@mui/icons-material/DataArray";
import TerminalIcon from "@mui/icons-material/Terminal";

// render the page me
const Me = () => (
	<main className={ "me" }>
		<Container>
			<Stack>
				<Card className={ "me-card" }>
					<Card.Body>
						<Card.Title>
							<h2><PersonIcon /> about me </h2>
						</Card.Title>
						<Card.Text>
							<p>
								{ "I am a software engineer with a passion for web development. I am currently working as a frontend developer at a startup called <a href='https://www.komplex.com/' target='_blank' rel='noopener noreferrer'>Komplex</a>." }
							</p>
							<p>
								{ "I am currently working as a frontend developer at a startup called <a href='https://www.komplex.com/' target='_blank' rel='noopener noreferrer'>Komplex</a>." }
							</p>
						</Card.Text>
					</Card.Body>
				</Card>
				<Card className={ "skills-card" }>
					<Card.Body>
						<Card.Title>
							<h2><DataArrayIcon /> skills </h2>
						</Card.Title>
						<Card.Text>
							<div>
								<span className={ "progress-text" }>HTML5 / CSS3</span>
								<progress className={ "progress" } value={ "90" } max={ "100" } />
							</div>
							<div>
								<span className={ "progress-text" }>JS / TS</span>
								<progress className={ "progress" } value={ "70" } max={ "100" } />
							</div>
							<div>
								<span className={ "progress-text" }>MySQL</span>
								<progress className={ "progress" } value={ "70" } max={ "100" } />
							</div>
							<div>
								<span className={ "progress-text" }>Python</span>
								<progress className={ "progress" } value={ "60" } max={ "100" } />
							</div>
							<div>
								<span className={ "progress-text" }>React</span>
								<progress className={ "progress" } value={ "70" } max={ "100" } />
							</div>
						</Card.Text>
					</Card.Body>
				</Card>
				<Card className={ "skills-card" }>
					<Card.Body>
						<Card.Title>
							<h2><TerminalIcon /> projects </h2>
						</Card.Title>
						<Card.Text>
							<div>
								<p className={ "project-text" }>Fischlehrpfad</p>
								<p className={ "project-text" }>Homepage</p>
							</div>
						</Card.Text>
					</Card.Body>
				</Card>
			</Stack>
		</Container>
	</main>
);

export default Me;
