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
    <nav class="nav-link" :class="this.$route.name == 'home' ? 'navbar-middle' : ''">
        <router-link :to="{ name: 'home' }" @click="store.presentation = true"><img src="../assets/img/fm.png"
                alt="logo"></router-link>
        <router-link :to="{ name: 'about' }" @click="store.presentation = false">About</router-link>
        <!-- <router-link :to="{}" @click="presentation = false">Projects</router-link> -->
        <router-link :to="{ name: 'contact' }" @click="store.presentation = false">Contact</router-link>
    </nav>
</template>


<style lang="scss" scoped>
@use "../style/partials/variables" as *;

nav {
    margin: 0 auto;
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid white;
    transition: display 1s linear;

    img {
        height: 35px;
    }

    a {
        text-decoration: none;
        color: white;
        font-size: 1.2rem;
        height: 100%;

        &:hover {
            color: $orange;
        }
    }
}

.navbar-middle {
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>