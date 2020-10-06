<template>
<div>
    <!-- When question is of 'Capital' type -->
    <h2 v-if="question.type == 'capital'" class="text-tc-secondary font-bold text-2xl">{{question.title}} is the capital of</h2>
    <!-- When question is of 'Flag' type -->
    <div v-if="question.type == 'flag'">
        <img class="w-32" :src="question.title" alt="Country Flag">
        <h2 class="text-tc-secondary font-bold text-2xl mt-2">Which country does this flag belong to?  </h2>
    </div>
    <div>
        <div v-for="(option,opIndex) in question.options" :key="opIndex">
            <app-button :disabled="disabled" :class="highlightAnswer(opIndex)" @onClick="checkAnswer(opIndex)" class="transition-all-25-ease-in">
                <span class="text-base">{{ opIndex | options}}</span>
                <span class="flex-1 ml-8 text-sm text-left">{{option.value}}</span>
                <!-- Checkmark if correct -->
                <svg v-if="opIndex == answerIndex" class="w-4 h-4 fill-current text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <!-- Cross if incorrect -->
                <svg v-if="opIndex == selectedIndex && opIndex != answerIndex" class="w-4 h-4 fill-current text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
                </svg>
            </app-button>
        </div>
    </div>
    <!-- Only display when an answer has been selected -->
    <div v-if="disabled" class="text-right">
        <!-- Emit event from the function upon click -->
        <button @click="nextQuestion" class="font-bold text-sm text-white leading-6 py-2 px-6 rounded-12px bg-yellow shadow-yellow focus:outline-none">Next</button>
    </div>
</div>
</template>

<script>
export default {
    name: "QuestionCard",
    data() {
        return {
            disabled: false,
            selectedIndex: null,
            answerIndex: null,
            //User score coutner
            score: 0,
        }
    },
    props: {
        question: {
            type: Object,
            required: true
        }
    },
    components: {
        'AppButton': () => import('@/components/Button.vue'),
    },
    methods: {
        checkAnswer(opIndex) {
            //Disable button so further selection is prohibited
            this.disabled = true;
            //Assign selected index
            this.selectedIndex = opIndex;
            //Get answer index
            this.question.options.forEach((option, index) => {
                if (option.isCorrect) {
                    this.answerIndex = index;
                }
            });
            //Increase score if selected correct
            if (this.selectedIndex == this.answerIndex) {
                this.score++;
            }
        },
        highlightAnswer(opIndex) {
            //Only highlight when a selection has been made
            if (this.disabled) {
                //Highlight green on correct answer
                if (opIndex == this.answerIndex) {
                    return "btn-success";
                }
                //Highlight red if  incorrect answer
                if (opIndex == this.selectedIndex) {
                    return "btn-danger";
                }
            }
        },
        nextQuestion() {
            //Emit event to parent with the score
            this.$emit('nextQuestion',this.score);
        }
    },
    filters : {
        //Return alphabet based on the option index
        options(value){
            switch(value) {
                case 0 : return 'A';
                case 1 : return 'B';
                case 2 : return 'C';
                case 3 : return 'D';
            }
        }
    }
}
</script>

<style>

</style>
