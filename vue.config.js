module.exports = {
  lintOnSave: false,

  chainWebpack: (webpackChainConfig) => {
    /* eslint-disable indent */

    webpackChainConfig.module.rule('images')
      .uses.clear()
      .end()
      .use('srcset')
      .loader('@flexis/srcset-loader')
        .options({
          name: 'static/img/[name].[hash:8].[ext]',
          scalingUp: false,
          skipOptimization: process.env.NODE_ENV === 'development',
          rules: [
            {
              match: '**/*.jpg',
              width: [1, 0.5],
              format: ['webp', 'jpg'],
              postfix(outWidth, width, format) {
                return `${format}_${width * 2}x`;
              },
            },
            {
              match: '**/*.png',
              width: [1, 0.5],
              format: ['webp', 'png'],
              postfix(outWidth, width, format) {
                return `${format}_${width * 2}x`;
              },
            },
          ],
        });
  },
};
