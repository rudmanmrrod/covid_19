module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? './covid_19/':'/covid_19/',
	indexPath: process.env.NODE_ENV === 'production' ? '../index.html':'index.html',
}