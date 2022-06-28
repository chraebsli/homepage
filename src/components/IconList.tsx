// import libraries
import React from "react";

// import assets and css
import HomeIcon from "../pages/Overview/assets/Home.svg";
import DiensteIcon from "../pages/Overview/assets/Dienste.svg";
import PCBauenIcon from "../pages/Overview/assets/PCBauen.svg";
import WebsiteErstellenIcon from "../pages/Overview/assets/WebsiteErstellen.svg";
import KontaktIcon from "../pages/Overview/assets/Kontakt.svg";
import UberIcon from "../pages/Overview/assets/Uber.svg";
import UbersichtIcon from "../pages/Overview/assets/Ubersicht.svg";
import ImpressumIcon from "../pages/Overview/assets/Impressum.svg";
import DatenschutzIcon from "../pages/Overview/assets/Datenschutz.svg";
import IconItem from "../models/iconItem";

// render component
// eslint-disable-next-line @typescript-eslint/ban-types
class IconList extends React.Component<{}> {

	size = 25;
	items = [
		{ text: "Startseite", icon: HomeIcon, href: "/" },
		{
			text: "Dienstleistungen", icon: DiensteIcon, href: "/services", subItems: [
				{ text: "Website erstellen", icon: PCBauenIcon, href: "/services/create-website" },
				{ text: "PC bauen", icon: WebsiteErstellenIcon, href: "/services/build-pc" },
				{ text: "IT Support", iccon: "", href: "/services/it-support" },
			]
		},
		{ text: "Kontakt", icon: KontaktIcon, href: "/contact" },
		{ text: "Über mich", icon: UberIcon, href: "/me" },
		{ text: "Übersicht", icon: UbersichtIcon, href: "/overview" },
		{ text: "Impressum", icon: ImpressumIcon, href: "/impressum" },
		{ text: "Datenschutz", icon: DatenschutzIcon, href: "/datenschutz" },
	];

	parse( items: IconItem[] ){
		return items.map( ( item ) => {
			if ( !item.subItems ) {
				return (
					<a href={ item.href } className="site-link f">
						<img src={ item.icon } alt={ item.text } width={ this.size } height={ this.size } />
						<span>{ item.text }</span>
					</a>
				);
			} else {
				return (
					<div className="site-subcont f col">
						{
							item.subItems.map( ( subItem ) => {
								// eslint-disable-next-line @typescript-eslint/ban-ts-comment
								// @ts-ignore
								return this.parse( subItem );
							} )
						}

						<a href={ item.href } className="site-link f">
							<img src={ item.icon } alt={ item.text } width={ this.size } height={ this.size } />
							<span>{ item.text }</span>
						</a>
					</div>
				);
			}
		} );

	}

	render(){
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		return (this.parse( this.items ));
	}
}

export default IconList;
