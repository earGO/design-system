const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'production',
  entry: './lib/index.js',
  target: "web",
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              // '@babel/plugin-proposal-class-properties',
              // '@babel/plugin-proposal-export-default-from',
              // '@babel/plugin-transform-async-to-generator',
              // '@babel/plugin-transform-runtime',
              // 'babel-plugin-styled-components',
              // 'inline-react-svg',
              [
                'import',
                {libraryName: 'antd', libraryDirectory: 'es', style: 'css'}
              ]
            ],
            // presets: [
            //   [
            //     '@babel/preset-env',
            //     {
            //       useBuiltIns: 'entry',
            //       corejs: 3
            //     }
            //   ],
            //   '@babel/preset-react'
            // ]
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ]
  },
  externals: [nodeExternals()],
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.json'],
    symlinks: true
  }
}
