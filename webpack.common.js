const path = require('path');
// 创键html的插件，并自动导入bundle.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 清理dist目录
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports = env => {
  console.log(env.NODE_ENV);
  console.log(env.production);

  return {
    mode: 'production',
    entry: {
      appEntry: './src/index.js',
      printEntry: './src/print.js'
    },
    plugins: [
      new CleanWebpackPlugin({
        cleanStaleWebpackAssets: false
      }),
      new HtmlWebpackPlugin({
        title: '管理输出呀！！'
      })
    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
  }
};
