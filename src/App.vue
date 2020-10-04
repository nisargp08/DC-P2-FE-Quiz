<template>
<div id="app">
    <div class="bg-background-primary transition-background-25-ease-in" :class="currentTheme">
        <div class="flex flex-col min-h-screen font-poppins font-medium text-tc-primary p-4">
            <header>
                <!-- Theme Switcher icons with functionality -->
                <app-theme-switcher></app-theme-switcher>
            </header>
            <main class="flex flex-col flex-1 items-center justify-center">
                <div>
                    <!-- text-4xl larger viewport -->
                    <h1 class="font-bold text-2xl uppercase">Country quiz</h1>
                    <div class="flex flex-col bg-white mt-3 rounded-24px">
                        <template v-if="errored">{{ errorMsg }}</template>
                        <!-- Display loader when api fetch in progress -->
                        <template v-if="loading">
                            <div class="flex flex-col items-center justify-center px-8 py-6">
                                <svg class="w-16 h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90" preserveAspectRatio="xMidYMid" display="block">
                                    <path fill="none" stroke="#6066d0" stroke-width="6.4" stroke-dasharray="42.76482137044271 42.76482137044271" d="M19.44 24C9.12 24 4 34.64 4 40s5.12 16 15.44 16c15.44 0 25.68-32 41.12-32C70.88 24 76 34.64 76 40s-5.12 16-15.44 16c-15.44 0-25.68-32-41.12-32z" stroke-linecap="round" style="transform-origin:50px 50px">
                                        <animate attributeName="stroke-dashoffset" repeatCount="indefinite" dur="1s" keyTimes="0;1" values="0;256.58892822265625" />
                                    </path>
                                </svg>
                                <p class="text-tc-ternary">Loading...</p>
                            </div>
                        </template>
                        <template v-if="done">
                            <div class="text-right -mt-12">
                                <img class="ml-auto w-32" src="@/assets/images/globe.svg" alt="Country quiz">
                            </div>
                            <div class="px-8 py-6">
                                <h2 class="text-tc-secondary font-bold text-2xl">Kuala Lampur is the capital of</h2>
                                <div>
                                    <app-button :onClick="test">
                                        <span class="text-base">A</span>
                                        <span class="ml-8 text-sm">India</span>
                                    </app-button>
                                </div>
                                <hr>
                            </div>
                        </template>
                    </div>
                </div>
            </main>
            <footer class="text-center my-8">
                <p class="font-montserrat text-sm font-bold leading-4 text-gray-500">Nisarg Patel @ DevChallenges.io</p>
            </footer>
        </div>
    </div>
</div>
</template>

<script>
import { mapState } from 'vuex';
import { CountryMixin } from '@/mixins/countryApi.js';

export default {
    name: 'App',
    mixins: [CountryMixin],
    data() {
        return {
            //THe amount of records you need from the API
            // limit: 250,
            //Country information
            countryData: [],
            //Questions 
            questions: [],
        }
    },
    async created() {
        //Function called from mixin
        this.countryData = await this.fetchCountryData();
        this.questions = this.generateQuestion(5);
    },
    components: {
        'AppThemeSwitcher': () => import('@/components/ThemeSwitcher.vue'),
        'AppButton': () => import('@/components/Button.vue'),
    },
    computed: {
        ...mapState(['currentTheme']),
    },
    methods: {
        test() {
            console.log("TEST");
        },
        generateQuestion(totalQuestions) {
            //Local questions array
            let questions = [];
            // If we do not have questions equal to totalQustions
            while (questions.length < totalQuestions) {
                //To pick a random Country
                let randomCountryIndex = this.generateRandomNumber(0, this.countryData.length);
                let randomCountry = this.countryData[randomCountryIndex];

                //Random options storage for our question
                let randomOptions = [];
                //While we dont we have 3 options keep iterating
                while (randomOptions.length < 3) {
                    let option = this.generateRandomNumber(0, this.countryData.length);
                    //So that we do not get the index of our question(Since we already have the answer)
                    if (option != randomCountryIndex) {
                        //Pushing a random option to the array
                        let optionObj = {
                            value: this.countryData[option].name,
                            isCorrect: false,
                        }
                        randomOptions.push(optionObj);
                    }
                }
                if (randomCountry.name != "") {
                    //Pushing the correct answer to the option list
                    const option = {
                        value: randomCountry.name,
                        isCorrect: true,
                    }
                    randomOptions.push(option);
                } else {
                    //When no answer is found : As observed in the api
                    const option = {
                        value: "None of the above",
                        isCorrect: true,
                    }
                    randomOptions.push(option);
                }

                //Preparing our question object
                const question = {
                    question: randomCountry.capital,
                    options: randomOptions
                }
                //Pushing prepared question to the array
                questions.push(question);
            }
            //Assigning questions 
            return questions;
        }
    }
}
</script>

<style lang="scss">
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
