import 'regenerator-runtime/runtime.js';
import { createApp } from 'vue';
import router from './router/router.js';
import VCalendar from 'v-calendar';

import './assets/css/base-normalize.css';

import App from './App.vue';

const app = createApp(App);

app.config.unwrapInjectedRef = true;

app.use(router);
app.use(VCalendar);

app.mount('#app');
