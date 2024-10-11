import '@/assets/styles/main.css';
import '@/assets/js/bootstrap.bundle.min';

import { createApp, markRaw } from 'vue';
import { createPinia } from 'pinia';

import App from '@/App.vue';
import router from '@/router';

window.dev = { router };

import { useTokenInRequest } from '@/middlewares/access.js';


const pinia = createPinia();

pinia.use(({ store }) => {
  store.router = markRaw(router);
});

const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount('#app');

useTokenInRequest();
