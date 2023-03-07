// webpack  工程化的配置文件
const path = require('path')  // 引入path  node   内置路径模块
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
// console.log(path.resolve(__dirname,'./src/main.js'))
module.exports = {// commonjs  模块化输出
    entry: path.resolve(__dirname,'./src/main.js'),
    // 偷天换日
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'js/[name].js'
    },
    module: {
        rules:[
            {
                test: /\.vue$/,
                use: [
                    'vue-loader'
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'./index.html'),
            filename: 'index.html',
            title:'手搭 Vue 开发环境'
        }),
        new VueLoaderPlugin()
    ],
    devServer: {    
        port :8888
        
    }
    // App.vue  .js   
   
}