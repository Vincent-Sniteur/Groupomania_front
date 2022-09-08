// Import fetchURL
import fetchURL from './fetch'

function likePostsFetch(id, likes, userId) {
// fetch to server
    return fetch(fetchURL + "message/" + id + "/like", {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json',
             'Authorization': 'Bearer ' + localStorage.getItem('token')
         },
         body: JSON.stringify({ id, likes, userId })
     })
}

// Export
export default likePostsFetch