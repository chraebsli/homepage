export default function de() {
	return {
		common: {
			projects: {
				title: "Projekte",
				learnMore: "Mehr erfahren",
				imageAlt: "Bild Projekt",
				fischlehrpfad: {
					title: "Fischlehrpfad",
					description: "Der Fischlehrpfad war mein erstes Projekt. Ich habe es im 2. Lehrjahr mit einem Kollegen entwickelt. Das Projekt ist eine kleine Website für einen Fischereiverein. Sie wurde mit dem CMS Grav entwickelt.",
					tags: [ "web", "client", "deployed" ],
				},
				personal: {
					title: "eigene Website",
					description: "Dieses Projekt ist die Website auf der sie sich befinden. Ich habe diese Website selber designed und anschliessen programmiert. Dazu habe ich TypeScript mit React verwendet, die ich währenddessen erlernt habe.",
					tags: [ "web", "personal", "development" ],
				},
				sgrumisberg: {
					title: "SG Rumisberg",
					description: "Die erste Website für einen privaten Kunden. Sie ist für ein Verein aus meinem Dorf, der eine Website für ihren Schützenverein eröffnen wollte. Ich habe die Website mit dem CMS Grav entwickelt und konnte viele Erfahrungen sammeln.",
					tags: [ "web", "client", "deployed" ],
				},
				mgrumisberg: {
					title: "MG Rumisberg",
					description: "Das ist eine Website für die Musikgesellschaft Rumisberg, in der ich aktiv als Musikant bin. Unsere alte Website war mühsam zu verwalten und deshalb sollte ich eine neue erstellen. Ich habe mich wieder für das CMS Grav entschieden.",
					tags: [ "web", "client", "development" ],
				},
				homeDashboard: {
					title: "Home Dashboard",
					description: "Dieses Projekt ist ein Dashboard für mein Smart Home. Die Daten werden mit einer API von Next.js verarbeitet und anschliessend mit TypeScript React bereitgestellt. Es gibt Elemente für Zeit, Wetter und Kalender. Weitere kommen.",
					tags: [ "web", "personal", "development" ],
				},
			},
			services: {
				title: "Dienstleistungen",
				learnMore: "Mehr erfahren",
				illustration: "Illustration",
				itSupport: {
					title: "IT Support",
					teaser: "Brauchen Sie Hilfe bezüglich Computer oder Smartphones und wissen nicht mehr weiter?",
					description: "Kommen Sie nicht mehr weiter bei Apps von Ihrem Computer oder ihrem Smartphone oder Fragen zu Sicherheit und Datenschutz?",
					features: [
						"professioneller Support",
						"schnelle Hilfe über Chat/ Anruf",
						"remote/ vor Ort Hilfestellung",
						"Weiterbildung und Aufklärung",
					],
				},
				website: {
					title: "Website erstellen",
					teaser: "Brauchen Sie eine Website für Ihren Verein, Startup oder für einen persönlichen Zweck?",
					description: "Ich erstelle günstig für Sie die perfekte Website für Ihren Verein, Startup oder für einen persönlichen Zweck nach Ihren Wünschen.",
					features: [ "professionelle Website", "Konfiguration", "Domain & Hosting", "E-Mail Adressen" ],
				},
				webapp: {
					title: "Webapp erstellen",
					teaser: "Benötigen Sie eine Webapp für zum Beispiel bei ihrem Startup Arbeitszeiten zu erfassen?",
					description: "Ich entwickle für Sie die perfekte Webapplikation für Ihr Startup oder für einen persönlichen Zweck mit Login und anderen Funktionen.",
					features: [ "moderne Webapplikation", "einfach zu bedienen", "einfach erweiterbar", "sichere Daten" ],
				},
				database: {
					title: "Datenbank",
					teaser: "Möchten Sie eine Datenbank erstellen oder von einer anderen Date übernehmen?",
					description: "Ich erstelle für Sie eine neue Datenbank oder übernehme Daten von einer anderen Datenbank in eine neue, egal ob SQL oder NoSQL.",
					features: [
						"vollständiges Datenbanksystem",
						"überlegte Struktur",
						"einfach zu verwalten",
						"schnelle Abfragen",
					],
				},
			},
		},
		components: {
			header: {
				title: "chraebsli IT-Services",
				links: {
					about: "Über mich",
					services: "Services",
					projects: "Projekte",
					contact: "Kontakt",
				},
			},
			footer: {
				copyright: "chraebsli IT-Services",
				links: {
					imprint: "Impressum",
					contact: "Kontakt",
					privacy: "Datenschutz",
				},
			},
		},
		pages: {
			error: {
				404: {
					title: "Error 404 - Die Seite existiert nicht.",
					description: "Die angeforderte Seite konnte nicht gefunden werden.",
				},
			},
			home: {
				welcome: "Willkommen bei chraebsli IT-Services!",
				subWelcome: "- IT-Dienstleistungen jeglicher Art -",
				description: "Ich biete verschiedene IT Dienstleistungen an, um neben meiner schulischen Lehre als Informatiker etwas Geld zu verdienen.",
				sections: {
					servicesTitle: "Dienstleistungen",
					servicesDescription: "Ich biete folgende Dienstleistungen an:",
					projectsTitle: "Projekte",
					projectsDescription: "Hier sind einige meiner Projekte:",
					socialTitle: "Soziale Medien",
					socialDescription: "Folge mir auf meinen Social Media Kanälen:",
				},
			},
			me: {
				title: "Über mich",
				skills: {
					title: "Skills",
					description: "Hier sind einzelne Skills, die ich in meiner Freizeit oder bei der Ausbildung erlernt und weiterentwickelt habe.",
				},
				projectsTitle: "Projekte",
				projectsDescription: "Projekte, die ich realisiert habe:",
				statsTitle: "Statistiken",
				statsDescription: "WakaTime Statistiken zu Programmiersprachen und Aktivität in den letzten 30 Tagen:",
			},
			contact: {
				title: "Kontakt",
				contactMe: "Bei Fragen oder Anregungen können Sie gerne per Mail due unten stehende Adresse kontaktieren. Im Normalfall werde ich mich innerhalb von 2-4 Tagen bei ihnen melden. <br />	Gerne dürfen Sie mir auch eine Rückmeldung und Verbesserungsvorschläge für diese Website geben.",
				emailAddress: "E-Mail Adresse",
				or: "oder kontaktieren Sie mich mit diesem Formular:",
				form: {
					firstName: "Vorname",
					lastName: "Nachname",
					email: "E-Mail Adresse",
					service: "Dienstleistung",
					message: "Nachricht",
					required: "* Pflichtfeld",
					send: "Senden",
					success: "Danke für Ihre Nachricht. Ich werde mich in Kürze bei Ihnen melden.",
				},
			},
			imprint: {
				title: "Impressum",
				operator: "Betreiber",
				operatorText: "Diese Website wurde erstellt und wird betrieben von:",
				contactMe: "Bitte melden Sie sich bei Fragen oder Anmerkungen an die unten angegebene Email-Adresse.",
				involved: "Beteiligte",
				involvedText: "Folgende Personen sind an dieser Website beteiligt:",
				roles: { design: "Design", development: "Programmierung", content: "Inhalt" },
				resources: "Ressourcen",
				resourcesText: "Bilder, Grafiken, Videos, und andere Ressourcen wurden von folgenden Quellen verwendet:",
				links: {
					illustrations: "Illustrationen",
					icons: "Icons",
				},
			},
			privacy: {
				title: "Datenschutz",
				copyright: "Urheberrechte",
				copyrightText: "Der gesamte Inhalt auf dieser Website ist urheberrechtlich geschützt (alle Rechte vorbehalten). Ohne ausdrückliche Zustimmung des Vorstands oder der entsprechenden Rechteinhaber ist daher jede Weiterveröffentlichung (in elektronischer, schriftlicher oder sonstiger Form) oder anderweitige Nutzung der Inhalte auf dieser Website untersagt, insbesondere aber zu öffentlichen oder kommerziellen Zwecken.",
				privacy: "Datenschutz und Cookies",
				privacyTexts: [
					"Wir nehmen den Schutz Ihrer persönlichen Daten ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.<br /><br />",
					"Gestützt auf Artikel 13 der schweizerischen Bundesverfassung und die datenschutzrechtlichen" +
					" Bestimmungen des Bundes (Datenschutzgesetz, DSG) hat jede Person Anspruch auf Schutz ihrer Privatsphäre sowie auf Schutz vor Missbrauch ihrer persönlichen Daten. Wir halten diese Bestimmungen ein.<br /><br />",
					"Die Nutzung unserer Websites und Online-Services ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Plattformen personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.<br /><br />",
					"Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.<br /><br />",
					"Beim Zugriff auf unsere Webseiten oder Online-Services werden folgende Daten in Logfiles gespeichert: IP-Adresse, Datum, Uhrzeit, Browser-Anfrage und allgemeine übertragene Informationen zum Betriebssystem resp. Browser. Diese Nutzungsdaten bilden die Basis für statistische, anonyme Auswertungen, sodass Trends erkennbar sind, anhand derer wir unsere Angebote entsprechend verbessern können.<br /><br />",
					"Unsere Internetseiten und webbasierten Online-Services verwenden sogenannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Dies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert. Einige der von uns verwendeten Cookies sind sogenannte «Session-Cookies». Sie werden nach Ende Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen. Diese Cookies ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.<br /><br />",
					"Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschliessen sowie das automatische Löschen der Cookies beim Schliessen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität der genutzten Webseiten und Online-Services eingeschränkt sein.",
				],
				applicableLaw: "Anwendbares Recht",
				applicableLawText: "Vorbehaltlich anderer gesetzlicher Bestimmungen unterstehen das vorliegende Online-Angebot und dessen Benutzung sowie Services und Dienstleistungen, welche mit dem Online-Angebot in Zusammenhang stehen, ausschliesslich schweizerischem Recht.",
			},
		},
	};
}