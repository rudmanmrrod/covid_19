module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? '../dist/':'/dist/',
	indexPath: process.env.NODE_ENV === 'production' ? '../index.html':'index.html',
}