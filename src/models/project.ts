export default class Project {
	id: string;
	title: string;
	href: string;
	tags: string[];
	image: string;
	description: string;
	wakaTimeBadge: string;

	constructor(s: {
		id: string;
		title: string;
		href: string;
		tags: string[];
		image: string;
		description: string;
		wakaTimeBadge: string;
	}) {
		this.id = s.id;
		this.title = s.title;
		this.href = s.href;
		this.tags = s.tags;
		this.image = s.image;
		this.description = s.description;
		this.wakaTimeBadge = s.wakaTimeBadge;
	}
}
