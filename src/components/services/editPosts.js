// Import fetchURL
import fetchURL from './fetch'

function editPostsFetch(id, message) {
// fetch to server
    return fetch(fetchURL + "message/" + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        body: JSON.stringify({ id, message })
    })
}

// Export
export default editPostsFetch