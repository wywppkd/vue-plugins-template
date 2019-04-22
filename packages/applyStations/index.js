// 导入组件，组件必须声明 name
import applyStations from './src/applyStations.vue'

// 为组件提供 install 安装方法，供按需引入
applyStations.install = function (Vue) {
  Vue.component(applyStations.name, applyStations)
}

// 默认导出组件
export default applyStations
