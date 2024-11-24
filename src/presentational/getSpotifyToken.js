export default function getSpotifyToken() {
    const client_id = '5172e367541646449173ef783ff1f2f9';
    const redirect_uri = 'http://localhost:3001/callback';
    const stateKey = 'spotify_auth_state';

    function generateRandomString(length) {
        let text = '';
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }

    const state = generateRandomString(16);

    localStorage.setItem(stateKey, state);

    const scope = 'user-read-private user-read-email';

    let url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(client_id);
    url += '&scope=' + encodeURIComponent(scope);
    url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
    url += '&state=' + encodeURIComponent(state);

    // Redirect the user to the Spotify authorization URL
    window.location = url;
}
