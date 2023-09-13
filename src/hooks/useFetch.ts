import axios, { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';

const apiClient = axios.create({
	baseURL: import.meta.env.VITE_API_CLIENT as string,
});

type FetchMethod = 'get' | 'post' | 'put' | 'delete';

interface FetchResult {
	data: unknown | null;
	loading: boolean;
	error: string | null;
}

const useFetch = (method: FetchMethod, url: string, config?: AxiosRequestConfig): FetchResult => {
	const [data, setData] = useState<unknown | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const abortController = new AbortController();
		const fetchData = async () => {
			try {
				const res = await apiClient[method](url, config);
				setData(res.data);
				setLoading(false);
			} catch (err: unknown) {
				if (err instanceof Error) {
					// Type guard to narrow down the type
					if (err.name !== 'AbortError') {
						setError(err.message);
						setLoading(false);
					}
				}
			}
		};
		fetchData();

		return () => abortController.abort();
	}, [method, url, config]);

	return { data, loading, error };
};

export { useFetch };
