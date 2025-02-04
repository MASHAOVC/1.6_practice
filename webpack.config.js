const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/js/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  devtool: 'source-map',

  module: {
    rules: [
      // Транспилируем js с babel
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },

      // Компилируем SCSS в CSS
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // Extract css to separate file
          'css-loader', // translates CSS into CommonJS
          'postcss-loader', // parse CSS and add vendor prefixes to CSS rules
          'sass-loader' // compiles Sass to CSS, using Node Sass by default
        ]
      },

      // Подключаем шрифты из CSS
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        type: 'asset/resource',
        dependency: { not: ['url'] }
      },

      // Подключаем картинки из CSS
      {
        test: /\.(svg|png|jpg|jpeg|webp)$/,
        type: 'asset/resource',
        dependency: { not: ['url'] }
      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  plugins: [
    // Подключаем файл html, стили и скрипты встроятся автоматически
    new HtmlWebpackPlugin({
      title: 'Software services',
      template: './src/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false
      }
    }),
    // Кладем стили в отдельный файлик
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
    // Копируем картинки
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, './src/img'),
          to: path.resolve(__dirname, 'dist'),
          noErrorOnMissing: true
        }
      ]
    })
  ]
}
