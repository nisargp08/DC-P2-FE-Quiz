<template>
<button @click="onClick" class="btn flex items-center my-5 focus:outline-none">
    <slot></slot>
</button>
</template>

<script>
export default {
    props : {
        onClick : {
            type : Function,
            required : true
        }
    }
}
</script>

<style>

</style>
