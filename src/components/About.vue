<template>
    <div class="about">
        <h1>Hello {{their_name}} This is an about page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quidem deserunt eos commodi expedita unde sunt voluptatibus deleniti vel, ea ab laudantium necessitatibus quaerat accusantium beatae, qui, a aliquid aperiam!</p>
    </div>
</template>

<script>
    export default {
        name: 'Skills',
        data(){
            return {
                their_name: this.$route.params.name
            }
        }
    }
</script>

<style scoped>

</style>