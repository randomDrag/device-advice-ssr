const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  plugins: [new MiniCssExtractPlugin({ linkType: 'text/css',})],
    // Tell webpack to run babel on every file it runs through
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
        {
          test: /\.js?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          options: {
            presets: [
                '@babel/preset-react',
             
                
              ['@babel/env', { targets: { browsers: ['last 2 versions'] } }]
            ]
          }
        }
      ]
    }
  };