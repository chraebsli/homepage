export default class IconItem {
	text: string;
	icon: any;
	href: string;
	subItem: IconItem[];

	constructor( s: {
		             text: string,
		             icon: any,
		             href: string,
		             subItem: IconItem[];
	             }
	) {
		// eslint-disable-next-line @typescript-eslint/no-unused-expressions
		this.text = s.text,
			this.icon = s.icon,
			this.href = s.href;
		this.subItem = s.subItem;
	}

}