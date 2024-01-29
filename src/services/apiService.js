import axios from 'axios';

const baseURL = 'https://api-song-express.vercel.app/song';

const apiService = axios.create({
baseURL,
});

export const getSong = (songId) => {
return apiService.get(`/${songId}`);
};

export const getSongSearch = (term) => {
    return apiService.get(`?name=${term}`);
};
    

export const getSongs = () => {
    return apiService.get();
    };

export const createSong = (postData) => {
return apiService.post('/', postData);
};

export const updateSong = (songId, updatedData) => {
return apiService.put(`/${songId}`, updatedData);
};

export const deleteSong = (songId) => {
return apiService.delete(`/${songId}`);
};