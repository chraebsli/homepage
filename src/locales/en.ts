export default function en() {
	return {
		common: {
			projects: {
				title: "Projects",
				learnMore: "learn more",
				imageAlt: "Image of project",
				fischlehrpfad: {
					title: "Fischlehrpfad",
					description: "The \"Fischlehrpfad\" was my first project. I developed it in the 2nd year in my apprenticeship with a colleague. The project is a small website for a fishing club. It was developed with the CMS Grav.",
					tags: [ "web", "client", "deployed" ],
				},
				personal: {
					title: "personal website",
					description: "This project is the website you are currently on. I designed and programmed this website by myself. For this I used TypeScript with React, which I learned during the development of the project.",
					tags: [ "web", "personal", "development" ],
				},
				sgrumisberg: {
					title: "SG Rumisberg",
					description: "The first website for a private customer. It is for a society from my village, which wanted to open a website for their rifle club. I developed the website with the CMS Grav and gained a lot of experience.",
					tags: [ "web", "client", "deployed" ],
				},
				mgrumisberg: {
					title: "MG Rumisberg",
					description: "This is a website for the brass band of Rumisberg, where I am active as a musician. Our old website was difficult to manage and therefore I should create a new one. I have decided to use the CMS Grav again.",
					tags: [ "web", "client", "development" ],
				},
				homeDashboard: {
					title: "Home Dashboard",
					description: "This project is a dashboard for my smart home. The data is processed with an API from Next.js and then provided with TypeScript React. There are elements for time, weather and calendar. More in development and are coming soon.",
					tags: [ "web", "personal", "development" ],
				},
			},
			services: {
				title: "Services",
				learnMore: "learn more",
				illustration: "illustration",
				itSupport: {
					title: "IT Support",
					teaser: "Do you need help with your computer or smartphone and don’t know what to do?",
					description: "Are you having trouble with apps on your computer or smartphone or have questions about security and data protection?",
					features: [
						"professional support",
						"fast help via chat/ call",
						"remote/ on site help",
						"training and education",
					],
				},
				website: {
					title: "create a website",
					teaser: "Do you need a website for your club, startup or for a personal purpose?",
					description: "I will create a perfect and favorable website for your club, startup or for a personal purpose according to your wishes.",
					features: [ "professional website", "configuration", "domain & hosting", "E-Mail addresses" ],
				},
				webapp: {
					title: "create a webapp",
					teaser: "Do you need a web application for example to record working hours for your startup?",
					description: "I can develop the perfect web application for your startup or for a personal purpose with login and other helpful features.",
					features: [ "modern web application", "easy to operate", "expandable", "secure data" ],
				},
				database: {
					title: "Database",
					teaser: "Do you want to create a new database or import from an old database?",
					description: "I can create a new database for you or transfer data from another database to a new one, regardless of SQL or NoSQL.",
					features: [
						"complete database system",
						"clever structure",
						"easy to manage",
						"fast queries",
					],
				},
			},
		},
		components: {
			header: {
				title: "chraebsli IT-Services",
				links: {
					about: "About",
					services: "Services",
					projects: "Projects",
					contact: "Contact",
				},
			},
			footer: {
				copyright: "chraebsli IT-Services",
				links: {
					imprint: "Imprint",
					contact: "Contact",
					privacy: "Privacy",
				},
			},
		},
		pages: {
			error: {
				404: {
					title: "Error 404 - This page does not exist",
					description: "The page you are looking for does not exist.",
				},
			},
			home: {
				welcome: "Welcome to chraebsli IT-Services!",
				subWelcome: "- all different IT-Services -",
				description: "I offer various IT services to earn some money alongside my school apprenticeship as a computer scientist.",
				sections: {
					servicesTitle: "Services",
					servicesDescription: "I offer following services:",
					projectsTitle: "Projects",
					projectsDescription: "This are some of my projects:",
					socialTitle: "Social Media",
					socialDescription: "Follow me on this social media platforms:",
				},
			},
			me: {
				title: "About me",
				skills: {
					title: "Skills",
					description: "These are some of my skills I learned oder trained in my free time or while my apprenticeship as a computer scientist.",
				},
				projectsTitle: "Projects",
				projectsDescription: "Some Projects I built:",
				statsTitle: "Statistics",
				statsDescription: "WakaTime statistics about my activity in programming and the languages I used in the last 30 days:",
			},
			contact: {
				title: "Contact",
				contactMe: "If you have any questions, please contact me via the e-mail address below. I will usually get back to you within 2-4 days. <br /> You are also welcome to give me feedback and suggestions for improving this website.",
				emailAddress: "E-Mail address",
				or: "oder contact me with this form:",
				form: {
					firstName: "Firstname",
					lastName: "Lastname",
					email: "E-Mail address",
					service: "Service",
					message: "Message",
					send: "Send",
					success: "Thanks for your message! I will get back to you as soon as possible.",
				},
			},
			imprint: {
				title: "Imprint",
				operator: "Developer",
				operatorText: "This website is getting developed by:",
				contactMe: "If you have any questions, please contact me via the e-mail address below.",
				involved: "Involved",
				involvedText: "Following people are involved in the development of this website:",
				roles: { design: "Design", development: "Programming", content: "Content" },
				resources: "Resources",
				resourcesText: "Images, Videos, and other resources are used from the following sources:",
				links: {
					illustrations: "Illustrations",
					icons: "Icons",
				},
			},
		},
	};
}