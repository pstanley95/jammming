import getSpotifyToken from "./presentational/getSpotifyToken";

export default function checkAuthorization() {
    // Retrieve token and expiry from localStorage
    const accessToken = localStorage.getItem('spotify_access_token');
    const tokenExpiry = parseInt(localStorage.getItem('spotify_token_expiry'), 10);

    console.log('Access token:', accessToken, 'Token expiry:', tokenExpiry);

    // If token exists and hasn't expired, return it
    if (accessToken && Date.now() < tokenExpiry) {
        console.log('Token is still valid. It will expire at:', new Date(tokenExpiry));
        return accessToken;
    }

    // Check URL for a new token after Spotify redirects
    const hashParams = new URLSearchParams(window.location.hash.substring(1)); // Remove `#`
    const token = hashParams.get('access_token');
    const expiresIn = hashParams.get('expires_in');

    console.log('Hash Params:', [...hashParams.entries()]);

    // If a new token is found in the URL, save it to localStorage
    if (token && expiresIn) {
        localStorage.setItem('spotify_access_token', token);
        localStorage.setItem(
            'spotify_token_expiry',
            Date.now() + parseInt(expiresIn, 10) * 1000 // Convert expiresIn to milliseconds
        );

        // Clear URL fragment to clean up
        window.history.replaceState(null, null, window.location.pathname);
        console.log('New token saved:', token);
        return token;
    }

    // If no token is found, redirect to Spotify
    console.log('Token missing or expired. Redirecting to Spotify...');
    getSpotifyToken();
    return null;
}
