const path = require('path');
const threadLoader = {
  loader: 'thread-loader',
  options: {
    workers: require('os').cpus().length - 1,
  },
};

const babelLoader = {
  loader: 'babel-loader',
  options: {
    cacheDirectory: true,
  }
};

module.exports = {
  entry: {
    index: './src/index.ts',
    test: './test/test.ts',
    generator: './src/node/Generator.ts'
  },
  output: {
    path: require("path").resolve("./dst/"),
    filename: '[name].js',
    devtoolModuleFilenameTemplate: '[absolute-resource-path]'
  },
  target: "node",
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
  module: {
    rules: [{
      test: /\.ts(x?)$/,
      exclude: /node_modules/,
      use: [
        { loader: 'cache-loader' },
        threadLoader,
        babelLoader,
        {
          loader: 'ts-loader',
          options: { happyPackMode: true }
        }
      ]
    }
    ]
  },
  devtool: 'inline-source-map'
}
