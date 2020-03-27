module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? './':'/',
	indexPath: process.env.NODE_ENV === 'production' ? '../index.html':'index.html',
}