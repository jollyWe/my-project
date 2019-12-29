import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./login";
import "./mock";
//引入组件库
import ElementUI from "element-ui";
//引入样式
import "element-ui/lib/theme-chalk/index.css";
import "./styles/index.scss";
import "font-awesome/scss/font-awesome.scss";

//使用ElementUI
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
