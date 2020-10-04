<template>
<app-button @onClick="checkAnswer()">
    <span class="text-base">A</span>
    <span class="ml-8 text-sm text-left">{{option.value}}</span>
</app-button>
</template>

<script>
export default {
    components: {
        'AppButton': () => import('@/components/Button.vue'),
    },
    props: {
        option: {
            type: Object,
            required: true
        },
    },
    methods: {
        checkAnswer() {
            console.log("CHECKIBNG ANSWER");
        },
    }
}
</script>

<style>

</style>
