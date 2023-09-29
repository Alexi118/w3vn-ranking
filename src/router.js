import { createRouter, createWebHistory } from 'vue-router'

import Home from './components/Home.vue'
import DataLadder from './components/Dataladder.vue'
import Error from './components/Error.vue'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/dataladder',
        component: DataLadder
    },
    {
        path: '/:pathmatch(.*)*',
        component: Error
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router