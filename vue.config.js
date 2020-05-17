const path = require('path')

const resolve = dir => path.join(__dirname, dir)

const BASE_URL = process.env.MODE_ENV = 'production' ? '/iview-admin' : '/'

module.exports = {
    lintOnSave: false,
    // baseUrl: BASE_URL,
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
    },
    //打包时不生成map文件，提交速度、效率
    productionSourceMap: false,
    //跨域proxy解决。没有匹配到静态文件的请求都到这里，实行跨域请求
    // devSever: {
    //     proxy: 'http://localhost:4000'
    // }
}