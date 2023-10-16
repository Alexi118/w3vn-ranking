import { createRouter, createWebHashHistory  } from 'vue-router'

import Home from './components/Home.vue'
import DataLadder from './components/Dataladder.vue'
import HallofFame from './components/HallofFame.vue'
import Tutorial from './components/Tutorial.vue'
import Media from'./components/Media.vue'
import Error from './components/Error.vue'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/tutorial',
        component: Tutorial
    },
    {
        path: '/media',
        component: Media
    },
    {
        path: '/dataladder',
        component: DataLadder
    },
    {
        path: '/halloffame',
        component: HallofFame
    },
    {
        path: '/:pathmatch(.*)*',
        component: Error
    },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router