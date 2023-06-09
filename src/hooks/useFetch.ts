import axios from 'axios';
import { useEffect, useState } from 'react';

const apiClient = axios.create({
	baseURL: import.meta.env.VITE_API_CLIENT,
});

const useFetch = (method, url, config) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const abortController = new AbortController();
		const fetchData = async () => {
			try {
				const res = await apiClient[method](url, config);
				setData(res.data);
				setLoading(false);
			} catch (err) {
				if (err.name !== 'AbortError') {
					setError(err.message);
					setLoading(false);
				}
			}
		};
		fetchData();

		return () => abortController.abort();
	}, []);

	return { data, loading, error };
};

export { useFetch };
