import { LANGUAGES } from 'src/constants/languages';
import { STORAGE_KEYS } from 'src/constants/storageKeys';
import { getLocalStorage, setLocalStorage } from 'src/utils/getSetStorage';
import { create } from 'zustand';

type BearStoreState = {
	language: string;
};

export const useBearStore = create<BearStoreState>((set) => ({
	language: getLocalStorage(STORAGE_KEYS.language) || LANGUAGES.default,

	setLanguage: (language: string) => {
		set(() => {
			setLocalStorage(STORAGE_KEYS.language, language || LANGUAGES.default);
			return { language: language || LANGUAGES.default };
		});
	},
}));
