// Import fetchURL
import fetchURL from './fetch'

function postMessageFetch(postMessage, postImage, userId) {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({ postMessage, postImage, userId }),
    }
    return fetch(fetchURL + "message/create", options)
        // Return response in json or error message
        .then((res) => {
            if (res.ok) return res.json()
            throw new Error(res.status)
        })
        // Catch error
        .catch((err) => {
            console.log(err)
        })
}

// Export
export default postMessageFetch