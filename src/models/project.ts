export default class Project {
	constructor(
		public readonly id: string,
		public readonly title: string,
		public readonly href: string,
		public readonly card: {
			description: string,
			tags: string[],
		},
		public readonly page: {
			wakaTimeBadge: string,
			textDescription: string,
			textContent: string,
			textVorgehen: string,
			textFazit: string,
			tools: string[],
			website?: string
		},
	) {}
}
