import {createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Game from '../views/Game.vue'
import Editor from '../views/Editor.vue'
import SignIn from '../views/SignIn.vue'

// This file controls the routing of the App
// see vue-router docs for more info
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
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
        path: '/signin',
        name: 'SignIn',
        component: SignIn
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;