const webpack = require('webpack')
const UglifyPlugin = require('uglifyjs-webpack-plugin') // npm install --save--dev uglifyjs-webpack-plugin

// 这个是我们自己新建的webpack配置文件
// 因为vue-cli 3.x把所有的webpack配置都内置了，但是我们还可以通过这种方式进行配置重写
module.exports = {
  // webpack-dev-server 相关配置
  devServer: {
    open: false, // 返回当前平台类型（'darwin', 'freebsd', 'linux', 'sunos' 或者 'win32'）
    host: 'localhost',
    port: 8080,
    https: false,
    proxy: null // 可配置代理
  },
  // webpack配置
  configureWebpack: config => {
    // if (process.env.NODE_ENV === 'production') {
    //   // 为生产环境修改配置...
    //   config.mode = 'production'
    //   // 将每个依赖包打包成单独的js文件
    //   let optimization = {
    //     runtimeChunk: 'single',
    //     splitChunks: {
    //       chunks: 'all',
    //       maxInitialRequests: Infinity,
    //       minSize: 20000,
    //       cacheGroups: {
    //         vendor: {
    //           test: /[\\/]node_modules[\\/]/,
    //           name(module) {
    //             // get the name. E.g. node_modules/packageName/not/this/part.js
    //             // or node_modules/packageName
    //             const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1]
    //             // npm package names are URL-safe, but some servers don't like @ symbols
    //             return `npm.${packageName.replace('@', '')}`
    //           }
    //         }
    //       }
    //     },
    //     minimizer: [
    //       new UglifyPlugin({
    //         uglifyOptions: {
    //           compress: {
    //             drop_console: true, // console
    //             drop_debugger: false,
    //             pure_funcs: ['console.log'] // 移除console
    //           }
    //         }
    //       })
    //     ]
    //   }
    //   Object.assign(config, {
    //     optimization
    //   })
    // } else {
    //   config.mode = 'development'
    // }
  },
  productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
  // css相关配置
  css: {
    extract: true, // 是否使用css分离插件 ExtractTextPlugin
    sourceMap: false, // 开启 CSS source maps?
    loaderOptions: {
      css: {}, // 这里的选项会传递给 css-loader
      postcss: {} // 这里的选项会传递给 postcss-loader
    }, // css预设器配置项
    modules: true // 启用 CSS modules for all css / pre-processor files.
  },
  // 第三方插件配置,
  chainWebpack: config => {
    config.plugin('provide').use(webpack.ProvidePlugin, [
      {
        $: 'jquery',
        jquery: 'jquery',
        'window.jQuery': 'jquery'
      }
    ])
  }
}
