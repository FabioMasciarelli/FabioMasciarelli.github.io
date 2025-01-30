import { createRouter, createWebHistory } from "vue-router";

import About from './pages/About.vue';
import Home from './pages/HomePage.vue';
import Contact from './pages/Contact.vue';

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/about",
            name: "about",
            component: About
        },
        {
            path: "/contact",
            name: "contact",
            component: Contact
        }
    ]
})