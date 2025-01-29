import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'


export default createRouter({
    history: createWebHistory(),
    routes: [
        {component: Home, path: '/'}
    ]
})
