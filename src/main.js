import '@/assets/styles/main.css';
import '@/assets/js/bootstrap.bundle.min';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from '@/App.vue';
import router from '@/router';

import { useTokenInRequest } from '@/middlewares/access.js';

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');

useTokenInRequest();
