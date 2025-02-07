import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import Router from './router';
import { createPinia } from 'pinia';
import piniaPersist from 'pinia-plugin-persistedstate';
import { watchBodyClass } from './store/settingStore';

createApp(App).use(Router).use(createPinia().use(piniaPersist)).mount('#app');
watchBodyClass();
