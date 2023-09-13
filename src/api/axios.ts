/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance, AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';
import { STORAGE_KEYS } from 'src/constants/storageKeys';
import { getSessionStorage } from 'src/utils/getSetStorage';

const serverAxiosParams = {
	baseURL: import.meta.env.VITE_API_BASE_URL,
};

export const serverAxiosInstance = axios.create(serverAxiosParams);

serverAxiosInstance.interceptors.request.use(
	(config: InternalAxiosRequestConfig<any>) => {
		const accessToken = getSessionStorage(STORAGE_KEYS.accessToken);

		if (accessToken) {
			// eslint-disable-next-line no-param-reassign
			config.headers.Authorization = `Bearer ${accessToken}`;
		}

		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

const api = (axiosInstance: AxiosInstance) => {
	return {
		get: (url: string, config: AxiosRequestConfig<any> | undefined) =>
			axiosInstance.get(url, config),
		delete: (url: string, config: AxiosRequestConfig<any> | undefined) =>
			axiosInstance.delete(url, config),
		post: (url: string, body: any, config: AxiosRequestConfig<any> | undefined) =>
			axiosInstance.post(url, body, config),
		put: (url: string, body: any, config: AxiosRequestConfig<any> | undefined) =>
			axiosInstance.put(url, body, config),
		patch: (url: string, body: any, config: AxiosRequestConfig<any> | undefined) =>
			axiosInstance.patch(url, body, config),
	};
};

export const serverApi = api(serverAxiosInstance);
