<template>
<div>
    <h2 class="text-tc-secondary font-bold text-2xl">{{question.title}} is the capital of</h2>
    <div>
        <div v-for="(option,opIndex) in question.options" :key="opIndex">
            <app-question-option :option="option"></app-question-option>
        </div>
    </div>
    <div class="text-right">
        <button class="font-bold text-sm text-white leading-6 py-2 px-6 rounded-12px bg-yellow">Next</button>
    </div>
</div>
</template>

<script>
export default {
    name: "QuestionCard",
    props: {
        question: {
            type: Object,
            required: true
        }
    },
    components: {
        'AppQuestionOption': () => import('@/components/QuestionOption.vue'),
    },
}
</script>

<style>

</style>
