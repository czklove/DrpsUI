/*
 * @Description: 
 * @Version: 2.0
 * @Autor: czklove
 * @Date: 2019-11-15 15:04:37
 * @LastEditors: czklove
 * @LastEditTime: 2019-11-15 15:04:50
 */
module.exports = {
  module: {
    rules: [
      {
        test: /\.md$/,
        loader: 'vue-markdown-loader'
      }
    ]
  }
}