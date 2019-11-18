/*
 * @Description:
 * @Version: 2.0
 * @Autor: czklove
 * @Date: 2019-11-15 15:09:58
 * @LastEditors: czklove
 * @LastEditTime: 2019-11-15 15:10:44
 */
module.exports = {
  chainWebpack: config => {
    config.module.rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true
      })
  }
}