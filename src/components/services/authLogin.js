// Import fetchURL
import fetchURL from './fetch'

function authLoginFetch(email, password) {
    // fetch to server
    return fetch(fetchURL + "auth/login",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
    })
    .then((res) => {
        if (res.ok) return res.json()
    })
}

// Export
export default authLoginFetch