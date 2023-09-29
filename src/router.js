import { createRouter, createWebHistory } from 'vue-router'

import Home from './components/Home.vue'
import DataLadder from './components/Dataladder.vue'
import Error from './components/Error.vue'

const routes = [
    {
        path: '/w3vn-ranking/',
        component: Home
    },
    {
        path: '/w3vn-ranking/dataladder',
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