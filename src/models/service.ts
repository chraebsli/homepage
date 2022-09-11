export default class Service {
	id: string;
	title: string;
	href: string;
	image: string;
	teaser: string;
	description: string;
	features: string[];

	constructor(s: {
		id: string;
		title: string;
		href: string;
		image: string;
		teaser: string;
		description: string;
		features: string[];
	}) {
		this.id = s.id;
		this.title = s.title;
		this.href = s.href;
		this.image = s.image;
		this.teaser = s.teaser;
		this.description = s.description;
		this.features = s.features;
	}
}
