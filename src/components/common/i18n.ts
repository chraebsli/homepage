import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import de from "../../locales/de";
import en from "../../locales/en";

export const defaultLanguage = "de";

i18n
	// detect user language
	// learn more: https://github.com/i18next/i18next-browser-languageDetector
	.use(LanguageDetector)
	// pass the i18n instance to react-i18next.
	.use(initReactI18next)
	// init i18next
	// for all options read: https://www.i18next.com/overview/configuration-options
	.init({
		debug: true,
		fallbackLng: defaultLanguage,
		interpolation: {
			escapeValue: false, // not needed for react as it escapes by default
		},
		react: {
			transSupportBasicHtmlNodes: true,
		},
		ns: [ "common", "footer", "header", "pages" ],
		defaultNS: "common",
		resources: {
			de: {
				common: { ...de().common },
				header: { ...de().components.header },
				footer: { ...de().components.footer },
				pages: { ...de().pages },
			},
			en: {
				header: { ...en().components.header },
				footer: { ...en().components.footer },
			},
		},
	});

export default i18n;

export const languages = [
	{ code: "de", name: "Deutsch" },
	{ code: "en", name: "English" },
];
