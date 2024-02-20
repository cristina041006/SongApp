import axios from 'axios';

const baseURL = 'http://localhost:3000/';

const apiService = axios.create({
baseURL,
});

export const getSong = (songId) => {
return apiService.get(`song/${songId}`);
};

export const getSongSearch = (term) => {
    return apiService.get(`song?name=${term}`);
};
    

export const getSongs = () => {
    return apiService.get(`song`);
    };

export const createSong = (postData) => {
return apiService.post('song/', postData);
};

export const updateSong = (songId, updatedData) => {
return apiService.put(`song/${songId}`, updatedData);
};

export const deleteSong = (songId) => {
return apiService.delete(`song/${songId}`);
};

export const addUser = (user)=>{
    return apiService.post(`user/`, user )
}