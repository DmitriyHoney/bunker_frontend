import './assets/styles/main.css';
import './assets/js/bootstrap.bundle.min';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

// TODO: REMOVE this logic
import { csv } from './utils/generateAllCards';
window.csv = csv;

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
