const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// importAll(require.context('./', true, /\.scss$/));
var webpack = require('webpack');
module.exports = {
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: ["pug-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader,
        {
          loader: "css-loader",
          options: { sourceMap: true }
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true,
            config: {
              path: 'postcss.config.js'
            }
          }
        },
        {
          loader: "sass-loader",
          options: { sourceMap: true }
        },
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)?$/,
        exclude: /node_modules/,
        loader: 'url-loader',
        options: {
            name: '../[name].[ext]',
            publicPath: './fonts/'
          }
      },
      { test: /\.png$/, loader: "url-loader?mimetype=image/png" }
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      "$":"jquery",
      "jQuery":"jquery",
      "window.jQuery":"jquery"
    }),
    new MiniCssExtractPlugin({
      filename: "main.css",
      // chunkFilename: "[id].css"
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: "./src/index.pug",
    }),
    new HtmlWebpackPlugin({
      filename: 'signup-page.html',
      template: './src/components/signup-page/signup-page.pug'
    }),
    // We need to set our desired filename for other html files though.
    new HtmlWebpackPlugin({
      filename: 'signin-page.html',
      template: './src/components/signin-page/signin-page.pug'
    }),
    new HtmlWebpackPlugin({
      filename: 'info-page.html',
      template: './src/components/info-page/info-page.pug'
    }),
    new HtmlWebpackPlugin({
      filename: 'filter-page.html',
      template: './src/components/filter-page/filter-page.pug'
    }),
    new webpack.ProvidePlugin({
      $:"jquery",
      jQuery:"jquery",
      jQuery:"jquery"
    })
  ]
};