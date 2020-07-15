/**
 * 配置路由相关信息
 * 1.先导入vue实例和vue-router实例
 */
import Vue from 'vue'
import Router from 'vue-router'
// 2. 通过Vue.use(插件)，安装插件
Vue.use(Router)
//3. 创建 router路由对象
const routes = [
    //配置路由和组件之间的对应关系

]
const router = new Router({
    //配置路由和组件之间的应用关系
    routes,
    mode:'history'
})
//4.导出router实例
export default router
