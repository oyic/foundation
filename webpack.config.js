const path = require('path')
const webpack = require('webpack')
const WebpackNotifierPlugin = require('webpack-notifier')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const CleanDistFolder = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');
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
        filename: "sqe-style.css",
        publicPath:  "/dist"
      }),
      new CopyPlugin([
      { from: 'images/*.*', to: './','context':"src"},
    ]),
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
                        {loader: 'css-loader',
                          // options:{url:false}
                        },

                        'postcss-loader',

                  {
                    loader:'sass-loader',
                    query: {
                      includePaths: [ path.resolve(__dirname, '~foundation-sites') ]
                    },
                    } 
                  ] 
        },
    		// images
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          use: [
              {
                loader: 'file-loader',
                 options: {
                    // limit: 8192,
                    name: 'images/[name].[ext]'
                  }
              },
              {

                loader:'file-loader',
                options: {
                name: 'images/[name].[ext]',
               }
              }
               ,
              // {
              //   loader: 'image-webpack-loader',
              //   options:
              //   {
              //      mozjpeg: {
              //       progressive: true,
              //       quality: 65
              //     },
              //     optipng: {
              //       enabled: false,
              //     },
              //     pngquant: {
              //       quality: '65-90',
              //       speed: 4
              //     },
              //     gifsicle: {
              //       interlaced: false,
              //     },
              //     webp: {
              //       quality: 75
              //     }
              //   }
              // }
          ]
        },
        {
             test: /\.(ttf|eot|svg|woff2|woff)$/,
              loader: 'file-loader',
                options: {
                name: 'fonts/[name].[ext]',
           
          }
      },
      ]

  }
};