<!-- <p align="center">
  <img width="320" src="https://wpimg.wallstcn.com/ecc53a42-d79b-42e2-8852-5126b810a4c8.svg">
</p>

<p align="center">
  <a href="https://github.com/vuejs/vue">
    <img src="https://img.shields.io/badge/vue-2.5.10-brightgreen.svg" alt="vue">
  </a>
  <a href="https://github.com/ElemeFE/element">
    <img src="https://img.shields.io/badge/element--ui-2.3.0-brightgreen.svg" alt="element-ui">
  </a>
  <a href="https://travis-ci.org/PanJiaChen/vue-element-admin" rel="nofollow">
    <img src="https://travis-ci.org/PanJiaChen/vue-element-admin.svg?branch=master" alt="Build Status">
  </a>
  <a href="https://github.com/PanJiaChen/vue-element-admin/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="license">
  </a>
  <a href="https://github.com/PanJiaChen/vue-element-admin/releases">
    <img src="https://img.shields.io/github/release/PanJiaChen/vue-element-admin.svg" alt="GitHub release">
  </a>
</p> -->

English | [简体中文](./README.zh-CN.md)

## Introduction

`super-tool` This is a useful, handy tool. Based on [Vue.js](https://github.com/vuejs/vue) and use the UI Toolkit -- [element](https://github.com/ElemeFE/element). I believe whatever your needs are, this project will help you.

- [Preview](https://github.com/hukai123/super-tool)

- [Documentation](https://panjiachen.github.io/vue-element-admin-site/#/)

- [Gitter](https://github.com/hukai123/super-tool/discuss)

- [Wiki](https://github.com/hukai123/super-tool/wiki)

**This is a useful, handy tool for referencing in the vue project.**

 - tool: [Vue.js](https://github.com/vuejs/vue)  

**Note: This project uses element-ui@2.3.0+ version, so the minimum compatible vue@2.5.0+**

## Preparation

You need to install [node](http://nodejs.org/) and [git](https://git-scm.com/) locally. The project is based on [ES2015+](http://es6.ruanyifeng.com/)、[vue](https://cn.vuejs.org/index.html)、[vuex](https://vuex.vuejs.org/zh-cn/)、[vue-router](https://router.vuejs.org/zh-cn/) 和 [element-ui](https://github.com/ElemeFE/element). All data requests for this project are simulated using [Mock.js](https://github.com/nuysoft/Mock). It would be helpful if you have pre-existing knowledge on those.

 **This project is not a scaffolding and is more of an integrated solution.**

<!--  <p align="center">
  <img width="900" src="https://wpimg.wallstcn.com/a5894c1b-f6af-456e-82df-1151da0839bf.png">
</p> -->

## Features
```
- parseDate
- parseDatetime
- getMonDate
- getSunDate
- formatJsAdd
- formatRmbNum
- indexOfArray
```

配置参数：  
<table>
    <tr>
        <th>方法</th>
        <th>参数</th>
        <th>说明</th>
    </tr>
    <tr>
        <td>parseDate(argu)</td>
        <td>时间戳/时间对象</td>
        <td>输出格式:  2018-01-01</td>
    </tr>
    <tr>
        <td>parseDatetime(argu)</td>
        <td>时间戳/时间对象</td>
        <td>输出格式:  2018-01-01 12:00:00</td>
    </tr>
    <tr>
        <td>getMonDate(argu)</td>
        <td>时间戳/时间对象</td>
        <td>返回指定日期所在周的周一的日期</td>
    </tr>
    <tr>
        <td>getSunDate(argu)</td>
        <td>时间戳/时间对象</td>
        <td>返回指定日期所在周的周日的日期</td>
    </tr>
    <tr>
        <td>formatJsAdd(a,b)</td>
        <td>浮点型</td>
        <td>修正js浮点型数据相加返回异常</td>
    </tr>
    <tr>
        <td>formatRmbNum(argu)</td>
        <td>数字/数字字符串</td>
        <td>金钱格式化,千分位加',',如: 632,230</td>
    </tr>
    <tr>
        <td>indexOfArray()</td>
        <td>(value,array,name = 'name')</td>
        <td>返回array数组中key值为name(默认为'name')对应的val值==value的索引值</td>
    </tr>
</table>

```目录
routes
    |---index.js
    |---lib
    |     |---array.js
    |     |---date-time.js
    |     |---num.js
```
<!-- ```
    |
    |---list
          |---GET.js
          |---DELETE.js
``` -->

## Getting started

```bash
# install dependency
npm install goodtool --save

# develop
npm run dev
```

<!-- This will automatically open http://localhost:9527. -->

<!-- ## Build
```bash
# build for test environment
npm run build:sit

# build for production environment
npm run build:prod
```

## Advanced
```bash
# --report to build with bundle size analytics
npm run build:prod --report

# --preview to start a server in local to preview
npm run build:prod --preview

# lint code
npm run lint

# auto fix
npm run lint -- --fix
```

Refer to [Documentation](https://panjiachen.github.io/vue-element-admin-site/#/deploy) for more information

## Changelog
Detailed changes for each release are documented in the [release notes](https://github.com/PanJiaChen/vue-element-admin/releases).

## Online Demo
[Preview](http://panjiachen.github.io/vue-element-admin)

## Donate
If you find this project useful, you can buy author a glass of juice :tropical_drink:

![donate](https://wpimg.wallstcn.com/bd273f0d-83a0-4ef2-92e1-9ac8ed3746b9.png)

[Paypal Me](https://www.paypal.me/panfree23)

[Buy me a coffee](https://www.buymeacoffee.com/Pan) -->

## License

<!-- [MIT](https://github.com/PanJiaChen/vue-element-admin/blob/master/LICENSE) -->
MIT

Copyright (c) 2017-present hukai



<!-- * 关于接口文档的信息：
  * url:`/express-dir-route.doc`
  * method:`GET`
  * query:
* 关于测试 -->
