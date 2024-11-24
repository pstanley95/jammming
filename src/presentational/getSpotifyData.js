import getSpotifyToken from "./getSpotifyToken";

const baseURL = 'https://api.spotify.com/v1/search';
const types = ['track', 'artist'];



const getSpotifyData = async (search) => {
    try {
        // get token from local stoarge
        const token = localStorage.getItem('spotify_access_token');
        if(!token) {
            throw new Error('Need to log in');
        }
        
        const searchQuery = "q="+encodeURIComponent(search);
        const typesQuery = "type="+types.join(",");
        const query = `${baseURL}?${searchQuery}&${typesQuery}`;
        console.log('Searching for '+search);
        const response = await fetch(query, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })

        if (response.ok) {
            const jsonResponse = await response.json();
            const tracks = jsonResponse.tracks?.items;
            console.log('Tracks Array:', tracks);

            return tracks;
        }
        throw new Error('Request failed!')
    } catch(error) {
        console.log('We caught an error!!!');
        console.log(error);
    }
};

export default getSpotifyData;