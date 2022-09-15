import Service from "../../models/service";

const servicesList = () => {
	return [
		new Service(
			"support",
			"IT Support",
			"/service/support",
			"Brauchen Sie Hilfe bezüglich Computer oder Smartphones und wissen nicht mehr weiter?",
			"Kommen Sie nicht mehr weiter bei Apps von Ihrem Computer oder ihrem Smartphone oder Fragen zu" +
			" Sicherheit und Datenschutz?",
			[ "professioneller Support", "schnelle Hilfe über Chat/ Anruf", "remote/ vor Ort Hilfestellung", "Weiterbildung und Aufklärung" ],
			"Mehr erfahren",
			"outlined",
		),

		new Service(
			"website",
			"Website erstellen",
			"/service/website",
			"Brauchen Sie eine Website für Ihren Verein, Startup oder für einen persönlichen Zweck?",
			"Ich erstelle günstig für Sie die perfekte Website für Ihren Verein, Startup oder für einen " +
			"persönlichen Zweck nach Ihren Wünschen.",
			[ "professionelle Website", "Konfiguration", "Domain & Hosting", "E-Mail Adressen" ],
			"Mehr erfahren",
			"outlined",
		),

		new Service(
			"webapp",
			"Webapplikation erstellen",
			"/service/webapp",
			"Benötigen Sie eine Webapp für zum Beispiel bei ihrem Startup Arbeitszeiten zu erfassen?",
			"Ich entwickle für Sie die perfekte Webapplikation für Ihr Startup oder für einen persönlichen" +
			" Zweck mit Login und anderen Funktionen.",
			[ "moderne Webapplikation", "einfach zu bedienen", "einfach erweiterbar", "sichere Daten" ],
			"Mehr erfahren",
			"outlined",
		),

		new Service(
			"database",
			"Datenbank",
			"/service/database",
			"Möchten Sie eine Datenbank erstellen oder von einer anderen Date übernehmen?",
			"Ich erstelle für Sie eine neue Datenbank oder übernehme Daten von einer anderen Datenbank in eine" +
			" neue, egal ob SQL oder NoSQL.",
			[ "vollständiges Datenbanksystem", "überlegte Struktur", "einfach zu verwalten", "schnelle Abfragen" ],
			"Mehr erfahren",
			"outlined",
		),
	];
};

export default servicesList();
