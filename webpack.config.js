const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
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
          loader: "sass-loader",
          options: { sourceMap: true }
        }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
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
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.pug",
    }),
    // We need to set our desired filename for other html files though.
    new HtmlWebpackPlugin({
      filename: 'signin-page.html',
      template: './src/components/signin-page/signin-page.pug'
    }),
  ]
};