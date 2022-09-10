import React from "react";
import Head from "../components/common/Head";
import { Container, Typography } from "@mui/material";
import { Line, PageTitle, SectionTitle } from "../components/Text";

export default function Privacy() {
	const pageName = "Datenschutz";
	return (
		<>
			<Head title={pageName} />
			<main>
				<Container>
					<section>
						<PageTitle>{pageName}</PageTitle>
						<Line bottom={2} />
					</section>

					<article>
						<section>
							<SectionTitle>Urheberrechte</SectionTitle>
							<Typography>
								Der gesamte Inhalt auf dieser Website ist urheberrechtlich geschützt (alle Rechte
								vorbehalten). Ohne ausdrückliche Zustimmung des Vorstands oder der entsprechenden
								Rechteinhaber ist daher jede Weiterveröffentlichung (in elektronischer, schriftlicher
								oder sonstiger Form) oder anderweitige Nutzung der Inhalte auf dieser Website untersagt,
								insbesondere aber zu öffentlichen oder kommerziellen Zwecken.
							</Typography>
						</section>
						<Line />
						<section>
							<SectionTitle>Datenschutz und Cookies</SectionTitle>
							<Typography>
								Wir nehmen den Schutz Ihrer persönlichen Daten ernst. Wir behandeln Ihre
								personenbezogenen Daten vertraulich und entsprechend den gesetzlichen
								Datenschutzvorschriften sowie dieser Datenschutzerklärung.
							</Typography>
							<br />
							<Typography>
								Gestützt auf Artikel 13 der schweizerischen Bundesverfassung und die
								datenschutzrechtlichen Bestimmungen des Bundes (Datenschutzgesetz, DSG) hat jede Person
								Anspruch auf Schutz ihrer Privatsphäre sowie auf Schutz vor Missbrauch ihrer
								persönlichen Daten. Wir halten diese Bestimmungen ein.
							</Typography>
							<br />
							<Typography>
								Die Nutzung unserer Websites und Online-Services ist in der Regel ohne Angabe
								personenbezogener Daten möglich. Soweit auf unseren Plattformen personenbezogene Daten
								(beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies
								soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche
								Zustimmung nicht an Dritte weitergegeben.
							</Typography>
							<br />
							<Typography>
								Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation
								per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem
								Zugriff durch Dritte ist nicht möglich.
							</Typography>
							<br />
							<Typography>
								Beim Zugriff auf unsere Webseiten oder Online-Services werden folgende Daten in Logfiles
								gespeichert: IP-Adresse, Datum, Uhrzeit, Browser-Anfrage und allgemeine übertragene
								Informationen zum Betriebssystem resp. Browser. Diese Nutzungsdaten bilden die Basis für
								statistische, anonyme Auswertungen, sodass Trends erkennbar sind, anhand derer wir
								unsere Angebote entsprechend verbessern können.
							</Typography>
							<br />
							<Typography>
								Unsere Internetseiten und webbasierten Online-Services verwenden sogenannte Cookies.
								Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies
								dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Dies
								sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser
								speichert. Einige der von uns verwendeten Cookies sind sogenannte «Session-Cookies». Sie
								werden nach Ende Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem
								Endgerät gespeichert, bis Sie diese löschen. Diese Cookies ermöglichen es uns, Ihren
								Browser beim nächsten Besuch wiederzuerkennen.
							</Typography>
							<br />
							<Typography>
								Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert
								werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte
								Fälle oder generell ausschliessen sowie das automatische Löschen der Cookies beim
								Schliessen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die
								Funktionalität der genutzten Webseiten und Online-Services eingeschränkt sein.
							</Typography>
						</section>
						<Line />
						<section>
							<SectionTitle>Anwendbares Recht</SectionTitle>
							<Typography>
								Vorbehaltlich anderer gesetzlicher Bestimmungen unterstehen das vorliegende
								Online-Angebot und dessen Benutzung sowie Services und Dienstleistungen, welche mit dem
								Online-Angebot in Zusammenhang stehen, ausschliesslich schweizerischem Recht.
							</Typography>
						</section>
					</article>
				</Container>
			</main>
		</>
	);
}
