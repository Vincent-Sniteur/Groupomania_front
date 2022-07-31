<script>
// Export Message component
export default {
    name: 'CreateMessage',
}

</script>

<template>
<!-- Message Send & Attach file -->
<div class="form-floating mb-1">
        <textarea class="form-control mb-1" placeholder="Your message" id="floatingTextarea" style="height: 75px;"></textarea>
        <label for="floatingTextarea" class="form-label">Your message</label>

        <div class="button-container">
            <button id="btn-send" type="button" class="btn btn-primary me-1">Send</button>
            <input id="attach-file" type="file">
            <label for="attach-file" class="btn btn-dark">Add image</label>
        </div>


</div>
</template>


<style scoped>

input[type=file] {
    display: none;
}
</style>