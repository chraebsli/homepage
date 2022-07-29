// import libraries
import React from "react";
import { Card } from "react-bootstrap";

// import assets
import { SiCss3, SiHtml5, SiJavascript, SiMysql, SiPhp, SiPython, SiReact, SiTypescript } from "react-icons/si";
import CodeIcon from "@mui/icons-material/Code";
import Progress from "../Progress";

// render component
class Languages extends React.Component {
	render(){
		return (
			<Card className={ "skills-techs-card" } id={ "skills-techs" }>
				<Card.Body>
					<Card.Title>
						<h3>
							<CodeIcon /> languages
						</h3>
					</Card.Title>
					<Card.Text>
						<div>
							<span className={ "progress-text" }>
								<SiHtml5 />
								HTML / <SiCss3 />
								CSS
							</span>
							<progress className={ "progress" } value={ "80" } max={ "100" } />
						</div>
						<div>
							<span className={ "progress-text" }>
								<SiJavascript />
								JS / <SiTypescript />
								TS
							</span>
							<progress className={ "progress" } value={ "70" } max={ "100" } />
						</div>
						<Progress text={ "React" } icon={ <SiReact /> } progress={ 70 } />
						<Progress text={ "PHP" } icon={ <SiPhp /> } progress={ 60 } />
						<Progress text={ "MySQL" } icon={ <SiMysql /> } progress={ 80 } />
						<Progress text={ "Python" } icon={ <SiPython /> } progress={ 50 } />
					</Card.Text>
				</Card.Body>
			</Card>
		);
	}
}

export default Languages;
