<script>
import { store } from '../store.js';

export default {
    data() {
        return {
            store
        }
    },
    created() {
        this.updateNavbarState();
    },
    methods: {
        updateNavbarState() {
            this.store.presentation = this.$route.name === 'home';
        }
    }
}
</script>

<template>

    <div>
        <nav class="nav-link">
            <router-link :to="{ name: 'home' }" :class="{ 'active': $route.name === 'home' }" @click="store.presentation = true">Home</router-link>
            <router-link :to="{ name: 'about' }" :class="{ 'active': $route.name === 'about' }" @click="store.presentation = false">About</router-link>
            <!-- <router-link :to="{}" @click="presentation = false">Projects</router-link> -->
            <router-link :to="{ name: 'contact' }" :class="{ 'active': $route.name === 'contact' }" @click="store.presentation = false">Contact</router-link>
        </nav>
    </div>
</template>


<style lang="scss" scoped>
@use "../style/partials/variables" as *;

.active {
    color: $orange;
}

div {
    display: flex;
    justify-content: center;
    
    .nav-link {
        width: 60%;
        display: flex;
        justify-content: space-evenly;
        padding: 20px;
        padding: 10px;
        position: fixed;
        bottom: 10px;
        margin: auto;
        background-color: black;
        border-radius: 16px;

        a {
            text-decoration: none;
            font-size: 1.2rem;
            height: 100%;
            padding: 5px 10px;
            border-radius: 16px;
    
            &:hover {
                color: white;
            }
        }
    }
}
</style>