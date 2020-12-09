const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: ['./src/app.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    filename: 'js/index.js'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
						loader: 'file-loader',
						options: {
							name: 'css/[name].css',
						}
          },
					{ loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "autoprefixer",
                    {
                      overrideBrowserslist:  ['last 2 versions'],
                      cascade: false
                    },
                  ],
                ],
                sourceMap: true
              },
            }
          },
					{ loader: 'sass-loader' }
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: [
          {
						loader: 'file-loader',
						options: {
							name: 'img/[name].[ext]',
						}
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/html/index.html'}),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
};