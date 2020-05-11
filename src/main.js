// import Vue from 'vue'
// import App from './App.vue'

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

//完整引入
import Vue from 'vue';
import Antd from 'ant-design-vue';
import App from './App';
import 'ant-design-vue/dist/antd.css';
import VueRouter from 'vue-router'
import router from "./router"
Vue.config.productionTip = false;

Vue.use(Antd);
Vue.use(VueRouter)
/* eslint-disable no-new */
// new Vue({
//     el: '#app',
//     components: { App },
//     template: '<App/>',
// });
//runtime

new Vue({
    router,
    // store,
    render: h => h(App)
}).$mount("#app")

//#endregion

//#endregion
//#endregion
//#region 局部引入 
// import Vue from 'vue';
// import { Button, message } from 'ant-design-vue';
// import App from './App';

// Vue.config.productionTip = false;

// /* v1.1.2 */
// Vue.component(Button.name, Button);
// Vue.component(Button.Group.name, Button.Group);

// /* v1.1.3+ 自动注册Button下组件，如Button.Group */
// Vue.use(Button);

// Vue.prototype.$message = message;

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>',
// });