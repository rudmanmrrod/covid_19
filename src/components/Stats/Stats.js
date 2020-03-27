export default {
	name: 'stats',
	data() {
		return {
			info: {
				cases: 0,
				deaths: 0,
				recovered: 0,
				updated_at: 0
			}
		}
	},
	methods: {
		getStats(){
			this.$store.dispatch('getStats')
			.then(response => {
				this.info = response.data
				this.info.updated_at = new Date(this.info.updated).toLocaleFormat()
			})
		}
	},
	mounted(){
		this.getStats()
	}
}