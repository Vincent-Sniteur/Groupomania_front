<script>
const { VITE_SERVER_URL, VITE_SERVER_PORT } = import.meta.env
const fetchURL = 'http://' + VITE_SERVER_URL + ':' + VITE_SERVER_PORT + '/'

// Data component
const data = () => {
    return {
        post: "",
        image: "",
        userId: "",
        date: "",
    }
}
// Export Message component
export default {
    name: 'CreateMessage',
    data,
    // Methods for send message
    methods: {
        sendMessage,
        postCheck,
    },
}

// Function formMessage for create message
function sendMessage(post, image, userId, date) {
    console.log('Message send : ' + this.post + ' ' + this.image + ' ' + this.userId + ' ' + this.date)
    sucessPost()
    fetch(fetchURL + "message", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({ post, image, userId })
    })
        // Return response in json
        .then((res) => {
            if (res.ok) return res.json()
        })
        // Save response in res
        .then((res) => {
            console.log(res)
        })
        // Catch error
        .catch((err) => {
            console.log(err)
        })
}

// Function for check if post is empty & send message to function sendMessage
function postCheck() {
    if (this.post.length >= 1) {
        this.date = new Date()
        return this.sendMessage()
    } else {
        isFormEmpty()
    }
}


// ERROR MESSAGE
// Sucess message send
function sucessPost() {
  const errorLog = document.getElementById("post-error")
  errorLog.classList.add("alert", "alert-success")
  errorLog.textContent = "Message successfully sent"

    setTimeout(() => {
        errorLog.classList.remove("alert", "alert-success")
        errorLog.textContent = ""
    }, 2000)
}

// Error message for empty form
function isFormEmpty() {
  const errorLog = document.getElementById("post-error")
  errorLog.classList.add("alert", "alert-danger")
  errorLog.textContent = "You can't send an empty message"

    setTimeout(() => {
        errorLog.classList.remove("alert", "alert-danger")
        errorLog.textContent = ""
    }, 2000)
}


</script>

<template>
<!-- Message Send & Attach file -->
<div class="form-floating mb-1">
        <!-- Message box -->
        <div class="panel-body">
            <textarea 
                type="textarea" 
                class="form-control mb-1" 
                placeholder="Your message" 
                id="post" 
                maxlength="500"
                required="required"
                v-model="post"
                >
            </textarea>
        </div>
        <!-- Message button -->
        <div class="button-container">
            <button 
                id="btn-send" 
                type="button" 
                class="btn btn-primary me-1 rounded-pill pull-right"
                @click.prevent="() => {postCheck(this.post)}"
                >Send
            </button>
            <input id="attach-file" type="file">
            <label for="attach-file" class="btn btn-dark rounded-pill">Add image</label>

            <!-- Error or Sucess Message -->
            <p id="post-error" class="alert p-1 text-center"></p>
        </div>

        
</div>
</template>


<style scoped>

input[type=file] {
    display: none;
}
.panel-body {
    max-height:350px;
    overflow:auto;
}
.panel-body textarea {
    height: 75px;
}
#post-error {
    width: 60%;
    margin: 0 auto;
}
</style>