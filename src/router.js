import { createRouter, createWebHistory } from 'vue-router'

import Home from './App.vue'
import DataLadder from './components/Dataladder.vue'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/dataladder',
        component: DataLadder
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router