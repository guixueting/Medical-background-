/*
 * @Author: GUI XUE TING
 * @LastEditors: GUI XUE TING
 */
const webpack = require('webpack');
const {
  merge
} = require('webpack-merge');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const {
  join,
  resolve
} = require('path');
const argv = require('yargs-parser')(process.argv.slice(2));
const _mode = argv.mode || 'development';
const _modeflag = _mode === 'production' ? true : false;
const _mergeConfig = require(`./config/webpack.development.js`);
const env = argv.nodeEnv;

//基本配置
const webpackBaseConfig = {
  //入口
  entry: {
    app: './src/app.tsx'
  },
  //出口设置
  output: {
    path: join(__dirname, './dist'),
    publicPath: '/'
  },
  //Module
  module: {
    rules: [{
        test: /\.(js|jsx|ts|tsx)$/,
        include: [resolve('src')],
        loader: 'babel-loader'
      },
      {
        test: /\.less$/,
        use: [{
            loader: 'style-loader'
          },
          {
            loader: 'css-loader' // translates CSS into CommonJS
          },
          {
            loader: 'less-loader', // compiles Less to CSS,
            options: {
              modifyVars: {
                hack: `true; @import "${resolve('./src/styles/theme.less')}";`
              },
              javascriptEnabled: true
            }
          }
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
          'resolve-url-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|woff|woff2|ttf|svg|otf|ico|pdf)$/,
        type: 'asset/resource',
        generator: {
          filename: _modeflag ? 'images/[name].[hash:5].[ext]' : 'images/[name].[ext]'
        },
        parser: {
          dataUrlCondition: {
            maxSize: 1 * 1024
          }
        }
      }
    ]
  },
  externals: {

  },
  optimization: {
    concatenateModules: true, //安全合并单一模块
    flagIncludedChunks: true, //告知 webpack 确定和标记出作为其他 chunk 子集的那些 chunk
    usedExports: true,
    minimize: _modeflag ? true : false,
    runtimeChunk: {
      name: 'runtime'
    },
    mergeDuplicateChunks: true,
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        commons: {
          chunks: 'initial',
          minChunks: 2,
          name: 'commons',
          maxInitialRequests: 5,
          minSize: 0
        },
        reactBase: {
          test: module => {
            return /react|redux|prop-types/.test(module.context);
          },
          chunks: 'initial',
          name: 'reactBase',
          priority: 10
        },
        antdBase: {
          test: module => {
            return /antd/.test(module.context);
          },
          chunks: 'initial',
          name: 'antdBase',
          priority: 9
        }
      }
    }
  },
  //别名
  resolve: {
    alias: {
      '@/assets': resolve(__dirname, 'src/assets'),
      '@/components': resolve(__dirname, 'src/components'),
      '@/pages': resolve(__dirname, 'src/pages'),
      '@/utils': resolve(__dirname, 'src/utils'),
      '@/styles': resolve(__dirname, 'src/styles'),
      '@/config': resolve(__dirname, 'src/config'),
    },
    modules: ['node_modules', resolve('src')],
    extensions: ['.js', '.ts', '.tsx', 'jsx']
  },
  //plugin
  plugins: [
    new webpack.DefinePlugin({
      'process.env.FIND_API': ''
    }),
    new ProgressBarPlugin()
  ],
  watchOptions: {
    ignored: /dist/
  }
};

module.exports = merge(_mergeConfig, webpackBaseConfig);