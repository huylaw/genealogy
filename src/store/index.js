import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    layout: 'app',
    beforePage: null,
    users: null
  },
  getters: {
    getUserInfor(){
      return JSON.parse(localStorage.userData);
    }
  },
  mutations: {
    setBeforePage(state, payload){
      state.beforePage = payload;
    },
    setLayout(state, payload){
      state.layout = payload;
    },
    //login, set user
    setUserInfo(users){
      localStorage.userData = JSON.stringify(users);
      localStorage.token = users.accessToken;
    },
  },
  actions: {
    //login
    async login({commit}, body){ 
      const data = await axios.post('http://localhost:3000/login', body);
      commit('setUserInfo', data.data.accessToken);
      //console.log(data.data.accessToken);
    },
  },
  modules: {
  }
})
