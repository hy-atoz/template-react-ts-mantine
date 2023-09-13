/* eslint-disable no-restricted-syntax */
const createParamString = (params: { [s: string]: string } | ArrayLike<string>) => {
	const paramsUrl = new URLSearchParams();

	for (const [key, value] of Object.entries(params)) {
		paramsUrl.append(key, value);
	}

	return `?${paramsUrl.toString()}`;
};

export { createParamString };
