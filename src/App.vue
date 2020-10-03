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
                        <div class="text-right -mt-12">
                            <img class="ml-auto w-32" src="@/assets/images/globe.svg" alt="Country quiz">
                        </div>
                        <div class="px-8 py-6">
                            <h2 class="text-tc-secondary font-bold text-2xl">Kuala Lumpur is the capital of</h2>
                            <div>
                                <app-button :onClick="test">
                                    <span class="text-base">A</span>
                                    <span class="ml-8 text-sm">Vietnam</span>
                                </app-button>
                                <app-button :onClick="test">
                                    <span class="text-base">A</span>
                                    <span class="ml-8 text-sm">Vietnam</span>
                                </app-button>
                                <app-button :onClick="test">
                                    <span class="text-base">A</span>
                                    <span class="ml-8 text-sm">Vietnam</span>
                                </app-button>
                                <app-button :onClick="test">
                                    <span class="text-base">A</span>
                                    <span class="ml-8 text-sm">Vietnam</span>
                                </app-button>
                            </div>
                        </div>
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
export default {
    name: 'App',
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
