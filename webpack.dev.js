module.exports = {
  entry: {
    main: './src/index.js',
    example: './src/example/index.js'
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    publicPath: "/assets/",
    watchContentBase: true,
    contentBase: './example',
    compress: true,
    port: 9000,
    inline: true,
  }
};
