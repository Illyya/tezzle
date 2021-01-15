module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/tezzle/'
    : '/',
    outputDir: 'docs'
}