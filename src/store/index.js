import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
	},
	getters: {
		statsUrl(){
			return 'https://corona.lmao.ninja/all'
		}
	},
	mutations: {
	},
	actions: {
		getStats({ getters }){
			return window.axios
			.get(getters.statsUrl)
			.then((response) => {
				return response
			}).catch((error)=>{
				return error.response;
			})
		}
	},
	modules: {
	}
})
