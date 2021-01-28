# babel-preset-h5

h5 应用的通用 babel 预设

[![npm package](https://img.shields.io/npm/v/babel-preset-h5.svg?style=flat-square)](https://www.npmjs.com/package/babel-preset-h5)
[![GitHub stars](https://img.shields.io/github/stars/noshower/babel-preset-h5.svg)](https://github.com/noshower/babel-preset-h5/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/noshower/babel-preset-h5.svg)](https://github.com/noshower/babel-preset-h5/network/members)
[![NPM downloads](https://img.shields.io/npm/dm/babel-preset-h5.svg?style=flat-square)](https://www.npmjs.com/package/babel-preset-h5)
[![GitHub issues](https://img.shields.io/github/issues/noshower/babel-preset-h5.svg)](https://github.com/noshower/babel-preset-h5/issues)

# 配置选项

| 选项          | 含义                   | 默认值                                  |
| ------------- | ---------------------- | --------------------------------------- |
| targets       | 代码运行需要支持的环境 | ['last 2 versions', '> 1%', 'ie >= 11'] |
| useTypeScript | 是否使用 TypeScript    | true                                    |

# 特点

- 支持按需引入 polyfill
- 不会污染全局变量
- 默认支持 React, 同时支持 react17
- 默认支持 TypeScript

# 支持的浏览器

- 默认支持 IE11 及以上的浏览器

# 支持的语言特性

支持最新的 JavaScript 标准。除了 ES6 语法功能外，它还支持：

- ES2021（例如：Promise.any）
- ES2020（例如：Promise.allSettled、可选链操作符）
- ES2019（例如：Array.prototype.flat）
- ES2018（例如：Rest 参数和扩展运算符）
- ES2017（例如：Object.entries）
- ES2016（例如：Array.prototype.includes）

# 注意

不支持 Proxy, 不支持 BigInt, 不支持装饰器
