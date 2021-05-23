import Vue from 'vue'
import { Button, Input, message, Icon, Table, Drawer, Divider, Modal } from 'ant-design-vue';
import App from './App.vue'
import router from './router'

Vue.component(Button.name, Button)
Vue.component(Input.name, Input)
Vue.component(Icon.name, Icon)
Vue.component(Table.name, Table)
Vue.component(Drawer.name, Drawer)
Vue.component(Divider.name, Divider)
Vue.component(Modal.name, Modal);
// Vue.component(Menu.name, Menu)
// Vue.component(Layout.name, Layout)
Vue.use(Modal);

Vue.prototype.$message = message;
Vue.prototype.$confirm = Modal.confirm;


Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
