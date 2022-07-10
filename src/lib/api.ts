// const API = 'http://localhost:3333';

// const endpoint = (path: string): string => API + path;

// const get = async (path: string): Promise<any> => {
// 	return fetch(endpoint(path)).then((res) => res.json());
// };

// export const getVehicles = async () => {
// 	return get('/vehicles');
// };

import axios from 'axios';

export const api = axios.create({
	baseURL: 'http://localhost:3333/api'
});