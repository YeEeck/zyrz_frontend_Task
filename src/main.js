import Vue from 'vue'
import { Button, Input, Menu } from 'ant-design-vue';
import App from './App.vue'
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.component(Button.name, Button)
Vue.component(Input.name, Input)
Vue.component(Menu.name, Menu)
// Vue.component(Layout.name, Layout)

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
