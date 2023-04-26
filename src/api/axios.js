import axios from 'axios';

const refreshOpt = {
	refreshQueue: [],
	isRefreshing: false,
};

// status code that will hit refresh token
const statusCode = [401];
// custom logic to trigger refresh token
const customRefreshTrigger = (response) => {
	return true;
};
const refreshUrl = 'https://dev-thailotto.devtoz.com/app/api/auth/refresh';
const getRefreshToken = (response) => response.data.data.content.accessToken;
const processQueue = (error, token = null) => {
	refreshOpt.refreshQueue.forEach((prom) => {
		if (error) {
			prom.reject(error);
		} else {
			prom.resolve(token);
		}
	});

	refreshOpt.refreshQueue = [];
};
const tokenKey = 'token';

const authPrefix = 'Bearer ';
const handleError = (error) => error;

// Function that will be called to refresh authorization
const refreshAuthLogic = () => {
	if (!refreshOpt.isRefreshing) {
		refreshOpt.isRefreshing = true;
		return axios
			.post(refreshUrl)
			.then((response) => getRefreshToken(response))
			.then((token) => {
				sessionStorage.setItem(tokenKey, token);
				refreshOpt.isRefreshing = false;
				processQueue(null, token);
				return token;
			})
			.catch((error) => {
				refreshOpt.isRefreshing = false;
				processQueue(error, null);
				return Promise.reject(error);
			});
	} else {
		return new Promise((resolve, reject) => {
			refreshOpt.refreshQueue.push({ resolve, reject });
		});
	}
};

// Obtain the fresh token each time the function is called
function getAccessToken() {
	return sessionStorage.getItem(tokenKey);
}

// Use interceptor to inject the token to requests
axios.interceptors.request.use((request) => {
	request.headers['Authorization'] = `${authPrefix}${getAccessToken()}`;
	return request;
});

axios.interceptors.response.use(undefined, (error) => {
	const {
		config,
		response,
		response: { status },
	} = error;
	const originalRequest = config;
	if (statusCode.includes(status) && customRefreshTrigger(response) && !originalRequest._retry) {
		originalRequest._retry = true;
		return refreshAuthLogic().then((token) => {
			originalRequest.headers['Authorization'] = `${authPrefix}${token}`;
			return axios(originalRequest);
		});
	}
	return Promise.reject(handleError(error));
});

export default axios;
