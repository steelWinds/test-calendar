import 'regenerator-runtime/runtime.js';
import { createApp } from 'vue';
import router from './router/router.js';

import './assets/css/base-normalize.css';

import App from './App.vue';

const app = createApp(App);

app.use(router);

app.mount('#app');
