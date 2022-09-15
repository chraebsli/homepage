export default class Service {
	constructor(
		public readonly id: string,
		public readonly title: string,
		public readonly href: string,
		public readonly teaser: string,
		public readonly description: string,
		public readonly features: string[],
	) {}
}
