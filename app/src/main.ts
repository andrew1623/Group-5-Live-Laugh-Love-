import {createApp} from 'vue'
import {createPinia} from 'pinia'
import {VueFire, VueFireAuth} from 'vuefire' 

import App from './App.vue'
import router from './router'
import {firebaseApp} from './db/firebase'
import './style.css'

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.use(VueFire, {
    firebaseApp,
    modules: [
        VueFireAuth(),
    ],
})

app.mount('#app')
