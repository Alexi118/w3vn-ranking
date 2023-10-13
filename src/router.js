import { createRouter, createWebHistory } from 'vue-router'

import Home from './components/Home.vue'
import DataLadder from './components/Dataladder.vue'
import HallofFame from './components/HallofFame.vue'
import Tutorial from './components/Tutorial.vue'
import Media from'./components/Media.vue'
import Error from './components/Error.vue'

const routes = [
    {
        path: '/w3vn-ranking/',
        component: Home
    },
    {
        path: '/w3vn-ranking/tutorial',
        component: Tutorial
    },
    {
        path: '/w3vn-ranking/media',
        component: Media
    },
    {
        path: '/w3vn-ranking/dataladder',
        component: DataLadder
    },
    {
        path: '/w3vn-ranking/halloffame',
        component: HallofFame
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