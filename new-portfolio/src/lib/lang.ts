export type Lang = 'en' | 'pl';

export function setLang(lang: Lang) {
	if (typeof window !== 'undefined') {
		localStorage.setItem('lang', lang);
	}
}
