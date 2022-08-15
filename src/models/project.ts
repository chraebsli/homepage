export default class Project {
	id: string;
	title: string;
	href: string;
	tags?: string[];
	image: string;
	description: string;
	buttonText: string;
	buttonVariant: string;
	wakatimeBadge: string;

	constructor(s: {
		id: string;
		title: string;
		href: string;
		tags?: string[];
		image: string;
		description: string;
		buttonText: string;
		buttonVariant: string;
		wakatimeBadge: string;
	}) {
		this.id = s.id;
		this.title = s.title;
		this.href = s.href;
		this.tags = s.tags;
		this.image = s.image;
		this.description = s.description;
		this.buttonText = s.buttonText;
		this.buttonVariant = s.buttonVariant;
		this.wakatimeBadge = s.wakatimeBadge;
	}
}
