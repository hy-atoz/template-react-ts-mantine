import { LANGUAGES } from 'src/constants/languages';
import chineseSimplified from 'src/locales/chineseSimplified.json';
import englishUS from 'src/locales/englishUS.json';

const TRANSLATIONS = {
	[LANGUAGES.default]: englishUS,
	[LANGUAGES.chineseSimplified]: chineseSimplified,
	[LANGUAGES.englishUS]: englishUS,
};

export { TRANSLATIONS };
