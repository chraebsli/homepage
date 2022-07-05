export default class Project {
	id: string;
	title: string;
	href: string;
	image: string;
	description: string;
	content: string[];
	buttonText: string;
	buttonVariant: string;

	constructor(s: {
		id: string;
		title: string;
		href: string;
		image: string;
		description: string;
		content: string[];
		buttonText: string;
		buttonVariant: string;
	}) {
		this.id = s.id;
		this.title = s.title;
		this.href = s.href;
		this.image = s.image;
		this.description = s.description;
		this.content = s.content;
		this.buttonText = s.buttonText;
		this.buttonVariant = s.buttonVariant;
	}
}
