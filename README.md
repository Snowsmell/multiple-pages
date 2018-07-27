# 多页模板


## 项目目录

公共资源：public

1. 正常模式
 - 源码目录：web/
 - 资源目录：assets/


2. vue模式
 - 源码目录：src/
 - 资源目录：static/


### 目录明细

 ```
├─Hwariot
│  ├─build                // gulp配置和webpack配置文件
│  ├─config               // 同上
│  ├─dist                 // 静态和vue单页打包后都生成于此
│  ├─
│  ├─
│  ├─
│  ├─docs
│  ├─public               // 公共资源 (不用处理)
│  │  ├─lib               // 公共库
│  │  ├─vendor            //
│  │  ├─font              // 字体
│  ├─src                  // vue单页应用开发目录
│  │  ├─pages             // 单页应用入口文件夹所在
│  ├─mock
│  ├─web                  // gulp+jq,传统模式开发的静态页面
│  │  ├─html
│  │  │  ├─index.html       // 首页
│  │  │  ├─events/          // 活动
│  │  │  ├─products/        // 产品
│  │  │  ├─news/            // 新闻
│  │  │  ├─about/           // 关于
│  │  │  ├─login/           // 账户
│  │  │  │  ├─login         // 用户登录
│  │  │  │  ├─register      // 用户注册
│  │  │  │  ├─find          // 找回密码
│  │  │  ├─web/             // 静态页面(比如协议之类)
│  │  ├─images
│  │  ├─styles
│  │  ├─scripts
│  │  │  ├─script.map.js
│  │  ├
│  ├─package.js
│  ├─README.md
└─
 ```


## Vue Build Setup

``` bash
# install dependencies
npm install


# web
npm run web:dev             // 开发环境
npm run web:build           // 发布 web测试环境
npm run web:build:prod      // 发布 web生产环境


# vue
npm run dev                 // 开发环境
npm run build               // 发布测试环境
npm run build:prod          // 发布生产环境


# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

