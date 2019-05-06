const path = require('path')
const webpack = require('webpack')
const WebpackNotifierPlugin = require('webpack-notifier')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const CleanDistFolder = require('clean-webpack-plugin')
const glob = require('glob')

module.exports = {
  entry: ['./src/js/app.js','./src/scss/app.scss'],

  output: {
    filename: 'js/sqe.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
      // new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: "css/sqe.css",
        //publicPath:  "/dist"
      }),
      new WebpackNotifierPlugin({title:'Compiling..., fool!',
            excludeWarnings: false,
            alwaysNotify:true,
            // contentImage: path.join(__dirname, 'wp-logo.png')
            }),
  ],
  module:
  {
  	rules:
    [
        // js
        {
          test: /\.js$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader",
                options: {
                  presets: ['@babel/preset-env']
                }
          }
        },
        // sass 
        {
               test: /\.(sass|scss)$/,
                exclude: /node_modules/,
                use: [  MiniCssExtractPlugin.loader, 
                  'css-loader',
                  'postcss-loader',
                  {
                    loader:'sass-loader',
                    query: {
                      includePaths: [ path.resolve(__dirname, '~foundation-sites/scss') ]
                    },
                    } 
                  ] 
        },
    		// images
        {
          test: /\.(png|jpe?g|gif)$/,
          use: [
                  {
                    loader: 'file-loader',
                    options: {
                      		outputPath: 'images',
                    	},
                  },
    		      ]
    		},
  	]
  },
};