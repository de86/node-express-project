const webpack = require( 'webpack' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const path = require( 'path' );

module.exports = {
  entry: path.resolve( __dirname, 'src/client/App.tsx' ),
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', 'json' ]
  },
  output: {
    path: path.resolve( __dirname, 'public' ),
    filename: 'bundle.js'
  },
  plugins: [ 
    new HtmlWebpackPlugin({ template: './src/base.html' }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    hot: true,
    contentBase: './build',
    port: 6060
  }
}