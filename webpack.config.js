module.exports = {
  entry: './client/index.js',

  output: {
      path: 'client',
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
    ]
  }
}