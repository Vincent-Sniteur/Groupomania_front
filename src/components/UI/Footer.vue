<script>
// Export Footer component
export default {
    name: 'Footer',
    data() {
        return {
            year: new Date().getFullYear()
        }
    }
}
</script>


<template>
    <footer>
        <p class="mt-5 mb-3 text-muted text-center">&copy; {{ year }} Groupomania</p>
    </footer>
</template>

<style scoped>
footer {
  font-weight: 700;
}
</style>