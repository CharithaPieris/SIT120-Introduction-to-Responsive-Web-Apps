import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import App from './App.vue'
import Home from './components/Home.vue'
import Discovery from './components/Discovery.vue'

library.add(fas, fab);

const routes = [
  { path: '/', component: Home },
  { path: '/discovery', component: Discovery },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App)
  .use(router) // Use Vue Router
  .component('fa', FontAwesomeIcon)
  .mount('#app');
