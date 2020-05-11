# dbcreator

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### 1、安装相关插件

yarn add webpack-cli@^3.2.3 add-asset-html-webpack-plugin@^3.1.3 clean-webpack-plugin@^1.0.1 --dev
### 2、编写配置文件

在项目根目录下新建
webpack.dll.conf.js
，输入以下内容。

const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')

// dll文件存放的目录
const dllPath = 'public/vendor'

module.exports = {
 entry: {
  // 需要提取的库文件
  vendor: ['vue', 'vue-router', 'vuex', 'axios', 'element-ui']
 },
 output: {
  path: path.join(__dirname, dllPath),
  filename: '[name].dll.js',
  // vendor.dll.js中暴露出的全局变量名
  // 保持与 webpack.DllPlugin 中名称一致
  library: '[name]_[hash]'
 },
 plugins: [
  // 清除之前的dll文件
  new CleanWebpackPlugin(['*.*'], {
   root: path.join(__dirname, dllPath)
  }),
  // 设置环境变量
  new webpack.DefinePlugin({
   'process.env': {
    NODE_ENV: 'production'
   }
  }),
  // manifest.json 描述动态链接库包含了哪些内容
  new webpack.DllPlugin({
   path: path.join(__dirname, dllPath, '[name]-manifest.json'),
   // 保持与 output.library 中名称一致
   name: '[name]_[hash]',
   context: process.cwd()
  })
 ]
}
### 3、生成 dll

在 package.json 中加入如下命令

"scripts": {
  ...
  "dll": "webpack -p --progress --config ./webpack.dll.conf.js"
},
控制台运行

yarn run dll
