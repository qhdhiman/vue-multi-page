# vue-multi-build

> vue2官方cli多模块项目构建框架，解决前端团队一次开发多个小项目或者多模块的开发构建难题.
<br> 本地开发模块只需要使用 npm run dev moduleName 就可以了.
<br> 构建模块只需要使用 npm run build moduleName 就可以了.
<br> team leader 构建整个项目使用(亦可集成到自动构建框架上自动构建)  npm run build.

## 目录结构
```
文件夹 PATH 列表.
│  .babelrc
│  .editorconfig
│  .eslintignore
│  .eslintrc.js
│  .gitignore
│  .postcssrc.js
│  package.json // 项目配置文件
│  README.md // 说明文件
│
├─build // webpack 构建目录
│      build.js
│      check-versions.js
│      dev-client.js
│      dev-server.js
│      utils.js
│      vue-loader.conf.js
│      webpack.base.conf.js
│      webpack.dev.conf.js
│      webpack.prod.conf.js
│      webpack.test.conf.js
│
├─config // webpack配置目录
│      dev.env.js
│      index.js
│      prod.env.js
│      test.env.js
│
├─src  // 源码目录
│  ├─assets // 资源目录
│  │      logo.png
│  │
│  ├─components // 公用组件库
│  │      Hello.vue
│  │
│  └─modules // 多模块目录
│      ├─m1 // 模块1 （结构类似vue官方开发目录结构）
│      │  │  App.vue // 根路由页面
│      │  │  index.html // 启动文件
│      │  │  main.js // 根配置文件
│      │  │
│      │  ├─assets // 资源目录
│      │  │      logo.png
│      │  │
│      │  ├─components // 组件目录
│      │  │      Hello.vue
│      │  │
│      │  └─router // 路由目录
│      │          index.js
│      │
│      └─m2  // 模块1 （结构类似vue官方开发目录结构）
│      │  │  App.vue // 根路由页面
│      │  │  index.html // 启动文件
│      │  │  main.js // 根配置文件
│      │  │
│      │  ├─assets // 资源目录
│      │  │      logo.png
│      │  │
│      │  ├─components // 组件目录
│      │  │      Hello.vue
│      │  │
│      │  └─router // 路由目录
│      │          index.js
│
├─static // 静态资源目录
│      .gitkeep
│
└─test // 测试目录
    ├─e2e
    │  │  nightwatch.conf.js
    │  │  runner.js
    │  │
    │  ├─custom-assertions
    │  │      elementCount.js
    │  │
    │  └─specs
    │          test.js
    │
    └─unit
        │  .eslintrc
        │  index.js
        │  karma.conf.js
        │
        └─specs
                Hello.spec.js


```

## 使用

``` bash
# 安装依赖
npm install

# 本地开发
npm run dev moduleName

# 构建某个模块
npm run build [moduleName]

# 构建整个项目
npm run build
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
