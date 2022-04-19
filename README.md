# webpack-demo

## 插件

- webpack-dev-server：本地起服务器，用于开发
- html-webpack-plugin：帮助生成 html 文件,自动插入 js 文件。可以使用 template 属性添加 html 模版
- mini-css-extract-plugin：提取 js 文件中引入的 css 代码到一个 css 文件中(css 文件放在 dist 文件夹中)，并且支持 CSS 和 SourceMaps 的按需加载。**最重要的是，它以 link 的方式插入到 html 中,所以可以替代 style-loader,但是该插件不支持热重载,需要手动刷新**。
- babel-loader、@babel/core-@babel、preset-env：用于编译一些比较新的 js 语法，适配所有浏览器，需要新建一个 babel.config.json 来配置 babel

## 工具

- devtool:
  1. 'source-map'：输出编译前的 js/css 代码，便于调试，找出问题代码。

## 模块

- module/asset：用于配置静态资源。

## hash 值

- 定义：每次打包文件更新生成的值
- 作用：利用 hash 值来命名 output 的 js 文件，可以避免浏览器缓存机制问题，发布线上可以实现最新的代码。

## 探索

- webpack-clean：自动清除 build 出来的文件

- copy-webpack：将 webpack 编译出来的文件放在新的文件夹下

- post-css：是一个用 JavaScript 工具和插件转换 CSS 代码的工具。

- common-config-webpack-plugin：通用配置 webpack 插件 [链接](https://github.com/merkle-open/webpack-config-plugins/blob/master/README.md#zero-config-webpack-dev-server-example)
