export default class IconItem {
	text: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	icon: any;
	href: string;
	subItems: IconItem[];

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	constructor(s: { text: string; icon: any; href: string; subItems: IconItem[] }) {
		this.text = s.text;
		this.icon = s.icon;
		this.href = s.href;
		this.subItems = s.subItems;
	}
}
