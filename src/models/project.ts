export default class Project {
	constructor(
		public readonly id: string,
		public readonly title: string,
		public readonly href: string,
		public readonly tags: string[],
		public readonly description: string,
		public readonly buttonText: string,
		public readonly buttonVariant: string,
		public readonly wakaTimeBadge: string,
	) {}
}
