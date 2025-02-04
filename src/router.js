import { createRouter, createWebHistory } from 'vue-router';

import Home from './views/Home.vue';
import About from './views/About.vue';
import Contact from './views/Contact.vue';
import Crypto from './views/Crypto.vue';

export default createRouter({
    history: createWebHistory(),
    routes: [
        { component: Home, path: '/' },
        { component: About, path: '/about' },
        { component: Contact, path: '/contact' },
        { component: Crypto, path: '/crypto/:id' },
    ],
});
