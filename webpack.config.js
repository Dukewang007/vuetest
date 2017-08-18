var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
	devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项
  entry:  path.resolve(__dirname, 'src/index.js'),//已多次提及的唯一入口文件
  output: {
    path: path.resolve(__dirname, 'dist'),//打包后的文件存放的地方
    filename: "bundle.js"//打包后输出文件的文件名
  },
  resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@':  path.resolve(__dirname, 'src')
      }
  },
  module: {
      loaders: [
          {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
              extractCSS: true
            }
          },
          {
              test: /\.css$/,
              use: ExtractTextPlugin.extract({
                  fallback:"style-loader",
                  use:"css-loader"
              })
          },
          {
              test: /\.scss$/,
              use: ExtractTextPlugin.extract({
                  fallback:"style-loader",
                  use:"scss-loader"
                 
              })
          },
          // {
          //     test: /\.(less|sass|scss)$/,
          //     use: ExtractTextPlugin.extract({
          //         fallback:"style-loader",
          //         use:["less-loader","sass-loader","css-loader"]
                 
          //     })
          // },
          {
              test: /\.(png|jpg|gif|woff|woff2|ttf|eot|svg)$/,
              loader: 'url-loader?limite=8192'   // limit 是转换base64的文件大小的阀值8兆
          },
          {
              test: /\.html$/,
              loader: 'html-loader'    // 可以用来加载模板
          }
      ],
     
  },
  plugins: [
      
      new ExtractTextPlugin("styles.css"),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
  ],
  devServer: {
    contentBase: path.resolve(__dirname,"dist"),//本地服务器所加载的页面所在的目录
    port:8050,
    open:true,
    publicPath:"/",
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  } 
}