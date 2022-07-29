import {createRouter, createWebHistory} from 'vue-router'

import DcHeros from "../components/DCHeros.vue"
import Calendar from "../components/Calendar.vue"
import Markdown from "../components/Markdown.vue"
import Slider from "../components/Slider.vue"
import Calculator from "../components/Calculator.vue"

export const routes = [
    {path: '/', component:DcHeros, name:"Home"},
    {path: '/dcheros', component:DcHeros, name:"DC Heros"},
    {path: '/calendar', component:Calendar,  name:"Calendar"},
    {path: '/Markdown', component:Markdown,  name:"Markdown "},
    {path: '/slider', component:Slider,  name:"Slider "},
    {path: '/calculator', component:Calculator,  name:"Calculator "}
]

const router = createRouter({
    routes,
    history:createWebHistory()
});

export default router;