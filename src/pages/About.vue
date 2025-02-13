<script>
import CodingList from '../components/CodingList.vue';

export default {
    components: {
        CodingList
    }
}



</script>

<template>
    <section>
        <div class="nav">
            <hr>
            <h2>ABOUT ME</h2>
        </div>
        <div class="description">
            <p>Hi, my name is Fabio Masciarelli, i'm from Italy and i have 21 y.o.</p>
            <img src="../assets/img/FM.jpeg" alt="">
        </div>

        <CodingList />
    </section>
</template>

<style scoped lang="scss">
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

section {
    width: 100%;
    color: white;
    padding: 50px;
    animation: slide-down 1s ease-out;

    .description {
        display: flex;
        justify-content: space-evenly;
        margin-bottom: 100px;

        p {
            a {
                color: $orange;
            }
        }

        img {
            height: 250px;
            aspect-ratio: 1;
            border-radius: 50%;
            border: 2px solid $orange;
            padding: 5px;
        }
    }
}
</style>
