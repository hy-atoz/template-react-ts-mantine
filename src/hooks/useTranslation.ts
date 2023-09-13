import { useEffect, useState } from 'react';
import { TRANSLATIONS } from 'src/constants/translations';
import { useBearStore } from 'src/store/useBearStore';

const useTranslation = (localeCode: string) => {
	const data: Record<string, Record<string, string>> = TRANSLATIONS;
	const [msg, setLocales] = useState<string | undefined>();
	const { language } = useBearStore();

	useEffect(() => {
		setLocales(data?.[language]?.[localeCode] || localeCode);
	}, [language, localeCode]);

	return msg;
};

export { useTranslation };
