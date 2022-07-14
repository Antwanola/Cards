import {createRouter, createWebHashHistory} from 'vue-router'

import DcHeros from "../components/DCHeros.vue"
import Calendar from "../components/Calendar.vue"

const routes = [
    {path: '/', component:DcHeros},
    {path: '/dcheros', component:DcHeros},
    {path: '/calendar', component:Calendar}
]

const router = createRouter({
    routes,
    history:createWebHashHistory()
});

export default router;