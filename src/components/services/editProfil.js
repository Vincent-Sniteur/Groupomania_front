// Import fetchURL
import fetchURL from './fetch'

function editProfilFetch (username, bio, avatar, oldAvatar) {
    // Option for the fetch
    const Options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({ username, bio, avatar, oldAvatar }),
    }
    // Fetch to the server
    return fetch(fetchURL + "auth/edit-users/" + localStorage.getItem("userId"), Options)
}

export default editProfilFetch