const {
  join,
  resolve
} = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');

module.exports = {
  mode: 'development',
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename]
    }
  },
  devtool: 'inline-cheap-source-map',
  output: {
    filename: 'scripts/[name].bundule.js'
  },
  devServer: {
    historyApiFallback: true,
    compress: true,
    static: join(__dirname, '../dist'),
    port: 9003,
    proxy: {
      '/api': 'http://localhost:9003'
    },
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '🎹面试',
      filename: 'index.html',
      template: resolve(__dirname, '../public/index.html'),
      favicon: resolve(__dirname, '../public/favicon.ico')
    }),

    new webpack.HotModuleReplacementPlugin(),
    new WebpackBuildNotifierPlugin({
      title: '🎹Find—测评资源管理系统',
      suppressSuccess: true
    }),
    new FriendlyErrorsPlugin({
      compilationSuccessInfo: {
        messages: ['You application is running here http://localhost:9003'],
        notes: ['开发环境的Mock数据请务必与服务器保持一致']
      },
      clearConsole: true,
      onErrors: (severity, errors) => {
        new WebpackBuildNotifierPlugin({
          title: 'Find—测评资源管理系统',
          suppressSuccess: true
        });
      }
    })
  ]
};