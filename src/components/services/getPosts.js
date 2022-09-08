// Import fetchURL
import fetchURL from './fetch'

function getMessageFetch() {
    return fetch(fetchURL + "message", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")
        }
    })
}

// Export
export default getMessageFetch