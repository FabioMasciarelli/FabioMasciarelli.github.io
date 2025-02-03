<script>
import { store }  from '../store.js/';

export default {
    data() {
        return {
            store
        }
    }
}


</script>

<template>
    <section>
        <div id="presentation" v-show="this.$route.name == 'home'">
            <h1>Hi! I'm <span>Fabio</span>,</h1>
            <h3>Full Stack Web Developer</h3>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use "../style/partials/variables" as *;

section {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
}
</style>
