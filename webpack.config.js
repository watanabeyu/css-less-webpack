const path = require('path')
const webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = [
  /* style settings */
  {
    entry: "./styles.less",
    output: {
      path: path.join(__dirname, 'dist'),
      filename: "styles.css",
      publicPath: '/'
    },
    module: {
      loaders: [
        {
          test: /\.less$/,
          loader: ExtractTextPlugin.extract({
            use: [
              {
                loader: "css-loader",
                options: {
                  minimize: true
                }
              },
              {
                loader: "postcss-loader"
              },
              {
                loader: "less-loader"
              }
            ],
            fallback: 'style-loader'
          })
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('styles.css')
    ]
  }
]