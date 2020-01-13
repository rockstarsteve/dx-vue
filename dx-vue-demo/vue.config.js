'use strict'


const path = require('path')
function resolve (dir) {
    return path.join(__dirname, './', dir)
}

module.exports = {

    // assetsDir: './static',
    devServer: {
        port: 8086,
        proxy: {
            '/api': {
                target: 'https://face-test.su.bcebos.com/077cad9151ded03176c714e874f45ded-2b15898e28d07942026bb9f4a188593f0b262038', //对应自己的接口
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': '^/'
                }
            }
        }

    },



    chainWebpack: config => {
        // svg loader
        const svgRule = config.module.rule('svg') // 找到svg-loader
        svgRule.uses.clear() // 清除已有的loader, 如果不这样做会添加在此loader之后
        svgRule.exclude.add(/node_modules/) // 正则匹配排除node_modules目录
        svgRule // 添加svg新的loader处理
            .test(/\.svg$/)
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })

        // 修改images loader 添加svg处理
        // const imagesRule = config.module.rule('images')
        // imagesRule.exclude.add(resolve('src/components/svg/components/icons'))
        // config.module
        //     .rule('images')
        //     .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
    },

}
