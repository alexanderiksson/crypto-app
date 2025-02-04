import { createRouter, createWebHistory } from 'vue-router';

import HomeView from './views/HomeView.vue';
import AboutView from './views/AboutView.vue';
import ContactView from './views/ContactView.vue';
import CryptoView from './views/CryptoView.vue';

export default createRouter({
    history: createWebHistory(),
    routes: [
        { component: HomeView, path: '/' },
        { component: AboutView, path: '/about' },
        { component: ContactView, path: '/contact' },
        { component: CryptoView, path: '/crypto/:id' }
    ]
});
