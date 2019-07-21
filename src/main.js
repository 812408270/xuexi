// 导入vue
import Vue from 'vue'
// 导入路由
import VueRouter from 'vue-router'

Vue.use(VueRouter)
    //导入vue-resource
import VueResource from 'vue-resource'
//安装 vue-resource
Vue.use(VueResource)
    //导入vue-preview
import VuePreview from 'vue-preview'
// 安装 vue-preview
Vue.use(VuePreview)
    //导入格式化事件的插件
import moment from 'moment'
//定义全局的过滤器
Vue.filter('dataFormat', function(dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern)
})


//设置请求的跟路径
Vue.http.options.root = 'http://www.liulongbin.top:3005';
// 导入MUI的样式
import './lib/mui-master/dist/css/mui.css'
import './lib/mui-master/examples/hello-mui/css/icons-extra.css'

// 按需导入Mint-UI中的组件
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI)
// import { Header, Swipe, SwipeItem, Button, Lazyload } from 'mint-ui'
// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// Vue.use(Lazyload);
import MintUi from 'mint-ui'
Vue.use(MintUi)
import 'mint-ui/lib/style.css'

// 导入自己的 router.js 路由模块
import router from './router.js'

// 导入App根组件
import app from './App.vue'

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router //挂在路由对象
})