<template>
<button @click="onClick" class="btn flex items-center my-5 focus:outline-none">
    <slot></slot>
</button>
</template>

<script>
export default {
    // props : {
    //     onClick : {
    //         type : Function,
    //         required : true
    //     }
    // }
    methods : {
        //This functions emits an event to the parent whenever the button is clicked
        onClick(){
            this.$emit('onClick');
        }
    }
}
</script>

<style>

</style>
