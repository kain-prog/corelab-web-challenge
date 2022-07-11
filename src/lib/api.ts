import axios from 'axios';

export const api = axios.create({
	baseURL: 'http://localhost:3333/api'
});

export async function getVehicles(){
	const { data , status } = await api.get('/vehicles');
	if (status === 200){
		return data;
	}
	else{
		console.log(data);
	}	
}

// export async function getFavorite(){

// }	

export async function createFavorite(user_id: string | undefined, vehicle_id: number){

	const favorite = {
		user_id: user_id,
		vehicle_id: vehicle_id
	};

	if(favorite.user_id !== undefined){
		await api.post('/favorites', favorite);
	}
}