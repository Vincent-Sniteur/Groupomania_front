<script>
// Export Message component
export default {
    name: 'CreateMessage',
}

</script>

<template>
<!-- Message Send & Attach file -->
<div class="form-floating mb-1">
        <!-- Message box -->
        <div class="panel-body">
            <textarea class="form-control mb-1" placeholder="Your message" id="floatingTextarea" maxlength="500"></textarea>
        </div>
        <!-- Message button -->
        <div class="button-container">
            <button id="btn-send" type="button" class="btn btn-primary me-1 rounded-pill pull-right">Send</button>
            <input id="attach-file" type="file">
            <label for="attach-file" class="btn btn-dark rounded-pill">Add image</label>
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
</style>