import { country_list } from '../../utils/country_list.js'

export default{
	data(){
		return {
			search_list:'',
			search:'',
			country_list: country_list,
			info: {},
			error: '',
			showError: false
		}
	},
	methods: {
		searchForCountry(){
			this.showError = false
			if(this.search!='' || this.search_list!=''){
				let toSearch = null
				if(this.search!=''){
					toSearch = this.search
				}
				else if(this.search_list!=''){
					toSearch = this.search_list
				}
				this.$store.dispatch('getContries',toSearch)
					.then( response => {
						if(response.status==200){
							this.info = response.data
						}
						else{
							this.showError = true
							this.error = response.data.message
						}
					})
			}
		},
		clear(){
			this.search_list = ''
			this.search = ''
		}
	}
}