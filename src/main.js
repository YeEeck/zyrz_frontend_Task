import Vue from 'vue'
import { Button, Input, message, Icon } from 'ant-design-vue';
import App from './App.vue'
import router from './router'

Vue.component(Button.name, Button)
Vue.component(Input.name, Input)
Vue.component(Icon.name, Icon)
// Vue.component(Menu.name, Menu)
// Vue.component(Layout.name, Layout)

Vue.prototype.$message = message;

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
