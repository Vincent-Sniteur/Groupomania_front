// Import fetchURL
import fetchURL from './fetch'

function deletePostsFetch(id) {
// fetch to server
    return fetch(fetchURL + "message/" + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
    })
}

// Export
export default deletePostsFetch