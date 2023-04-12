import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Game from '../views/Game.vue'
import Editor from '../views/Editor.vue'
import Registration from '../views/Registration.vue'

// This file controls the routing of the App
// see vue-router docs for more info
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        // useAuth: true
    },
    {
        path: '/game',
        name: 'game',
        component: Game,
    },
    {
        path: '/editor',
        name: 'editor',
        component: Editor,
    },
    {
        path: '/registration',
        name: 'registration',
        component: Registration,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;