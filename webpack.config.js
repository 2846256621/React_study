/**向外暴露一个打包的配置对象  module.exports导出
 * webpack是基于node构建的，支持node所有的node用法
 * 在webpack 4.x 提出约定大于默认，减少配置文件的体积
 *   默认 打包的入口文件是  src/App.js
 *       打包的输出文件是  dist/main.js
 *
 *
 * 不支持 export default 导出，import导入，这是es6语法
 *
 * webpack默认只能打包 .js后缀类型的文件，像 .png .jpg spouse需要配置第三方的loader
 * */
const path = require('path');

const HtmlWebPackPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlWebPackPlugin({
   template:path.join(__dirname,'./src/index.html'),
   filename:'index.html'
});
module.exports ={
    'mode':'development', //开发模式  或 production
    //在webpack 4.x 不需要配置 入口文件路径  默认入口 App.js

    //配置默认的加载页面
    plugins: [
        htmlPlugin

    ],
    module: { //第三方规则
        rules: [
            {test:/\.html$/,use:'html-loader'},
            {test:/\.(js|jsx)$/,use:'babel-loader',exclude:/node_modules/},//不能忘记
            {test:/\.css$/,use:['style-loader','css-loader?modules'],exclude:/node_modules/}, //css-loader加参数，modules表示为普通的样式表启用模块化
            {test:/\.(ttf|woff|woff2|eot|svg)$/,use:'url-loader'}, //字体文件
            {test:/\.(jpg|pig|gif|svg)$/,use:'file-loader'}
        ]
    },
    resolve:{
        extensions:['.js','.jsx','.json'], //表示这几个文件的后缀名 可以不写
        alias:{
            '@':path.join(__dirname,'./src') //这样表示 项目根目录的src这层路径
        }
    }
};