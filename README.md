> 当前模板可以直接用于开发新的插件,`packages/`是插件的代码,`examples`是插件使用示例

# 下面介绍当前模板是如何使用vue-cli3搭建的

## 初始化
```
vue create vue-oil-plugins
```
## 修改工程目录
```
.
...
|-- examples      // 原 src 目录，改成 examples 用作示例展示
|-- packages      // 新增 packages 用于编写存放组件
...
. 
```
## 修改vue.config.js
```
module.exports = {
  // 修改 src 为 examples, 这样npm run serve的时候就会编译examples目录下的示例
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  // 扩展 webpack 配置，使 packages 目录加入编译
  chainWebpack: config => {
    config.module
      .rule('js')
      .include
        .add('/packages')
        .end()
      .use('babel')
        .loader('babel-loader')
        .tap(options => {
          // 修改它的选项...
          return options
        })
  }
}
```
## 编写组件
1. 导出当前组件
```
# /packages/color-picker/index.js
// 导入组件，组件必须声明 name
import colorPicker from './src/color-picker.vue'

// 为组件提供 install 安装方法，供按需引入
colorPicker.install = function (Vue) {
  Vue.component(colorPicker.name, colorPicker)
}

// 默认导出组件
export default colorPicker
```
2. 导出所有组件
```
// 导入颜色选择器组件
import colorPicker from './color-picker'

// 存储组件列表
const components = [
  colorPicker
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component))
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  colorPicker
}
```

## 发布到npm
1. 修改package.json,增加一条编译为库的命令
```
"scripts": {
	// ...
	"lib": "vue-cli-service build --target lib --name vcolorpicker --dest lib packages/index.js"
}
```
--target: 构建目标，默认为应用模式。这里修改为 lib 启用库模式。
--dest : 输出目录，默认 dist。这里我们改成 lib
[entry]: 最后一个参数为入口文件，默认为 src/App.vue。这里我们指定编译 packages/ 组件库目录。

2. 执行`$ npm run lib`

3. 配置package.json发布到npm的字段
```
{
  "name": "vcolorpicker",
  "version": "0.1.5",
  "description": "基于 Vue 的颜色选择器",
  "main": "lib/vcolorpicker.umd.min.js", //入口文件，该字段需指向我们最终编译后的包文件
  "keyword": "vcolorpicker colorpicker color-picker",
  "private": false //是否私有，需要修改为 false 才能发布到 npm
}
```
4. 添加`.npmignore`,设置忽略发布文件
> 只有编译后的lib目录,package.json,README.md才是需要被发布的
```
# 忽略目录
examples/
packages/
public/

# 忽略指定文件
vue.config.js
babel.config.js
*.map
```

5. 登录npm(注意仓库地址)
`$ npm login`
`$ npm publish`

## 使用发布的组件库
`$ npm install vcolorpicker -S`
```
// 在 main.js 引入并注册
import vcolorpicker from 'vcolorpicker'
Vue.use(vcolorpicker)

// 在组件中使用
<template>
  <colorPicker v-model="color" />
</template>
<script>
  export default {
    data () {
      return {
        color: '#ff0000'
      }
    }
  }
</script>
```