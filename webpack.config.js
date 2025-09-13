const path = require('path');

module.exports = {
  entry: './src/index.ts',
  mode: 'production',
  output: {
    filename: 'alarm-clock-card.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    library: {
      type: 'module',
    },
  },
  experiments: {
    outputModule: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  optimization: {
    minimize: true,
  },
  // Mark lit as external - Home Assistant provides it
  externalsType: 'module',
  externals: {
    'lit': 'lit',
    'lit/decorators.js': 'lit/decorators.js',
    'lit/directives/class-map.js': 'lit/directives/class-map.js',
    'lit/directives/style-map.js': 'lit/directives/style-map.js'
  },
};
