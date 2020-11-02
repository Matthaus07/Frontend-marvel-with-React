const { DefinePlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const common = require('./webpack.common')
const {merge} = require('webpack-merge')

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
     {
      test: /\.ts(x?)$/,
      loader: 'ts-loader',
      exclude: /node_modules/
     }, 

     {
      test: /\.scss$/,
      use: [
      {
      loader: MiniCssExtractPlugin.loader
      }, 
     
      {
        loader: 'css-loader',
        options: {
          modules: true
        }
      },
      
      {
        loader: 'sass-loader'
      },
    ]
    }]
  },
  externals: {
    react: 'React',
    axios: 'axios',
    'react-dom': 'ReactDOM',
    'react-router-dom': 'ReactRouterDOM'
  },
    plugins: [ new DefinePlugin({
      'process.env.API_URL': JSON.stringify('http://gateway.marvel.com/v1/public')
    }),
    new MiniCssExtractPlugin({
      filename: 'main-bundle-[hash].css'
    }),
    new HtmlWebpackPlugin({
      template: './template.prod.html'
    })]
})