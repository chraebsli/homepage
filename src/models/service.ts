export default class Service {
	constructor(
		public readonly id: string,
		public readonly title: string,
		public readonly href: string,
		public readonly features: string[],
		public readonly card: {
			teaser: string,
			description: string,
		},
		public readonly page: {
			teaser: string,
			description: string,
		},
	) {}
}
