# vue-multi-build

> vue2官方cli多模块项目构建框架，解决前端团队一次开发多个小项目或者多模块的开发构建难题.
<br> 本地开发模块只需要使用 npm run dev moduleName 就可以了.
<br> 构建模块只需要使用 npm run build moduleName 就可以了.
<br> team leader 构建整个项目使用(亦可集成到自动构建框架上自动构建)  npm run build.

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
