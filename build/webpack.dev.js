const path = require("path");
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, '../src/assets'),
        hot: true,
        historyApiFallback: true,
        proxy: {
          '/api': 'http://10.6.172.179:9091', // 设置你调用的接口域名和端口号
          ws:true,
          changeOrigin:true,
          pathRewrite:{
            '^/api':'/api'
          }
        }
      }
});