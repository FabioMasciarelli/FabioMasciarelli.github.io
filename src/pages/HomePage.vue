<script>

export default {
    data() {
        return {
            presentation: true
        }
    }
}


</script>

<template>
    <section>
        <div id="presentation" v-if="presentation == true">
            <h1>Hi! I'm <span>Fabio</span>,</h1>
            <h3>Full Stack Web Developer</h3>
        </div>
        <nav :class="presentation == false ? 'navbar-top' : 'navbar'" class="nav-link">
            <router-link :to="{ name: 'home' }" @click="presentation = true"><img src="../assets/img/fm.jpg"
                    alt="logo"></router-link>
            <router-link :to="{ name: 'about' }" @click="presentation = false">About</router-link>
            <!-- <router-link :to="{}" @click="presentation = false">Projects</router-link> -->
            <router-link :to="{ name: 'contact' }" @click="presentation = false">Contact</router-link>
        </nav>
    </section>
</template>

<style scoped lang="scss">
@use "../style/partials/variables" as *;

@keyframes top-motion {
    0% {
        top: +35%;
    }

    100% {
        top: 0;
    }
}

.navbar-top {
    padding-top: 5px;
    z-index: 1;
    position: absolute;
    top: 0;
    animation: top-motion 0.3s linear;

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

section {
    position: relative;
    height: 100vh;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    #presentation {
        z-index: 1;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: start;
        width: 60%;

        h1 {
            font-size: 4rem;

            span {
                color: $orange;
            }
        }

        h3 {
            font-size: 2.3rem;
        }
    }

    nav {
        z-index: 1;
        width: 60%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 2px solid white;

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

}
</style>
