<script>
import Cards from '../components/Cards.vue';

export default {
    components: {
        Cards
    }
}
</script>

<template>
    <section>
        <div class="nav">
            <hr>
            <h2>PROJECTS</h2>
        </div>
        <ul class="projects">
            <Cards />
        </ul>
    </section>
</template>


<style lang="scss" scoped>
@use "../style/partials/variables" as *;

@keyframes slide-down {
    from {
        transform: translateY(-50px);
        opacity: 0;
    }

    to {
        transform: translateY(0);
        opacity: 1;
    }
}

@keyframes slide-up {
    from {
        bottom: -20px;
        opacity: 0;
    }

    to {
        bottom: 0;
        opacity: 1;
    }
}

section {
    padding: 50px;
    animation: slide-down 1s ease-out;

    .projects {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        list-style-type: none;
    }
}
</style>