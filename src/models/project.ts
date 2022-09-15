export default class Project {
	id: string;
	title: string;
	href: string;
	tags?: string[];
	description: string;
	buttonText: string;
	buttonVariant: string;
	wakaTimeBadge: string;

	constructor(s: {
		id: string;
		title: string;
		href: string;
		tags?: string[];
		description: string;
		buttonText: string;
		buttonVariant: string;
		wakaTimeBadge: string;
	}) {
		this.id = s.id;
		this.title = s.title;
		this.href = s.href;
		this.tags = s.tags;
		this.description = s.description;
		this.buttonText = s.buttonText;
		this.buttonVariant = s.buttonVariant;
		this.wakaTimeBadge = s.wakaTimeBadge;
	}
}
