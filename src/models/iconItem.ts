export default class IconItem {
	text: string;
	icon: any;
	href: string;
	subItems: IconItem[];

	constructor(s: { text: string; icon: any; href: string; subItems: IconItem[] }) {
		this.text = s.text;
		this.icon = s.icon;
		this.href = s.href;
		this.subItems = s.subItems;
	}
}
