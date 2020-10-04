import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
  plugins: [createPersistedState()],
  
  state : {
    currentTheme : 'dark-theme',
  },

  mutations : {
    //Updates the theme to the passed theme name
    setTheme(state,themeName){
      state.currentTheme = themeName;
    }
  },

  actions : {
    toggleTheme({state,commit}){
      // If not empty
        if(state.currentTheme === 'light-theme'){
          //Switch to dark-theme
          commit("setTheme","dark-theme");
        } else {
          //Else switch to light-theme 
          commit("setTheme","light-theme");
        }
    }
  },

  modules: {
  }
})

export default store
