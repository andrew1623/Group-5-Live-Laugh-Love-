import { createApp } from 'vue'
import {VueFire, VueFireAuth} from 'vuefire' 
import './style.css'
import App from './App.vue'
import router from './router'
import { firebaseApp } from './db/firebase'

createApp(App).use(VueFire, {
    firebaseApp,
    modules: [
        VueFireAuth(),
    ],
}).use(router).mount('#app')
