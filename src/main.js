import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Post from './components/Post.vue'
import Home from './Home.vue'



import { createRouter, createWebHistory } from "vue-router";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name:'Home', component: Home},
        { path: '/posts/:id', name:'posts', component: Post}
    ]
})

export default router

createApp(App)
.use(router)
.mount('#app')
