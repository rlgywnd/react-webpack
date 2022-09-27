const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development', // 1
  entry: './src/index.js', // 2
  output: { // 3
    path: path.resolve(__dirname, 'docs'),
    filename: '[name].bundle.js' // 4
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    })
  ],
  
  module: {
    rules: [
      { // 1
        test: /\.(js|jsx)$/, // 이런식으로 정규식이 들어가야함
        exclude: /node_modules/, // 제외할 파일!
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test:/\.css$/, //정규식 표현식, 일단 외워놓으세요
        use:['style-loader','css-loader']
      },
      { // 2
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
            },
          },
        ],
      },
    ],
  },
  
};