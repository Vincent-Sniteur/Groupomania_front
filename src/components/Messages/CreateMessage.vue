<script>
// Service fetch create post
import postMessageFetch from '../services/postMessage.js'

// Data component
const data = () => {
    return {
        postMessage: "",
        postImage: "",
        userId: "",
    }
}
// Export Message component
export default {
    name: 'CreateMessage',
    data,
    // Methods for send message
    methods: {
        sendImage,
        sendMessage,
        postCheck,
    },
}


// Function send image to server
function sendImage() {
    // Get the file from the input
    const userImage = this.$refs.file.files[0]

    // if file is not an image, return
    if (!userImage.type.match('image.*')) {
        return alert('Please upload an image')
    }
    // Add limit size max 1Mo
    if (userImage.size > 1000000) {
        return alert('Please upload an image less than 1Mo')
    }
    // Preview the image in the DOM
    const reader = new FileReader()
    reader.onload = (e) => {
        this.postImage = e.target.result
    }
    reader.readAsDataURL(userImage)
}


// Send the form to the server for create message
function sendMessage(postMessage, postImage, userId) {
 
    // Service post message
    postMessageFetch(postMessage, postImage, userId)
        .then((res) => {
            // If success
            sucessPost()

            // Reset form & image preview
            this.postMessage = ""
            this.postImage = ""
            this.userId = ""

            // Force reload the parent to get all posts
            this.$parent.allPost()
        })
        .catch((error) => {
            console.log(error)
        })
}

// Function for check if post is empty & send message to function sendMessage
function postCheck() {
    if (this.postMessage.length >= 1 || this.postImage.length >= 1) {
        this.userId = this.$store.state.user.userId
        return this.sendMessage(this.postMessage, this.postImage, this.userId)
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
                type="text" 
                class="form-control mb-1" 
                placeholder="Your message" 
                maxlength="500"
                v-model="postMessage">
            </textarea>
        </div>
        <!-- Message button -->
        <div class="button-container">
            <!-- Send button -->
            <button 
                id="btn-send" 
                type="button" 
                class="btn btn-primary me-1 rounded-pill pull-right"
                @click.prevent="() => {postCheck(this.postMessage, this.postImage, this.userId)}"
                >Send
            </button>
            
            <!-- Attach file button -->
            <input 
                id="attach-file" 
                type="file"
                ref="file"
                name="image"
                accept="image/png, image/jpeg, image/jpg"
                :v-model="postImage"
                @change="sendImage()">
            <label for="attach-file" class="btn btn-dark rounded-pill">
                <i class="fa fa-upload"></i>
            </label>
            
            <!-- Image upload by user for post -->
            <img v-if="postImage" :src="postImage" alt="image" class="" id="image-post">
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
#image-post {
    width: 150px;
    height: 100%;
    object-fit: cover;
    margin: 0 auto;
    display: block;
}
</style>