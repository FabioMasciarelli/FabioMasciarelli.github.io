import { createRouter, createWebHistory } from "vue-router";

import About from './pages/About.vue';
import Home from './pages/HomePage.vue';
import Contacts from './pages/Contacts.vue';
import Certifications from './pages/Certifications.vue';

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
            path: "/contacts",
            name: "contacts",
            component: Contacts
        },
        {
            path: "/certifications",
            name: "certifications",
            component: Certifications
        },
    ]
})